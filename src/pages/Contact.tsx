import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Linkedin, Twitter, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, label: "Email", value: "info@abroadmantra.com", href: "mailto:info@abroadmantra.com" },
  { icon: MapPin, label: "Office", value: "123 Education Lane, Hyderabad, India 500032", href: "#map" },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 10 AM – 7 PM", href: null },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/" },
];

const MAX_NAME = 100;
const MAX_EMAIL = 255;
const MAX_PHONE = 20;
const MAX_SUBJECT = 150;
const MAX_MESSAGE = 1000;

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name) e.name = "Name is required";
    else if (name.length > MAX_NAME) e.name = `Max ${MAX_NAME} characters`;

    if (!email) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Invalid email address";
    else if (email.length > MAX_EMAIL) e.email = `Max ${MAX_EMAIL} characters`;

    if (form.phone && form.phone.length > MAX_PHONE) e.phone = `Max ${MAX_PHONE} characters`;

    if (form.subject && form.subject.length > MAX_SUBJECT) e.subject = `Max ${MAX_SUBJECT} characters`;

    if (!message) e.message = "Message is required";
    else if (message.length > MAX_MESSAGE) e.message = `Max ${MAX_MESSAGE} characters`;

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Us – AbroadMantra | Free Study Abroad Consultation"
        description="Get in touch with AbroadMantra for free study abroad consultation. Call, email, WhatsApp, or visit our Hyderabad office. We respond within 24 hours."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative hero-gradient pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-accent/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mt-3 leading-tight">
                Let's Start Your <span className="text-primary">Journey</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-5 leading-relaxed">
                Have questions? Book a free consultation or drop us a message — we're here to help.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form - 3 cols */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
                <div className="glass-card gradient-border rounded-2xl p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                      <p className="text-muted-foreground mb-6">We've received your message and will respond within 24 hours.</p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-all"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                            <input
                              type="text"
                              value={form.name}
                              onChange={(e) => handleChange("name", e.target.value)}
                              maxLength={MAX_NAME}
                              placeholder="John Doe"
                              className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.name ? "border-destructive" : "border-border"} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all`}
                            />
                            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                          </div>
                          <div>
                            <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address *</label>
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) => handleChange("email", e.target.value)}
                              maxLength={MAX_EMAIL}
                              placeholder="john@example.com"
                              className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.email ? "border-destructive" : "border-border"} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all`}
                            />
                            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => handleChange("phone", e.target.value)}
                              maxLength={MAX_PHONE}
                              placeholder="+91 98765 43210"
                              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                            <input
                              type="text"
                              value={form.subject}
                              onChange={(e) => handleChange("subject", e.target.value)}
                              maxLength={MAX_SUBJECT}
                              placeholder="Visa Enquiry"
                              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                          <textarea
                            value={form.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            maxLength={MAX_MESSAGE}
                            rows={5}
                            placeholder="Tell us about your study abroad plans..."
                            className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.message ? "border-destructive" : "border-border"} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none`}
                          />
                          <div className="flex justify-between mt-1">
                            {errors.message && <p className="text-destructive text-xs">{errors.message}</p>}
                            <span className="text-xs text-muted-foreground ml-auto">{form.message.length}/{MAX_MESSAGE}</span>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
                        >
                          Send Message <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Info sidebar - 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal direction="right">
                <div className="glass-card gradient-border rounded-2xl p-7 space-y-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">Get In Touch</h3>
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="block text-sm text-foreground font-medium hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* WhatsApp CTA */}
              <ScrollReveal direction="right" delay={0.15}>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card gradient-border rounded-2xl p-6 flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300 block"
                >
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0 group-hover:bg-success transition-all duration-300">
                    <MessageCircle className="h-6 w-6 text-success group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">Chat on WhatsApp</h4>
                    <p className="text-muted-foreground text-sm">Get instant answers to your questions</p>
                  </div>
                </a>
              </ScrollReveal>

              {/* Socials */}
              <ScrollReveal direction="right" delay={0.25}>
                <div className="glass-card gradient-border rounded-2xl p-6">
                  <h4 className="font-heading font-semibold text-foreground mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300 hover:scale-110"
                      >
                        <s.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Location</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                Visit Our <span className="text-primary">Office</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up">
            <div className="glass-card gradient-border rounded-2xl overflow-hidden">
              <iframe
                title="AbroadMantra Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3169824679!2d78.24323159453122!3d17.412608699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
