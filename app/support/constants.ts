import { Car, CircleHelp, CreditCard, FileText, Headphones, Mail, MessageCircle, Phone, ShieldCheck, User } from "lucide-react";

export const contactCards = [
  {
    title: "Call us",
    value: "+962 6 000 0000",
    subtitle: "Sun – Thu, 8am – 8pm",
    action: "Call now",
    href: "tel:+96260000000",
    icon: Phone,
  },
  {
    title: "Email us",
    value: "support@aman.jo",
    subtitle: "Response within 4 hours",
    action: "Send email",
    href: "mailto:support@aman.jo",
    icon: Mail,
  },
  {
    title: "Live chat",
    value: "Start a conversation",
    subtitle: "Available 24/7 in-app",
    action: "Open chat",
    href: "#",
    icon: MessageCircle,
  },
  {
    title: "Driver hotline",
    value: "+962 6 000 0001",
    subtitle: "Priority for active drivers",
    action: "Call now",
    href: "tel:+96260000001",
    icon: Headphones,
  },
];

export const topics = [
  { title: "Vehicle requirements", text: "Model year, inspection, and insurance guidelines for Jordan.", icon: Car },
  { title: "Payments & earnings", text: "How payouts work, schedules, and troubleshooting delayed transfers.", icon: CreditCard },
  { title: "Safety & incidents", text: "Reporting procedures, emergency tools, and safety policy details.", icon: ShieldCheck },
  { title: "Document issues", text: "Re-submitting expired licenses, IDs, and registration papers.", icon: FileText },
  { title: "Account access", text: "Login problems, password resets, and updating personal information.", icon: User },
  { title: "Trip disputes", text: "Fare reviews, cancellation policies, and passenger complaints.", icon: CircleHelp },
];

export const faqs = [
  {
    question: "How do I reset my driver password?",
    answer: "Open the Aman Driver app, tap 'Forgot Password' on the login screen, and enter your registered email or phone number. You will receive a secure reset link via SMS within 60 seconds.",
  },
  {
    question: "What should I do if a document is rejected?",
    answer: "Review the rejection reason carefully, upload a clearer image, and make sure all details are visible and not expired.",
  },
  {
    question: "When do driver payouts arrive?",
    answer: "Driver payouts are processed weekly and transferred directly to your registered bank account.",
  },
  {
    question: "How do I report a safety incident?",
    answer: "Use the in-app emergency and support tools immediately or contact the Aman safety hotline for urgent assistance.",
  },
  {
    question: "Can I drive in multiple cities in Jordan?",
    answer: "Yes. Drivers can operate across supported cities in Jordan as long as their account remains active and verified.",
  },
  {
    question: "What happens if my car breaks down during a trip?",
    answer: "Safely stop the trip, contact support immediately, and follow the in-app safety and emergency instructions.",
  },
];
