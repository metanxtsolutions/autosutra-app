"use client";

import { useId, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";
import { submitDemoStepOne, submitDemoStepTwo } from "@/actions/book-demo";
import { trackEvent } from "@/lib/analytics";
import {
  bookDemoStepOneSchema,
  bookDemoStepTwoSchema,
  type BookDemoStepOneValues,
  type BookDemoStepTwoValues,
} from "@/lib/validations/book-demo";

const trustIndicators = [
  "No spam",
  "No sales pressure",
  "Free consultation",
  "We reply within 30 minutes",
];

export function BookDemoForm() {
  const formHeadingId = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittingStepTwo, setIsSubmittingStepTwo] = useState(false);
  const [stage, setStage] = useState<"form" | "details" | "done">("form");
  const [contact, setContact] = useState<BookDemoStepOneValues | null>(null);
  const searchParams = useSearchParams();

  const preselectedSlugs = searchParams.get("services")?.split(",") ?? [];
  const preselectedServices = services.filter((service) =>
    preselectedSlugs.includes(service.slug),
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookDemoStepOneValues>({
    resolver: zodResolver(bookDemoStepOneSchema),
    defaultValues: {
      name: "",
      phone: "",
      service:
        preselectedServices.length === 1 ? preselectedServices[0].name : "",
    },
  });

  const {
    register: registerStepTwo,
    handleSubmit: handleSubmitStepTwo,
    formState: { errors: stepTwoErrors },
  } = useForm<BookDemoStepTwoValues>({
    resolver: zodResolver(bookDemoStepTwoSchema),
    defaultValues: { dealership: "", email: "", message: "" },
  });

  const onSubmit = async (values: BookDemoStepOneValues) => {
    setIsSubmitting(true);
    try {
      const result = await submitDemoStepOne(values);
      if (result.success) {
        trackEvent("generate_lead", { service: values.service });
        setContact(values);
        setStage("details");
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmitStepTwo = async (values: BookDemoStepTwoValues) => {
    if (!contact) return;
    setIsSubmittingStepTwo(true);
    try {
      const result = await submitDemoStepTwo(contact, values);
      if (result.success) {
        setStage("done");
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingStepTwo(false);
    }
  };

  if (stage === "done") {
    return (
      <div
        id="demo-form"
        className="flex flex-col items-center gap-3 rounded-3xl border border-border bg-card p-8 text-center shadow-sm"
      >
        <CheckCircle2 className="size-10 text-brand" />
        <h2 className="font-heading text-xl font-semibold text-ink">
          You&apos;re all set, {contact?.name.split(" ")[0]}
        </h2>
        <p className="text-sm text-muted-foreground">
          Our team will call you within 30 minutes to schedule your free
          strategy session.
        </p>
      </div>
    );
  }

  if (stage === "details" && contact) {
    return (
      <div
        id="demo-form"
        className="space-y-5 rounded-3xl border border-border bg-card p-8 shadow-sm"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-brand" />
          <div>
            <h2 className="font-heading text-lg font-semibold text-ink">
              Got it, {contact.name.split(" ")[0]}. We&apos;ll call you soon.
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Add a few optional details to help us prepare for your call, or
              skip this and we&apos;ll reach out anyway.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmitStepTwo(onSubmitStepTwo)}
          className="space-y-5"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="dealership">Dealership name</Label>
              <Input
                id="dealership"
                placeholder="Your dealership"
                {...registerStepTwo("dealership")}
              />
              {stepTwoErrors.dealership && (
                <p className="text-xs text-destructive">
                  {stepTwoErrors.dealership.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@dealership.com"
                {...registerStepTwo("email")}
              />
              {stepTwoErrors.email && (
                <p className="text-xs text-destructive">
                  {stepTwoErrors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your dealership</Label>
            <Textarea
              id="message"
              rows={3}
              placeholder="City, brands you sell, current monthly lead volume..."
              {...registerStepTwo("message")}
            />
          </div>

          <div className="flex flex-col-reverse gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setStage("done")}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "flex-1 rounded-full",
              )}
            >
              Skip, I&apos;m done
            </button>
            <button
              type="submit"
              disabled={isSubmittingStepTwo}
              className={cn(
                buttonVariants({ size: "lg" }),
                "flex-1 gap-2 rounded-full",
              )}
            >
              {isSubmittingStepTwo ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Saving...
                </>
              ) : (
                "Add details"
              )}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <form
      id="demo-form"
      onSubmit={handleSubmit(onSubmit)}
      aria-labelledby={formHeadingId}
      className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
      noValidate
    >
      <h2 id={formHeadingId} className="sr-only">
        Book your free demo
      </h2>

      <p className="flex items-center gap-1.5 text-sm font-medium text-ink">
        <CheckCircle2 className="size-4 text-brand" aria-hidden />
        Helping dealerships generate high-quality leads every month
      </p>

      <div className="space-y-2">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" placeholder="Your name" {...register("name")} />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Mobile number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Interested service</Label>
        <select
          id="service"
          defaultValue=""
          className="flex h-9 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          {...register("service")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
        {errors.service && (
          <p className="text-xs text-destructive">{errors.service.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          buttonVariants({ size: "lg" }),
          "w-full gap-2 rounded-full text-base",
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-5 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Rocket className="size-5" /> Book My Free Demo
          </>
        )}
      </button>

      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        {trustIndicators.map((item) => (
          <li key={item} className="flex items-center gap-1">
            <CheckCircle2 className="size-3.5 text-brand" />
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}
