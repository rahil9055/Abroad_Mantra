export interface MediumPost {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  mediumLink: string;
  category: string;
}

export async function fetchMediumPosts(): Promise<MediumPost[]> {
  const response = await fetch('/api/medium');
  if (!response.ok) throw new Error('Failed to fetch Medium posts');
  return response.json();
}
