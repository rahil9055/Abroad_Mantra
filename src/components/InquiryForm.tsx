import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface InquiryFormProps {
  serviceType: "accommodation" | "jobs" | "consultation" | "visa" | "remonstration";
  title?: string;
}

const MAX_NAME = 100;
const MAX_EMAIL = 255;
const MAX_PHONE = 20;
const MAX_POSTAL = 20;
const MAX_PROGRAM = 200;
const MAX_MESSAGE = 1000;

const InquiryForm = ({ serviceType, title }: InquiryFormProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    program: "",
    country: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Invalid email";
    if (!form.postalCode.trim()) e.postalCode = "Postal code is required";
    if (!form.program.trim()) e.program = "Program/Course is required";
    if (!form.country.trim()) e.country = "Country is required";
    if (!form.message.trim()) e.message = "Please describe your requirements";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const serviceLabels: Record<string, string> = {
    accommodation: "Accommodation Support",
    jobs: "Job Assistance",
    consultation: "Study Abroad Consultation",
    visa: "Visa Assistance",
    remonstration: "Visa Remonstration",
  };
  const serviceLabel = serviceLabels[serviceType] || serviceType;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: `${serviceLabel} Inquiry`,
          message: `Service: ${serviceLabel}\nPostal Code: ${form.postalCode}\nProgram: ${form.program}\nCountry: ${form.country}\n\n${form.message}`,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        toast({ title: "Inquiry Sent!", description: "We'll get back to you within 24 hours." });
      } else {
        toast({ title: "Error", description: "Failed to send. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  if (submitted) {
    return (
      <div className="glass-card gradient-border rounded-2xl p-8 text-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Inquiry Received!</h3>
        <p className="text-muted-foreground mb-6">Our team will review your requirements and respond within 24 hours.</p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", postalCode: "", program: "", country: "", message: "" }); }}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-all"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg bg-background border ${errors[field] ? "border-destructive" : "border-border"} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all`;

  const countries = serviceType === "accommodation"
    ? ["United Kingdom", "Australia", "Canada", "USA", "Germany", "Malta", "Turkey", "Russia", "China", "Singapore", "Malaysia"]
    : ["United Kingdom", "Australia", "Canada", "USA", "Germany", "Malta", "Turkey", "Russia", "China", "Singapore", "Malaysia"];

  return (
    <div className="glass-card gradient-border rounded-2xl p-8">
      <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
        {title || (serviceType === "accommodation" ? "Accommodation Inquiry" : "Job Support Inquiry")}
      </h2>
      <p className="text-muted-foreground text-sm mb-6">
        Fill in your details and we'll find the best options for you. All support is provided <strong className="text-foreground">100% remotely & online</strong>.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
            <input type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} maxLength={MAX_NAME} placeholder="John Doe" className={inputClass("name")} />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address *</label>
            <input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} maxLength={MAX_EMAIL} placeholder="john@example.com" className={inputClass("email")} />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
            <input type="tel" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} maxLength={MAX_PHONE} placeholder="+91 92748 61114" className={inputClass("phone")} />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Postal / ZIP Code *</label>
            <input type="text" value={form.postalCode} onChange={(e) => handleChange("postalCode", e.target.value)} maxLength={MAX_POSTAL} placeholder="500032" className={inputClass("postalCode")} />
            {errors.postalCode && <p className="text-destructive text-xs mt-1">{errors.postalCode}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Program / Course *</label>
            <input type="text" value={form.program} onChange={(e) => handleChange("program", e.target.value)} maxLength={MAX_PROGRAM} placeholder="MSc Computer Science" className={inputClass("program")} />
            {errors.program && <p className="text-destructive text-xs mt-1">{errors.program}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Country of Interest *</label>
            <select value={form.country} onChange={(e) => handleChange("country", e.target.value)} className={inputClass("country")}>
              <option value="">Select country</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.country && <p className="text-destructive text-xs mt-1">{errors.country}</p>}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">
            {serviceType === "accommodation" ? "Accommodation Requirements *" : "Job Support Requirements *"}
          </label>
          <textarea
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            maxLength={MAX_MESSAGE}
            rows={4}
            placeholder={serviceType === "accommodation"
              ? "Budget range, preferred area, shared/private, move-in date, special requirements..."
              : "Type of work (part-time/full-time), field of interest, work experience, availability..."}
            className={`${inputClass("message")} resize-none`}
          />
          <div className="flex justify-between mt-1">
            {errors.message && <p className="text-destructive text-xs">{errors.message}</p>}
            <span className="text-xs text-muted-foreground ml-auto">{form.message.length}/{MAX_MESSAGE}</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Submit Inquiry"}
          <Send className={`h-4 w-4 ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-1"} transition-transform`} />
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;
