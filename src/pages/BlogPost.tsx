import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, ChevronRight, Share2, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import { getBlogPost, blogPosts } from "@/data/blogPosts";
import { blogImageMap } from "@/data/blogImages";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const relatedFill = related.length < 3
    ? [...related, ...blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category).slice(0, 3 - related.length)]
    : related;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: { "@type": "Person", name: post.author },
    datePublished: new Date(post.date).toISOString(),
    publisher: {
      "@type": "Organization",
      name: "AbroadMantra",
      url: "https://abroadmantra.com",
    },
    mainEntityOfPage: `https://abroadmantra.com/blog/${post.slug}`,
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
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
      <section className="relative pt-20">
        <div className="relative h-[340px] md:h-[480px] w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-black/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10 -mt-52 md:-mt-64">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-xs text-white/70 mb-6 backdrop-blur-sm bg-black/10 rounded-full px-4 py-2 w-fit">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-white font-medium truncate max-w-[200px]">{post.category}</span>
              </nav>

              <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {post.readTime}
                  </span>
                </div>

                <h1 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground leading-[1.15] tracking-tight">
                  {post.title}
                </h1>
                <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed max-w-3xl">
                  {post.excerpt}
                </p>

                {/* Author bar */}
                <div className="flex flex-wrap items-center gap-5 mt-8 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-md">
                      <User className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{post.author}</p>
                      <p className="text-xs text-muted-foreground">AbroadMantra Expert</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ml-auto">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />{post.date}
                    </span>
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-full border border-border hover:border-primary/30"
                    >
                      <Share2 className="h-3.5 w-3.5" /> Share
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Table of contents sidebar hint */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-10 pb-6 border-b border-border/50">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="font-medium">Comprehensive guide</span>
              <span className="mx-1">•</span>
              <span>{post.readTime}</span>
              <span className="mx-1">•</span>
              <span>By {post.author}</span>
            </div>

            <article className="
              prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-heading prose-headings:text-foreground prose-headings:tracking-tight
              prose-h2:text-[1.65rem] prose-h2:md:text-[1.85rem] prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-border/40 prose-h2:font-extrabold
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:font-bold
              prose-p:text-muted-foreground prose-p:leading-[1.9] prose-p:text-[16px] prose-p:mb-5
              prose-li:text-muted-foreground prose-li:leading-[1.85] prose-li:text-[16px] prose-li:marker:text-primary
              prose-ul:my-5 prose-ol:my-5 prose-ul:pl-4 prose-ol:pl-4
              prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-a:transition-colors
              prose-strong:text-foreground prose-strong:font-bold
              prose-th:text-foreground prose-th:font-bold prose-th:text-sm prose-th:py-3.5 prose-th:px-5 prose-th:bg-primary/5 prose-th:text-left prose-th:border-b-2 prose-th:border-primary/20
              prose-td:text-muted-foreground prose-td:text-sm prose-td:py-3.5 prose-td:px-5 prose-td:border-b prose-td:border-border/30
              prose-table:border prose-table:border-border/40 prose-table:rounded-2xl prose-table:overflow-hidden prose-table:shadow-sm prose-table:my-8
              prose-blockquote:border-l-4 prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:my-8
              prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:font-normal
              prose-img:rounded-2xl prose-img:shadow-lg
            ">
              <ReactMarkdown
                components={{
                  img: ({ src, alt, ...props }) => {
                    const resolvedSrc = src?.startsWith("blog:")
                      ? blogImageMap[src.replace("blog:", "")]
                      : src;
                    return (
                      <figure className="my-10 group">
                        <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/20">
                          <img
                            src={resolvedSrc}
                            alt={alt || ""}
                            className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                        </div>
                        {alt && (
                          <figcaption className="text-center text-xs text-muted-foreground mt-3 italic opacity-80">
                            {alt}
                          </figcaption>
                        )}
                      </figure>
                    );
                  },
                  table: ({ children, ...props }) => (
                    <div className="my-8 overflow-x-auto rounded-2xl border border-border/40 shadow-sm">
                      <table className="w-full" {...props}>{children}</table>
                    </div>
                  ),
                  thead: ({ children, ...props }) => (
                    <thead className="bg-primary/5" {...props}>{children}</thead>
                  ),
                  tr: ({ children, ...props }) => (
                    <tr className="border-b border-border/20 last:border-b-0 hover:bg-muted/30 transition-colors" {...props}>{children}</tr>
                  ),
                } as Components}
              >
                {post.content}
              </ReactMarkdown>
            </article>

            {/* Tags */}
            <div className="mt-14 pt-8 border-t border-border/40 flex flex-wrap items-center gap-3">
              <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Tags:</span>
              {[post.category, "Study Abroad", "International Students"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-secondary/80 text-foreground text-xs rounded-full font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            {/* Prev / Next */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost ? (
                <Link to={`/blog/${prevPost.slug}`} className="group flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Previous</span>
                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug mt-0.5 line-clamp-2">{prevPost.title}</p>
                  </div>
                </Link>
              ) : <div />}
              {nextPost ? (
                <Link to={`/blog/${nextPost.slug}`} className="group flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 md:flex-row-reverse md:text-right">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Next</span>
                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug mt-0.5 line-clamp-2">{nextPost.title}</p>
                  </div>
                </Link>
              ) : <div />}
            </div>

            {/* CTA */}
            <div className="mt-16">
              <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-10 md:p-14 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-primary-foreground mb-3">
                    Need Expert Guidance?
                  </h3>
                  <p className="text-primary-foreground/80 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
                    Get personalized advice from our consultants — your first consultation is completely free.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-2xl font-bold text-sm hover:scale-105 hover:shadow-2xl transition-all duration-300"
                  >
                    Book Free Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Keep Reading</span>
              <h2 className="font-heading text-3xl font-extrabold text-foreground mt-2">
                Related <span className="text-primary">Articles</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedFill.map((r, i) => (
              <ScrollReveal key={r.slug} delay={i * 0.12} direction="up">
                <Link to={`/blog/${r.slug}`} className="group block h-full">
                  <article className="rounded-3xl border border-border/50 bg-card overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-primary text-xs font-bold rounded-full">
                        {r.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3 tracking-tight">
                        {r.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-2">{r.excerpt}</p>
                      <div className="flex items-center gap-2 text-primary text-sm font-bold mt-4 group-hover:gap-3 transition-all">
                        Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
