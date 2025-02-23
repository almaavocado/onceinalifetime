import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  { question: "What is your refund policy?", answer: "We offer a 30-day money-back guarantee on all purchases." },
  { question: "How do I contact support?", answer: "You can reach us via email at support@example.com or through our live chat." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide with standard and express options available." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="p-4 border rounded-lg shadow-sm">
            <button
              className="w-full flex justify-between items-center text-lg font-medium"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && <CardContent className="mt-2 text-gray-600">{faq.answer}</CardContent>}
          </Card>
        ))}
      </div>
    </div>
  );
}