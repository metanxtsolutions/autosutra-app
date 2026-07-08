"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";
import { submitContactForm } from "@/actions/contact";
import { trackEvent } from "@/lib/analytics";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();

  const preselectedSlugs = searchParams.get("services")?.split(",") ?? [];
  const preselectedServices = services.filter((service) =>
    preselectedSlugs.includes(service.slug),
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      dealership: "",
      email: "",
      phone: "",
      service:
        preselectedServices.length === 1 ? preselectedServices[0].name : "",
      message:
        preselectedServices.length > 0
          ? `Interested in: ${preselectedServices.map((s) => s.name).join(", ")}`
          : "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(values);
      if (result.success) {
        toast.success(result.message);
        trackEvent("generate_lead", { service: values.service });
        reset();
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-3xl border border-border bg-card p-8 shadow-sm"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Your name" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="dealership">Dealership name</Label>
          <Input
            id="dealership"
            placeholder="Your dealership"
            {...register("dealership")}
          />
          {errors.dealership && (
            <p className="text-xs text-destructive">
              {errors.dealership.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@dealership.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
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
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">I&apos;m interested in</Label>
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

      <div className="space-y-2">
        <Label htmlFor="message">Tell us about your dealership</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="City, brands you sell, current monthly lead volume..."
          {...register("message")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          buttonVariants({ size: "lg" }),
          "w-full gap-2 rounded-full",
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="size-4" /> Book Consultation
          </>
        )}
      </button>
    </form>
  );
}
