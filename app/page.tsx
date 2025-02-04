"use client";

import { ThemeProvider } from "next-themes";
import ApplicationForm from "./components/ApplicationForm";
import { ApplicationProvider } from "../context/ApplicationContext";
import Hero from "@/components/Hero";
import LearnMore from "@/components/LearnMore";

export default function Home() {
  return (
    <ApplicationProvider>
      <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24 bg-background text-foreground">
        <div className="w-full max-w-4xl">
          <Hero />
          <div id="application-form">
            <ApplicationForm />
          </div>
          <div className="mt-5">
            <LearnMore />
          </div>
        </div>
      </main>
    </ApplicationProvider>
  );
}
