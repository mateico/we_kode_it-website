import type { Metadata } from "next";
import { BookCallForm } from "@/components/marketing/BookCallForm";

export const metadata: Metadata = {
  title: "Book a call — Mateo Rial",
  description: "Tell me how and when to reach you and I'll confirm a call.",
};

export default function BookACallPage() {
  return <BookCallForm />;
}
