import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Users, GraduationCap, Globe, Award, Heart, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  { icon: Heart, title: "Student First", desc: "Every decision we make puts your success and well-being at the center." },
  { icon: Award, title: "Excellence", desc: "We maintain the highest standards in guidance, documentation, and support." },
  { icon: Globe, title: "Global Reach", desc: "Partnerships with universities and employers across 15+ countries." },
  { icon: Users, title: "Personalized Care", desc: "No cookie-cutter advice — every plan is tailored to your goals." },
];

const milestones = [
  { year: "2018", title: "Founded", desc: "AbroadMantra was born with a mission to simplify studying abroad." },
  { year: "2019", title: "500+ Students", desc: "Reached our first major milestone helping students across India." },
  { year: "2021", title: "15+ Countries", desc: "Expanded our services to cover top study destinations worldwide." },
  { year: "2023", title: "1000+ Success Stories", desc: "Celebrated over a thousand successful visa approvals and placements." },
  { year: "2024", title: "Full-Service Platform", desc: "Launched accommodation, tutoring, and job assistance services." },
];

const team = [
  { name: "Rahul Sharma", role: "Founder & CEO", desc: "10+ years in international education consulting.", initials: "RS" },
  { name: "Priya Patel", role: "Head of Visa Services", desc: "Expert in UK, Canada & Australia visa processes.", initials: "PP" },
  { name: "Amit Kumar", role: "Career Counselor", desc: "Helps students find the perfect course & university.", initials: "AK" },
  { name: "Sneha Reddy", role: "Student Support Lead", desc: "Ensures seamless accommodation & settling-in.", initials: "SR" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative hero-gradient pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-accent/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mt-3 leading-tight">
                Empowering Students to <span className="text-primary">Study Abroad</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-5 leading-relaxed">
                AbroadMantra is a trusted consultancy helping international students navigate every step of their journey — from visa applications to settling into a new country.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="glass-card gradient-border rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To simplify the study abroad process by providing end-to-end support — from university selection and visa filing to accommodation and career placement — ensuring every student achieves their global education dreams.
                </p>
                <ul className="mt-5 space-y-2">
                  {["Transparent & honest guidance", "Affordable for every student", "Continuous support even after arrival"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="glass-card gradient-border rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                  <Eye className="h-7 w-7 text-accent" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted global platform for international students, recognized for transforming lives through accessible education consulting and comprehensive post-arrival support.
                </p>
                <ul className="mt-5 space-y-2">
                  {["Be the #1 student consultancy in India", "Expand to 25+ destination countries", "Build a global alumni network"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                Our Core <span className="text-primary">Values</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-7 text-center h-full group hover:-translate-y-2 transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <v.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                Milestones That <span className="text-primary">Define Us</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            </div>
          </ScrollReveal>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex items-start mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10" />

                  {/* Card */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-0 md:mr-auto md:pl-0" : "md:pl-0 md:ml-auto"}`}>
                    <div className="glass-card gradient-border rounded-xl p-5 hover:-translate-y-1 transition-all duration-300">
                      <span className="text-primary font-bold text-lg font-heading">{m.year}</span>
                      <h3 className="font-heading font-semibold text-foreground mt-1">{m.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{m.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                Meet the <span className="text-primary">Experts</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                A passionate team dedicated to making your study abroad dream a reality.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1} direction="scale">
                <div className="glass-card gradient-border rounded-2xl p-6 text-center group hover:-translate-y-2 transition-all duration-500">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary font-heading font-bold text-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    {member.initials}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{member.name}</h3>
                  <span className="text-primary text-sm font-medium">{member.role}</span>
                  <p className="text-muted-foreground text-sm mt-2">{member.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="scale">
            <div className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-blob" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Begin Your Journey?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Let our experts guide you every step of the way — from choosing the right university to landing in your dream country.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Get Free Consultation <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

export default About;
