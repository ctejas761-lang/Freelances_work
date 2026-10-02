"use client";

import { useState } from "react";
import {
  Mail,
  MessageCircle,
  Globe2,
  Clock,
  Loader2,
  SendHorizonal,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SectionHeading } from "./section-heading";
import { BRAND, SERVICE_OPTIONS } from "@/lib/site-data";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const { toast } = useToast();
  const [state, setState] = useState<FormState>("idle");
  const [service, setService] = useState<string>("");

  const buildWhatsAppMessage = (payload: {
    name: string;
    email: string;
    service: string;
    message: string;
  }) => {
    const serviceText = payload.service ? `Service: ${payload.service}\n` : "";
    return `Hello, I would like to discuss a project.\n\nName: ${payload.name}\nEmail: ${payload.email}\n${serviceText}Project Details:\n${payload.message}`;
  };

  const openWhatsApp = (payload: {
    name: string;
    email: string;
    service: string;
    message: string;
  }) => {
    const text = encodeURIComponent(buildWhatsAppMessage(payload));
    window.open(`https://wa.me/917028338510?text=${text}`, "_blank");
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      service: service || String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast({
        title: "Missing details",
        description: "Please fill in your name, email and project message.",
        variant: "destructive",
      });
      return;
    }

    setState("submitting");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error ?? "Failed to send your message");
      }
      setState("success");
      setService("");
      form.reset();
      toast({
        title: "Inquiry received!",
        description:
          "Thank you — we will get back to you within 24 hours with next steps.",
      });
    } catch (error) {
      setState("error");
      toast({
        title: "Something went wrong",
        description:
          error instanceof Error
            ? error.message
            : "Could not send your message. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-background py-20 sm:py-24"
      aria-label="Contact us"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact for Project Discussion"
          title="Tell Us About Your Project"
          description="Share your research problem, deadline and study area — we will reply with a clear plan, timeline and quote. No obligation."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-5 lg:col-span-2">
            <ul className="list-none space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: BRAND.email,
                  href: `mailto:${BRAND.email}`,
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: BRAND.whatsapp,
                  href: `https://wa.me/917028338510`,
                },
                {
                  icon: Globe2,
                  label: "Location",
                  value: "Remote / Online — serving clients worldwide",
                },
                {
                  icon: Clock,
                  label: "Working hours",
                  value: `${BRAND.hours} • ${BRAND.response}`,
                },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-sm"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 block truncate text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                On-time delivery is our duty
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Every project is planned with milestones and buffer time before
                we start. If we accept your deadline, you can count on it —
                that is our professional commitment.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            id="inquiry-form"
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-3"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. Priya Sharma"
                  autoComplete="name"
                  required
                  minLength={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service required</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger id="service" className="w-full">
                  <SelectValue placeholder="Select a service (optional)" />
                </SelectTrigger>
                <SelectContent className="max-h-72">
                  {SERVICE_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Project details *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Describe your project: study area, data, objectives, deadline…"
                rows={6}
                required
                minLength={10}
              />
            </div>

            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-xs text-muted-foreground">
                Your details are used only to reply to your inquiry.
              </p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full font-semibold sm:w-auto"
                  onClick={() => {
                    const form = document.getElementById("inquiry-form") as HTMLFormElement | null;
                    if (!form) return;
                    const formData = new FormData(form);
                    const payload = {
                      name: String(formData.get("name") ?? "").trim(),
                      email: String(formData.get("email") ?? "").trim(),
                      service: service || String(formData.get("service") ?? "").trim(),
                      message: String(formData.get("message") ?? "").trim(),
                    };

                    if (!payload.name || !payload.email || !payload.message) {
                      toast({
                        title: "Missing details",
                        description: "Please fill in your name, email and project message before sending on WhatsApp.",
                        variant: "destructive",
                      });
                      return;
                    }

                    openWhatsApp(payload);
                  }}
                >
                  Send on WhatsApp
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  disabled={state === "submitting"}
                  className="w-full font-semibold sm:w-auto"
                >
                  {state === "submitting" ? (
                    <>
                      <Loader2
                        className="mr-2 h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <SendHorizonal
                        className="ml-2 h-4 w-4"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
