import type { Metadata } from "next";
import { BookCallForm } from "@/components/marketing/BookCallForm";

export const metadata: Metadata = {
  title: "Book a call — WeKodeit",
  description: "Tell us how and when to reach you and we'll confirm a call.",
};

export default function BookACallPage() {
  return <BookCallForm />;
}
