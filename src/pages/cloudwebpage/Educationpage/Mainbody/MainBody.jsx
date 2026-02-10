import React from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import {
  ShareIcon,
  ClipboardDocumentCheckIcon,
  ArrowPathIcon,
  LockClosedIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";

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
      {/* Hero / Main Intro Section */}
      <section className="bg-[#f3f4f6] py-20 md:py-28 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a1a3f] leading-tight tracking-tight">
            Secure Cloud Storage, File Sharing
            <br className="hidden sm:block" />
            & Collaboration for Education
          </h1>

          <p className="mt-8 md:mt-10 text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Cloud Sentrics provides educational institutions with a secure and flexible cloud platform for storing, sharing, and collaborating on files. Teachers and administrators are granted least-privilege access, allowing them to store, manage, and share files securely while minimizing unnecessary permissions. Students and parents can receive files safely through our controlled file sharing system. All users can access content from any device or location, while the platform ensures digital sovereignty and keeps your data safe, compliant, and free from backdoors or vendor lock-in.
          </p>
        </div>
      </section>

      {/* Benefits – Easy / Low maintenance / Compliant */}
      <section className="bg-[#0a1a3f] py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`
                  ${item.bg} rounded-2xl overflow-hidden shadow-xl
                  flex flex-col items-center text-center
                  pt-12 pb-10 px-8 md:px-10 lg:px-12
                `}
              >
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 flex items-center justify-center
                    rounded-full ${item.checkBg} mb-6 md:mb-8 shadow-md ring-1 ring-black/5`}
                >
                  <CheckIcon className={`w-10 h-10 md:w-12 md:h-12 ${item.checkColor}`} />
                </div>

                <h3
                  className={`text-2xl md:text-3xl font-bold tracking-tight mb-5
                    ${item.bg === "bg-white" ? "text-[#0a1a3f]" : "text-white"}`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-base md:text-lg leading-relaxed max-w-prose
                    ${item.bg === "bg-white" ? "text-gray-700" : "text-white/95"}`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
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