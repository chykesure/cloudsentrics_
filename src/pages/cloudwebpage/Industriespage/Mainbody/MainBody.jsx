import React from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import {
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import {
  ShareIcon,
  ClipboardDocumentCheckIcon,
  ArrowPathIcon,
  LockClosedIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import {
  DocumentArrowDownIcon,
  ClockIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/solid';  // or /outline if you prefer outline style

const benefits = [
  {
    title: "Easy to use",
    description:
      "The intuitive design and consumer-grade ease of use allows users to get started immediately, on any device.",
    bg: "bg-white",
    checkBg: "bg-[#0a1a3f]",
    checkColor: "text-white",
  },
  {
    title: "Low maintenance",
    description:
      "Once set up, staff can collaborate, store, manage, and share files securely with minimal administrative effort.",
    bg: "bg-[#17b6d4]",
    checkBg: "bg-white",
    checkColor: "text-[#0a1a3f]",
  },
  {
    title: "Compliant",
    description:
      "Sensitive data, such as student records, are fully protected. Cloud Sentrics adheres to strict data protection regulations, including NDPC.",
    bg: "bg-white",
    checkBg: "bg-[#0a1a3f]",
    checkColor: "text-white",
  },
];

const features = [
  {
    icon: ShareIcon,
    title: "Secure File Sharing",
    description:
      "Secure File Sharing for Your Organization. In today's digital world, organizing your documents, records, and collaborative files efficiently is essential for productivity and smooth operations. Give authorized team members, clients, or collaborators secure access to files logged for accountability while keeping sensitive information protected from unauthorized access.\n\nCloud Sentrics removes the stress of data breaches by providing secure file sharing and collection, fully under your control. Sending documents via email can be unsecure and impractical, and Cloud Sentrics ensures file sharing is confidential, compliant, and easy to use, with One-Time Passcodes (OTP) and expiration dates. Share links freely by email without compromising security.",
    bg: "bg-white",
    text: "text-gray-800",
    iconColor: "text-[#0a1a3f]",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Auditing",
    description:
      "Admins can monitor account-level activities such as logins, file sharing, file updates, and more. This provides the information needed for compliance reporting, auditing, and oversight, giving your organization full visibility and control over data usage.",
    bg: "bg-[#17b6d4]",
    text: "text-white",
    iconColor: "text-white",
  },
  {
    icon: ArrowPathIcon,
    title: "Versioning",
    description:
      "Cloud Sentrics helps you keep track of changes to your files, allowing you to view, restore, or recover previous versions whenever needed. This ensures that your team can collaborate confidently without the risk of losing important work, while maintaining audit trails for compliance and accountability.",
    bg: "bg-white",
    text: "text-gray-800",
    iconColor: "text-[#0a1a3f]",
  },
];

const EducationCloudSection = () => {
  return (
    <>
      <section className="bg-gray-50 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="space-y-6 sm:space-y-8 md:space-y-9 lg:space-y-10 text-center max-w-3xl mx-auto">

            {/* Heading – scales nicely */}
            <h2 className="text-3xl sm:text-4xl md:text-4.5xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              A Secure Workspace <span className="text-blue-900">for Every Team</span>
            </h2>

            {/* Text content – better readability on mobile */}
            <div className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed space-y-5 sm:space-y-6">
              <p>
                Cloud Sentrics empowers organizations to collaborate seamlessly without compromising data privacy
                or regulatory compliance. Teams can store, manage, share, and access files from any device or
                location, with least-privilege access ensuring that only authorized users can modify critical files.
              </p>

              <p>
                All actions are tracked with audit logs, and secure sharing options including One-Time Passcodes (OTP)
                and expiration controls ensure files remain protected at all times.
              </p>

              <p className="font-medium text-gray-800">
                Whether your organization is in healthcare, education, law, manufacturing, or beyond,
                Cloud Sentrics delivers digital sovereignty, peace of mind, and frictionless collaboration.
              </p>
            </div>

            {/* CTA – bigger touch target on mobile, centered */}
            <div className="pt-6 sm:pt-8 md:pt-10">
              <a
                href="#get-quote"
                className="
            inline-flex items-center justify-center
            bg-blue-900 text-white 
            font-semibold text-base sm:text-lg md:text-xl
            px-8 sm:px-10 md:px-12 lg:px-14 
            py-4 sm:py-4.5 md:py-5 
            rounded-lg shadow-md hover:shadow-lg 
            hover:bg-blue-800 
            focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2
            transition-all duration-200
            min-w-[180px] sm:min-w-[220px]
            touch-manipulation
          "
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6] py-10 md:py-20 lg:py-28">
        <div className="w-full">                     {/* ← remove max-w and mx-auto */}
          <img
            src="/oin2.png"
            alt="Finance professionals collaborating securely"
            className="w-full h-auto object-cover       /* full width, maintain aspect */
                 max-h-[80vh] md:max-h-[85vh] lg:max-h-[90vh]"  /* optional height cap */
          />
        </div>
      </section>

      {/* Features – Secure Sharing / Auditing / Versioning */}
      <section className="bg-[#f3f4f6] py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left – Tall single block */}
            <div className="bg-[#d9dee2] p-14 md:p-16 flex flex-col items-center text-center rounded-2xl shadow-xl">
              <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-[#0a1a3f] mb-10">
                <ShareIcon className="w-12 h-12 text-[#0a1a3f]" strokeWidth={1.6} />
              </div>
              <h3 className="text-3xl font-bold text-[#0a1a3f] mb-8">
                Secure File Sharing
              </h3>
              <p className="text-[#0a1a3f] text-lg leading-relaxed whitespace-pre-line max-w-2xl">
                {features[0].description}
              </p>
            </div>

            {/* Right – Two stacked dark blocks */}
            <div className="flex flex-col gap-8">
              {/* Auditing */}
              <div className="bg-[#0b1e4b] p-14 md:p-16 flex flex-col items-center text-center rounded-2xl shadow-xl">
                <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-white mb-10">
                  <ClipboardDocumentCheckIcon className="w-12 h-12 text-white" strokeWidth={1.6} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-8">Auditing</h3>
                <p className="text-white/90 text-lg leading-relaxed max-w-2xl whitespace-pre-line">
                  {features[1].description}
                </p>
              </div>

              {/* Versioning */}
              <div className="bg-[#0b1e4b] p-14 md:p-16 flex flex-col items-center text-center rounded-2xl shadow-xl">
                <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-white mb-10">
                  <ArrowPathIcon className="w-12 h-12 text-white" strokeWidth={1.6} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-8">Versioning</h3>
                <p className="text-white/90 text-lg leading-relaxed max-w-2xl whitespace-pre-line">
                  {features[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features – Encryption + Access Controls */}
      <section className="bg-[#f3f4f6] py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* End-to-End Encryption */}
            <div className="bg-[#0a1a3f] p-14 md:p-16 flex flex-col items-center text-center rounded-2xl shadow-xl border border-white/10">
              <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-white mb-10">
                <LockClosedIcon className="w-12 h-12 text-white" strokeWidth={1.6} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-8">
                End-to-End Encryption
              </h3>
              <p className="text-white/90 text-lg leading-relaxed whitespace-pre-line max-w-2xl">
                At Cloud Sentrics, security is at the heart of everything we do. Your files are always protected, whether they are being stored, shared, or collaborated on. You can create secure folders for sensitive information, ensuring that only authorized people can access them. We monitor usage to keep your data safe, provide each customer with a separate and private storage space, and follow strict procedures to handle any security issues. With Cloud Sentrics, your information stays confidential, compliant, and fully under your control.
              </p>
            </div>

            {/* Access Controls */}
            <div className="bg-[#0a1a3f] p-14 md:p-16 flex flex-col items-center text-center rounded-2xl shadow-xl border border-white/10">
              <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-white mb-10">
                <HandRaisedIcon className="w-12 h-12 text-white" strokeWidth={1.6} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Access Controls
              </h3>
              <p className="text-white/90 text-lg leading-relaxed whitespace-pre-line max-w-2xl">
                We give you full control over who can access your data. You can easily manage permissions for individuals or teams, ensuring that only authorized users can view, edit, or share files. Flexible settings allow you to grant temporary access to external collaborators or restrict sensitive information to certain departments. With clear visibility into user activity, you can enforce compliance, protect confidential data, and confidently manage your organization's information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationCloudSection;