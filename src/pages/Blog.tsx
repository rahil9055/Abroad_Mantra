import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

import { blogPosts } from "@/data/blogPosts";

const posts = blogPosts;

const categories = ["All", "Guides", "Visa Tips", "Test Prep", "Living Abroad", "Career", "Applications"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog – AbroadMantra | Study Abroad Tips, Guides & News"
        description="Expert advice on studying abroad — visa tips, IELTS prep, cost of living guides, SOP writing, and career guidance for international students."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative hero-gradient pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-accent/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Blog</span>
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mt-3 leading-tight">
                Study Abroad <span className="text-primary">Insights</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-5 leading-relaxed">
                Expert tips, guides, and news to help you prepare for your international education journey.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Pills */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${cat === "All" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-primary/10"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08} direction="up">
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <article className="glass-card gradient-border rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  <div className="h-32 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 flex items-center justify-center">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">{post.category}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><User className="h-3 w-3" />{post.author}</span>
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                      </div>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="scale">
            <div className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-blob" />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Start Your Journey?</h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">Get personalized guidance from our experts. Your first consultation is free!</p>
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                  Book Free Consultation <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
