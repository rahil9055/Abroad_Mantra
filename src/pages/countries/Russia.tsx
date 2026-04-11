import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";
import heroImg from "@/assets/countries/russia-hero.jpg";

const Russia = () => (
  <CountryPageLayout
    name="Russia"
    flag="🇷🇺"
    tagline="World-class medical and engineering programs at affordable costs with rich academic traditions."
    description="Russia offers internationally recognized degrees, particularly in medicine, engineering, and sciences, at a fraction of the cost of Western countries. With over 700 universities and a long tradition of academic excellence, Russia attracts 300,000+ international students annually. All our services are provided 100% remotely & online."
    whyStudy={[
      "Affordable tuition (€2,000–€8,000/year) — fraction of the cost of Western countries.",
      "Globally recognized medical degrees — WHO and NMC listed medical universities.",
      "Rich academic tradition with Nobel Prize-winning research institutions.",
      "700+ universities offering programs in English and Russian.",
      "Scholarship opportunities through the Russian Government Scholarship Program.",
      "3-year post-study work visa for graduates seeking employment in Russia.",
    ]}
    stats={[
      { icon: GraduationCap, label: "Universities", value: "700+" },
      { icon: Clock, label: "MBBS Duration", value: "6 Years" },
      { icon: Briefcase, label: "Post-Study Work", value: "3 Years" },
      { icon: Home, label: "Avg Living Cost", value: "€350/mo" },
    ]}
    universities={[
      { name: "Moscow State University", ranking: "QS Rank: #87", specialty: "Sciences, Mathematics, Humanities — Russia's most prestigious university." },
      { name: "St Petersburg State University", ranking: "QS Rank: #264", specialty: "Law, International Relations, Sciences — historic university in Russia's cultural capital." },
      { name: "Novosibirsk State University", ranking: "QS Rank: #352", specialty: "Physics, Mathematics, Sciences — located in Russia's science city." },
      { name: "ITMO University", ranking: "QS Rank: #360", specialty: "Computer Science, Photonics, IT — Russia's top tech university." },
      { name: "Sechenov Medical University", ranking: "Top Medical", specialty: "Medicine, Pharmacy, Dentistry — Russia's oldest and leading medical school." },
      { name: "Kazan Federal University", ranking: "QS Rank: #392", specialty: "Medicine, Law, Sciences — one of the oldest universities in Russia." },
    ]}
    visaRequirements={[
      { title: "Student Visa", desc: "Apply at the Russian embassy with invitation letter from your university, passport photos, medical certificates, and HIV test results." },
      { title: "Invitation Letter", desc: "Your university issues an official invitation letter after admission, which is required for the visa application." },
      { title: "Medical Requirements", desc: "HIV test and general medical fitness certificate are mandatory for visa application. Tests must be recent (within 3 months)." },
      { title: "Registration", desc: "Register with local immigration authorities within 7 working days of arrival. Your university usually handles this." },
      { title: "Visa Renewal", desc: "Student visa is renewed annually. Maintain good academic standing and valid health insurance for renewal." },
    ]}
    costs={[
      { label: "Tuition (Medical)", value: "€3,000 – €8,000/year" },
      { label: "Tuition (Engineering)", value: "€2,000 – €6,000/year" },
      { label: "Accommodation", value: "€50 – €200/month" },
      { label: "Food", value: "€100 – €200/month" },
      { label: "Transport", value: "€15 – €30/month" },
      { label: "Health Insurance", value: "€100 – €200/year" },
    ]}
    highlights={[
      "WHO-listed medical universities",
      "Very affordable education",
      "Russian Government scholarships",
      "Strong STEM programs",
      "Low cost of living",
      "Rich cultural experience",
    ]}
    jobInfo={[
      { title: "Part-Time During Studies", desc: "Students can work up to 20 hours/week with a work permit. University dormitories often have part-time job boards." },
      { title: "Post-Study Options", desc: "Graduates can apply for a 3-year work visa. Medical graduates can practice after clearing the respective country's licensing exam." },
      { title: "Key Industries", desc: "Energy, technology, healthcare, engineering, and research sectors offer employment opportunities for graduates." },
      { title: "Medical Career Path", desc: "MBBS from Russian universities is recognized globally. Graduates can appear for USMLE, PLAB, NMC, or AMC exams." },
    ]}
    applicationSteps={[
      { step: "1", title: "Choose University & Program", desc: "Research Russian universities based on your field. For MBBS, check WHO/NMC listing. Consider climate and city preferences." },
      { step: "2", title: "Submit Application", desc: "Apply directly to the university or through the Russian Government Scholarship portal (open October–December)." },
      { step: "3", title: "Receive Admission & Invitation", desc: "University issues acceptance letter and official invitation for visa purposes. Processing takes 2–4 weeks." },
      { step: "4", title: "Medical Tests", desc: "Complete required medical tests including HIV test. Get documents notarized and apostilled." },
      { step: "5", title: "Apply for Visa", desc: "Submit visa application at the Russian embassy with invitation letter, medical certificates, and proof of funds." },
      { step: "6", title: "Arrival & Registration", desc: "University provides airport pickup. Register with immigration within 7 days. Attend orientation and medical check-up." },
    ]}
    testimonials={[
      { name: "Amit Sharma", course: "MBBS", university: "Sechenov Medical University", text: "Studying medicine in Moscow was the best decision. The clinical exposure and practical training are exceptional, and my degree is recognized worldwide." },
      { name: "Grace Williams", course: "BSc Physics", university: "Moscow State University", text: "MSU's physics department is legendary. The research opportunities and Nobel Prize-winning faculty make it an incredible learning environment." },
      { name: "Rajesh Kumar", course: "MS Engineering", university: "ITMO University", text: "ITMO is Russia's tech powerhouse. The programming competitions and industry connections helped me land a great job in IT." },
    ]}
    faqs={[
      { q: "Is MBBS from Russia valid internationally?", a: "Yes! Most Russian medical universities are WHO and NMC listed. Graduates can appear for licensing exams (USMLE, PLAB, NMC, FMGE) in their home country." },
      { q: "Do I need to learn Russian?", a: "Many programs are now offered in English. However, for MBBS, clinical years often involve patient interaction in Russian. Universities provide Russian language courses." },
      { q: "How cold is Russia?", a: "Winters can be harsh (-20°C to -30°C in some cities). Moscow and St Petersburg have milder winters (-5°C to -15°C). Universities provide heated dormitories." },
      { q: "Is Russia safe for international students?", a: "Major university cities are generally safe. Universities have international student offices that provide support and guidance for daily life." },
      { q: "What is the cost of living in Russia?", a: "Russia is extremely affordable. Dormitory accommodation costs €30–€100/month, and a monthly food budget of €100–€200 is sufficient." },
    ]}
    scholarships={[
      { name: "Russian Government Scholarship", desc: "Fully-funded scholarships for international students covering tuition, accommodation, and monthly stipend." },
      { name: "Open Doors Olympiad", desc: "Win a scholarship by competing in academic olympiads. Top performers get full tuition waivers." },
      { name: "University-Specific Scholarships", desc: "MSU, ITMO, and other top universities offer merit-based tuition reductions for high-achieving students." },
      { name: "Bilateral Agreements", desc: "Scholarships available through diplomatic agreements between Russia and specific countries." },
      { name: "Rossotrudnichestvo Programs", desc: "Cultural and educational exchange scholarships managed by Russia's international cooperation agency." },
    ]}
  />
);

export default Russia;
