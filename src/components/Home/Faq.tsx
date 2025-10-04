import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";
import { GraduationCap, Lightbulb } from "lucide-react";
import { Card } from "../ui/card";

type FaqType = {
  question: string;
  answer: string;
};

const Faq = () => {
  const FaqQuestions: FaqType[] = [
    {
      question: "Czy ta strona naprawdę pomoże mi zdać egzamin?",
      answer:
        "Tak! Używam oficjalnych pytań z CKE i arkuszy z poprzednich lat. Sam zdałem dzięki podobnym materiałom. Oczywiście musisz się też uczyć, ale to dobre miejsce na powtórkę oraz źródło materiałów do nauki! ",
    },
    {
      question: "Dla kogo jest ta strona?",
      answer:
        'Ta strona jest dla każdego. Ale szczególnie dla uczniów, którzy chcą zdać egzaminy zawodowe INF.03 i INF.04 i są na kierunku "technik-programista".',
    },
    {
      question: "Ile kosztuje korzystanie ze strony?",
      answer:
        "Nic! Jest to projekt non-profit. Robiłem to w wolnym czasie. Jeśli chcesz, możesz wesprzeć projekt przez przycisk 'Wspieraj' ☕",
    },
    {
      question: "Skąd biorą się pytania w testach?",
      answer:
        "Wszystkie pytania pochodzą z oficjalnej bazy CKE (Centralna Komisja Egzaminacyjna). To te same pytania, które mogą pojawić się na prawdziwym egzaminie! 📋",
    },
    {
      question: "Czy mogę powtarzać testy?",
      answer:
        "Oczywiście! Możesz robić tyle testów ile chcesz. Każdy test losuje inne pytania, więc zawsze będziesz ćwiczył coś nowego 🔄",
    },
    {
      question: "Co to są arkusze praktyczne?",
      answer:
        "To prawdziwe zadania z egzaminów z poprzednich lat. Znajdziesz tam kompletne polecenia i przykładowe rozwiązania. Super do ćwiczenia przed praktyczną częścią egzaminu! 💻",
    },
    {
      question: "Różnica między INF.03 a INF.04?",
      answer:
        'INF.03 to głównie web development (HTML, CSS, JS, PHP, SQL), a INF.04 to bardziej programowanie aplikacji (Python, C++, bazy danych, czasem React!). Trzeba zdać obie kwalfikacje, aby uzyskać tytuł "Technik-programista".',
    },
    {
      question: "Czy mogę używać strony na telefonie?",
      answer:
        "Tak! Strona jest responsywna i działa na telefonach, tabletach i komputerach. Możesz ćwiczyć wszędzie! 📱",
    },
    {
      question: "Kto stoi za tym projektem?",
      answer:
        "Cześć! Jestem uczniem, który przeszedł przez ten sam proces. Postanowiłem pomóc innym, bo wiem jak stresujące mogą być te egzaminy. Kod jest dostępny na GitHub! 👨‍💻",
    },
  ];

  return (
    <div className="w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Najczęściej zadawane pytania 🤔
        </h2>
        <p className="text-gray-600">
          Masz pytania? Sprawdź czy nie ma już odpowiedzi tutaj!
        </p>
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        {FaqQuestions.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-white rounded-lg border border-gray-200 px-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="text-center mt-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 border border-blue-200 rounded-full">
          <Lightbulb className="w-5 h-5 text-blue-700" />
          <span className="text-sm text-blue-800">
            Masz inne pytanie? Napisz na{" "}
            <a
              href="https://github.com/zdajprogramiste/passtheexams/issues"
              className="hover:underline font-semibold"
              target="_blank"
            >
              GitHub Issues
            </a>
            !
          </span>
        </div>
      </div>
    </div>
  );
};

export default Faq;
