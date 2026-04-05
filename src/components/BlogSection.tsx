import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

import { blogPosts } from "@/data/blogPosts";

const posts = blogPosts.slice(0, 3);

const categoryColors: Record<string, string> = {
  Guides: "bg-primary/10 text-primary",
  "Visa Tips": "bg-accent/15 text-accent-foreground",
  "Test Prep": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
};

const BlogSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Latest <span className="text-primary">Insights</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Expert tips and guides to help you on your study abroad journey.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1} direction="up">
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <article className="group rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={800}
                      height={512}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[post.category] || "bg-secondary text-foreground"}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug tracking-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground/70 pt-3 border-t border-border">
                      <span className="flex items-center gap-1.5"><User className="h-3 w-3" />{post.author}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" />{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all"
            >
              View All Posts <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogSection;
