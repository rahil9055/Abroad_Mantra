import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import { getBlogPost, blogPosts } from "@/data/blogPosts";
import ReactMarkdown from "react-markdown";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    datePublished: new Date(post.date).toISOString(),
    publisher: {
      "@type": "Organization",
      name: "AbroadMantra",
      url: "https://abroadmantra.com",
    },
    mainEntityOfPage: `https://abroadmantra.com/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`https://abroadmantra.com/blog/${post.slug}`}
        jsonLd={jsonLd}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative hero-gradient pt-32 pb-16 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl animate-blob" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-6 text-sm font-medium">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <div className="max-w-3xl">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {post.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><User className="h-4 w-4" />{post.author}</span>
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{post.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readTime}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-th:text-foreground prose-td:text-muted-foreground">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            Related <span className="text-primary">Articles</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {related.map((r) => (
              <Link key={r.slug} to={`/blog/${r.slug}`} className="group">
                <article className="rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="h-24 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 flex items-center justify-center">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">{r.category}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                      {r.title}
                    </h3>
                    <p className="text-muted-foreground text-xs flex-1">{r.excerpt.slice(0, 80)}...</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
