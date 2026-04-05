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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-heading prose-headings:text-foreground prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-[1.8] prose-p:text-[16px]
              prose-li:text-muted-foreground prose-li:leading-[1.8] prose-li:text-[16px]
              prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-th:text-foreground prose-th:font-semibold prose-th:text-sm prose-th:py-3 prose-th:px-4 prose-th:bg-secondary/50
              prose-td:text-muted-foreground prose-td:text-sm prose-td:py-2.5 prose-td:px-4
              prose-table:border prose-table:border-border prose-table:rounded-lg prose-table:overflow-hidden
              prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-1 prose-blockquote:rounded-r-lg
              prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-img:rounded-xl prose-img:shadow-md
            ">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>

            {/* Share & CTA */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="bg-primary/5 rounded-2xl p-8 text-center">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Found this helpful?</h3>
                <p className="text-muted-foreground text-sm mb-5">Get personalized guidance from our experts — your first consultation is free.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all text-sm">
                  Book Free Consultation <ArrowLeft className="h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
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
