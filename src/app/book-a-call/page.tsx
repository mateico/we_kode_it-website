import type { Metadata } from "next";
import { Header } from "@/components/marketing/Header";
import { BookCallForm } from "@/components/marketing/BookCallForm";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Book a call — WeKodeit",
  description: "Tell us how and when to reach you and we'll confirm a call.",
};

export default function BookACallPage() {
  return (
    <div>
      <Header className="md:hidden" />

      <div className="relative px-8 max-w-[1197px] mx-auto">
        <div aria-hidden className="absolute inset-y-0 left-4 w-px bg-line" />
        <div aria-hidden className="absolute inset-y-0 right-4 w-px bg-line" />
        <Header className="hidden md:block" />

        <BookCallForm />
      </div>

      <Footer />
    </div>
  );
}
