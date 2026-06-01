import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, User, Search, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { fetchMediumPosts, type MediumPost } from "@/lib/api/medium";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [mediumPosts, setMediumPosts] = useState<MediumPost[]>([]);
  const [mediumLoading, setMediumLoading] = useState(true);

  useEffect(() => {
    fetchMediumPosts()
      .then(setMediumPosts)
      .catch(() => {})
      .finally(() => setMediumLoading(false));
  }, []);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(mediumPosts.map((p) => p.category))).sort(),
    ],
    [mediumPosts],
  );

  const filteredMedium = useMemo(
    () =>
      mediumPosts.filter((post) => {
        const matchesCategory =
          activeCategory === "All" || post.category === activeCategory;
        const matchesSearch =
          !searchQuery ||
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [mediumPosts, activeCategory, searchQuery],
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog – AbroadMantra | Study Abroad Tips, Guides & News"
        description="Expert advice on studying abroad — visa tips, IELTS prep, cost of living guides, SOP writing, and career guidance for international students."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute top-16 right-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-10 w-[250px] h-[250px] bg-accent/6 rounded-full blur-[80px]" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-[0.15em] mb-5">
                <BookOpen className="h-3.5 w-3.5" /> Our Blog
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                Study Abroad <span className="text-primary">Insights</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mt-5 leading-relaxed max-w-2xl mx-auto">
                Expert tips, in-depth guides, and real stories to prepare you
                for your international education journey.
              </p>

              {/* Search */}
              <div className="mt-8 max-w-lg mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all shadow-sm text-sm"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Pills */}
      <section className="sticky top-16 z-30 bg-background/80 backdrop-blur-xl border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  cat === activeCategory
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-secondary/60 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          {mediumLoading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            </div>
          ) : filteredMedium.length === 0 ? (
            <div className="text-center py-20">
              <Search className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground text-sm">
                Try a different search term or category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMedium.map((post, i) => {
                return (
                  <ScrollReveal key={i} delay={i * 0.08} direction="up">
                    <Link
                      to={post.mediumLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full group"
                    >
                      <article className="rounded-3xl overflow-hidden bg-card border border-border/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                        <div className="relative h-52 overflow-hidden bg-primary/5 flex items-center justify-center">
                          {post.image ? (
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                            />
                          ) : (
                            <BookOpen className="h-12 w-12 text-primary/20" />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 text-primary text-xs font-bold rounded-full">
                            {post.category}
                          </span>
                          <div className="absolute bottom-4 left-4 right-4">
                            <span className="text-white/80 text-xs flex items-center gap-1.5">
                              <Clock className="h-3 w-3" /> {post.readTime}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <h2 className="font-heading text-lg font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug tracking-tight line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between pt-4 border-t border-border/30">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <User className="h-3.5 w-3.5 text-primary" />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-foreground">
                                  {post.author}
                                </p>
                                <p className="text-[10px] text-muted-foreground">
                                  {post.date}
                                </p>
                              </div>
                            </div>
                            <span className="flex items-center gap-1.5 text-primary text-xs font-bold group-hover:gap-2.5 transition-all">
                              Read more{" "}
                              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* More posts */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <Link
                to="https://medium.com/@smit.lakhlani24"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-2xl border border-border text-muted-foreground text-sm font-semibold hover:border-primary/40 hover:text-primary transition-all duration-300"
              >
                View more posts on Medium{" "}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="scale">
            <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-12 md:p-16 text-center overflow-hidden max-w-5xl mx-auto">
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                  Get personalized guidance from our experts. Your first
                  consultation is free!
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-2xl font-bold text-base hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  Book Free Consultation{" "}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
