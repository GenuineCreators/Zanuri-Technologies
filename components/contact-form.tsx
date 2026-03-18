"use client";

import { useState } from "react";
import { LoaderCircle, Send } from "lucide-react";

const serviceOptions = [
  "Mobile App Development",
  "Web Development",
  "Payments & Integrations",
  "Backend & Databases",
  "UI/UX Design",
  "Business Analysis",
  "Enterprise Apps",
  "Testing & QA",
  "Maintenance & Support",
  "Digital Marketing",
  "Not sure yet",
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to send your message right now.");
      }

      setStatus("success");
      setMessage("Thank you. Your message has been sent and Zanuri Technologies will get back to you shortly.");

      const form = document.getElementById("contact-form") as HTMLFormElement | null;
      form?.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message. Please try again or use WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-border/60 bg-card/85 p-6 shadow-soft backdrop-blur md:p-8">
      <div className="max-w-2xl">
        <h3 className="font-display text-2xl font-semibold text-foreground">Tell us what you want to build</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          Share your goals, the type of solution you need, and any useful context. We will review your request and
          respond with the best next step.
        </p>
      </div>

      <form
        id="contact-form"
        onSubmit={async (event) => {
          event.preventDefault();
          await handleSubmit(new FormData(event.currentTarget));
        }}
        className="mt-8 grid gap-5 md:grid-cols-2"
      >
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full name
          </label>
          <input id="name" name="name" required className="input-field" placeholder="Your name" />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company or business name
          </label>
          <input id="company" name="company" className="input-field" placeholder="Your company" />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email address
          </label>
          <input id="email" type="email" name="email" required className="input-field" placeholder="you@example.com" />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone or WhatsApp number
          </label>
          <input id="phone" name="phone" className="input-field" placeholder="+254..." />
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-foreground">
            Service of interest
          </label>
          <select id="service" name="service" className="input-field" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="budget" className="text-sm font-medium text-foreground">
            Project stage
          </label>
          <input id="budget" name="budget" className="input-field" placeholder="Idea stage, MVP, scaling, redesign..." />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Project details
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="input-field min-h-[160px]"
            placeholder="Tell us about your goals, audience, key features, current challenges, or what success looks like."
          />
        </div>

        <div className="flex flex-col gap-4 md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send message
              </>
            )}
          </button>

          <div aria-live="polite" className="text-sm text-muted-foreground">
            {message && (
              <span className={status === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}>
                {message}
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
