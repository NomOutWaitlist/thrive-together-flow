import neuroImage from "@/assets/trinova-neuro.jpg";
import rehabImage from "@/assets/trinova-rehab.jpg";
import nutritionImage from "@/assets/trinova-nutrition.jpg";

export const services = [
  { slug: "braincore-neurofeedback", title: "BrainCore Neurofeedback", category: "Mind & brain", summary: "Non-invasive brain training designed to support regulation, focus, sleep, and emotional wellbeing.", image: neuroImage, eyebrow: "Train the brain", details: ["A consultation to understand your goals", "A personalized brain-training plan", "Progress reviews throughout care"] },
  { slug: "es-teck-scan", title: "ES Teck Scan", category: "Whole-person insight", summary: "A non-invasive wellness assessment that helps the care team build a fuller picture of your health priorities.", image: neuroImage, eyebrow: "See the wider picture", details: ["A guided, non-invasive assessment", "Results reviewed in context", "Clear next-step recommendations"] },
  { slug: "pain-rehabilitation", title: "Pain Rehabilitation", category: "Pain & mobility", summary: "Coordinated assessment and rehabilitation for persistent pain, injury recovery, strength, and movement.", image: rehabImage, eyebrow: "Move with confidence", details: ["Chronic pain assessment", "Physiotherapy and manual care", "Practical tools for sustained mobility"] },
  { slug: "mental-health", title: "Mental Health", category: "Mental wellbeing", summary: "Culturally responsive psychotherapy and assessment for anxiety, trauma, depression, stress, and life transitions.", image: neuroImage, eyebrow: "Care that considers context", details: ["CBT, EMDR, and trauma-informed approaches", "Psychological assessment where appropriate", "Care grounded in cultural safety"] },
  { slug: "nutrition-balance", title: "Nutrition & Balance", category: "Nutrition & lifestyle", summary: "Personalized nutrition, movement, and coaching support built around your symptoms, routines, and goals.", image: nutritionImage, eyebrow: "Build sustainable health", details: ["Personalized nutrition sessions", "Meal planning and accountability", "Lifestyle coaching and rehabilitation"] },
] as const;

export const team = [
  { name: "Dr. Jennifer Anthony", role: "Clinical Director, Psychotherapist & Functional Nutrition Specialist", detail: "Integrates psychotherapy, functional nutrition, mindfulness, CBT, EMDR, and solution-focused care." },
  { name: "Dr. Paulette Higgins-Moncrieffe", role: "Chiropractor & Sports Medicine Specialist", detail: "Supports mobility, injury recovery, and active living." },
  { name: "Stacy Yong, M.Psy, RP", role: "Registered Psychotherapist", detail: "Brings more than 19 years of experience across trauma-informed therapeutic approaches." },
  { name: "Dr. Bita Sharifzadeh", role: "Supervising Psychologist", detail: "Provides clinical supervision and trauma-informed psychological care." },
  { name: "Shanna-Kay Stephens", role: "Therapist", detail: "Works with couples, families, youth, and adults through an anti-oppression lens." },
  { name: "Vishma Lamichhane", role: "Osteopathic Manual Practitioner", detail: "Provides gentle, hands-on whole-body care." },
  { name: "Seyi Oladipo", role: "Massage Therapist", detail: "Supports relaxation, recovery, and relief from muscular tension." },
  { name: "Michelle Ching", role: "Nutritionist", detail: "Creates practical nutrition strategies for individual needs." },
];

export const contact = {
  phone: "(905) 495-7748",
  phoneHref: "tel:+19054957748",
  email: "trinovawellnesscentre@gmail.com",
  address: "Unit 204, 178 John Street, Brampton, Ontario",
  map: "https://www.google.com/maps/search/?api=1&query=178+John+Street+Brampton+Ontario",
};
