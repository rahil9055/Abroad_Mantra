import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, ChevronRight } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`https://abroadmantra.com/blog/${post.slug}`}
        jsonLd={jsonLd}
      />
      <Navbar />

      {/* Hero with featured image */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        {/* Featured Image */}
        <div className="relative h-[300px] md:h-[420px] w-full">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        {/* Overlapping content card */}
        <div className="container mx-auto px-4 relative z-10 -mt-40 md:-mt-48">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-5">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-foreground font-medium truncate max-w-[200px]">{post.title}</span>
              </nav>

              <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {post.category}
                </span>
                <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight tracking-tight">
                  {post.title}
                </h1>
                <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author bar */}
                <div className="flex flex-wrap items-center gap-5 mt-6 pt-5 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{post.author}</p>
                      <p className="text-xs text-muted-foreground">AbroadMantra Expert</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground ml-auto">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-heading prose-headings:text-foreground prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-[1.85] prose-p:text-[15.5px] prose-p:mb-5
              prose-li:text-muted-foreground prose-li:leading-[1.8] prose-li:text-[15.5px]
              prose-ul:my-4 prose-ol:my-4
              prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-th:text-foreground prose-th:font-semibold prose-th:text-sm prose-th:py-3 prose-th:px-4 prose-th:bg-secondary/50 prose-th:text-left
              prose-td:text-muted-foreground prose-td:text-sm prose-td:py-3 prose-td:px-4
              prose-table:border prose-table:border-border prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-sm
              prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-5 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
              prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal
              prose-img:rounded-2xl prose-img:shadow-md
            ">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>

            {/* Tags / Category */}
            <div className="mt-12 flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium">Tags:</span>
              <span className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full">{post.category}</span>
              <span className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full">Study Abroad</span>
              <span className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full">International Students</span>
            </div>

            {/* Prev / Next navigation */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost ? (
                <Link to={`/blog/${prevPost.slug}`} className="group flex items-start gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all">
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary mt-0.5 shrink-0 transition-colors" />
                  <div>
                    <span className="text-xs text-muted-foreground">Previous</span>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mt-0.5">{prevPost.title}</p>
                  </div>
                </Link>
              ) : <div />}
              {nextPost ? (
                <Link to={`/blog/${nextPost.slug}`} className="group flex items-start gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all text-right md:ml-auto">
                  <div>
                    <span className="text-xs text-muted-foreground">Next</span>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mt-0.5">{nextPost.title}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary mt-0.5 shrink-0 transition-colors" />
                </Link>
              ) : <div />}
            </div>

            {/* CTA */}
            <div className="mt-14">
              <div className="relative bg-primary rounded-2xl p-8 md:p-10 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground mb-2">Need Expert Guidance?</h3>
                  <p className="text-primary-foreground/80 text-sm mb-6 max-w-md mx-auto">Get personalized advice from our consultants — your first consultation is completely free.</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-background text-primary rounded-xl font-semibold text-sm hover:scale-105 hover:shadow-xl transition-all duration-300">
                    Book Free Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
              Related <span className="text-primary">Articles</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedFill.map((r, i) => (
              <ScrollReveal key={r.slug} delay={i * 0.1} direction="up">
                <Link to={`/blog/${r.slug}`} className="group block h-full">
                  <article className="rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full backdrop-blur-sm">{r.category}</span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2 tracking-tight">
                        {r.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed flex-1 line-clamp-2">{r.excerpt}</p>
                      <div className="flex items-center gap-1.5 text-primary text-xs font-medium mt-3">
                        Read more <ArrowRight className="h-3 w-3" />
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
