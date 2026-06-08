import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeacherGrid from "@/components/TeacherGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TeacherGrid />
      <Footer />
    </main>
  );
}