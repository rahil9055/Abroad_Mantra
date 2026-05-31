import Parser from 'rss-parser';

const MEDIUM_RSS_URL = 'https://medium.com/feed/@smit.lakhlani24';
const MAX_POSTS = 6;

function extractFirstImage(content) {
  if (!content) return '';

  const imgRegex = /<img[^>]+src="([^">]+)"[^>]*>/g;
  let match;

  while ((match = imgRegex.exec(content)) !== null) {
    const imgTag = match[0];
    const src = match[1];

    if (
      (imgTag.includes('width="1"') && imgTag.includes('height="1"')) ||
      src.includes('/_/stat?') ||
      src.includes('/stat?event=')
    ) {
      continue;
    }

    return src;
  }

  return '';
}

function extractExcerpt(content) {
  if (!content) return '';

  const pMatch = content.match(/<p>(.*?)<\/p>/);
  if (pMatch && pMatch[1]) {
    let text = pMatch[1].replace(/<[^>]*>/g, '');
    text = text.replace(/\s+/g, ' ').trim();

    if (text.length > 150) {
      const trimmed = text.slice(0, 150);
      const lastSpace = trimmed.lastIndexOf(" ");
      return (lastSpace > 0 ? trimmed.slice(0, lastSpace) : trimmed) + "...";
    }
    return text;
  }

  return '';
}

function cleanUrl(url) {
  if (!url) return '';
  const clean = url.split('?')[0];
  return clean;
}

function estimateReadTime(content) {
  if (!content) return '1 min read';
  const text = content.replace(/<[^>]*>/g, '');
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const parser = new Parser({
      customFields: {
        item: ['content:encoded', 'dc:creator', 'category'],
      },
    });

    const feed = await parser.parseURL(MEDIUM_RSS_URL);

    const posts = feed.items.slice(0, MAX_POSTS).map((item) => {
      const content = item['content:encoded'] || item.content || '';

      const categories = Array.isArray(item.category)
        ? item.category
        : item.category
        ? [item.category]
        : [];

      return {
        title: item.title || 'Medium Post',
        excerpt: extractExcerpt(content),
        image: extractFirstImage(content),
        author: item['dc:creator'] || item.creator || 'Abroad Mantra',
        date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
        readTime: estimateReadTime(content),
        mediumLink: cleanUrl(item.link),
        category: categories[0] || 'medium',
      };
    });

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
    return res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching Medium RSS:', error);
    return res.status(500).json({ message: 'Failed to fetch Medium posts' });
  }
}