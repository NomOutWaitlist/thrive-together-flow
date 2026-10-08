import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const baseText = z.string().trim();
const leadSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("booking"), fullName: baseText.min(2).max(100), email: baseText.email().max(255), phone: baseText.min(7).max(30),
    preferredContact: z.enum(["phone", "email"]), primaryConcern: baseText.min(2).max(100), concernDuration: baseText.min(1).max(60),
    impactLevel: z.number().int().min(1).max(5), serviceInterest: baseText.min(2).max(100), preferredDay: baseText.min(1).max(60),
    preferredTime: baseText.min(1).max(60), notes: baseText.max(1000), consent: z.literal(true),
  }),
  z.object({ kind: z.literal("contact"), fullName: baseText.min(2).max(100), email: baseText.email().max(255), phone: baseText.max(30), subject: baseText.min(2).max(100), message: baseText.min(10).max(1000) }),
  z.object({ kind: z.literal("referral"), referrerName: baseText.min(2).max(100), referrerContact: baseText.min(5).max(255), friendName: baseText.min(2).max(100), friendContact: baseText.min(5).max(255), consent: z.literal(true) }),
]);

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    if (data.kind === "booking") {
      const { error } = await supabaseAdmin.from("booking_requests").insert({ full_name: data.fullName, email: data.email, phone: data.phone, preferred_contact: data.preferredContact, primary_concern: data.primaryConcern, concern_duration: data.concernDuration, impact_level: data.impactLevel, service_interest: data.serviceInterest, preferred_day: data.preferredDay, preferred_time: data.preferredTime, notes: data.notes, consent: data.consent });
      if (error) throw new Error("We could not save your request. Please call the clinic.");
    } else if (data.kind === "contact") {
      const { error } = await supabaseAdmin.from("contact_submissions").insert({ full_name: data.fullName, email: data.email, phone: data.phone, subject: data.subject, message: data.message });
      if (error) throw new Error("We could not save your message. Please call the clinic.");
    } else {
      const { error } = await supabaseAdmin.from("referral_submissions").insert({ referrer_name: data.referrerName, referrer_contact: data.referrerContact, friend_name: data.friendName, friend_contact: data.friendContact, consent: data.consent });
      if (error) throw new Error("We could not save your referral. Please call the clinic.");
    }
    return { success: true };
  });
