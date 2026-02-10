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
      <section className="bg-[#f3f4f6] py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-[#0a1a3f] leading-tight tracking-tight mb-10">
            Secure File Sharing & Content Collaboration
          </h2>

          {/* Descriptive Text */}
          <div className="max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-16">
            <p className="mb-6">
              Cloud Sentrics enables law firms to collaborate efficiently while keeping confidential legal documents fully protected. Staff are granted least-privilege access which allows them to upload case files and evidence, ensuring sensitive information is handled strictly on a need-to-know basis.
            </p>
            <p>
              Authorized staff can store, manage, share, and access files securely from any device or location, without compromising confidentiality. Cloud Sentrics gives legal practices full control over their data, eliminating vendor lock-in and hidden access points, and ensuring documents remain private, auditable, and under firm ownership at all times.
            </p>
          </div>

          {/* Three Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Card 1: Safely Collect Client Files */}
            {/* Card 1: Safely Collect Client Files */}
            <div className="bg-[#0a1a3f] text-white rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#00b4d8] rounded-full flex items-center justify-center mb-6 shadow-md">
                <DocumentArrowDownIcon className="w-10 h-10 md:w-12 md:h-12 text-white" />  {/* or DocumentPlusIcon */}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Safely Collect Client Files
              </h3>
              <p className="text-base md:text-lg opacity-90">
                Receive documents from clients and securely share them internally, with smooth case collaboration, full NDPC readiness, and ensuring firm visibility throughout case handling.
              </p>
            </div>

            {/* Card 2: Access Logs */}
            <div className="bg-[#0a1a3f] text-white rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#00b4d8] rounded-full flex items-center justify-center mb-6 shadow-md">
                <ClockIcon className="w-10 h-10 md:w-12 md:h-12 text-white" />  {/* or ClipboardDocumentListIcon if available */}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Access Logs
              </h3>
              <p className="text-base md:text-lg opacity-90">
                View detailed records of file activity, including uploads, updates, and access events, giving your firm full visibility and accountability throughout case handling.
              </p>
            </div>

            {/* Card 3: Verifiably Secure */}
            <div className="bg-[#0a1a3f] text-white rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#00b4d8] rounded-full flex items-center justify-center mb-6 shadow-md">
                <ShieldCheckIcon className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Verifiably Secure
              </h3>
              <p className="text-base md:text-lg opacity-90">
                All files are protected during upload, sharing, and storage. Every action is logged and auditable, supporting firm compliance with NDPC and giving your firm clear visibility and accountability at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Law Firm Document Handling Section */}
      <section className="bg-[#f3f8fc] py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Text Content */}
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-[#0a1a3f] leading-tight mb-8">
                Streamline How Your Law Firm<br className="hidden sm:block" />
                Handles Client Documents
              </h2>

              <div className="space-y-3 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p>
                  In today's legal practice, organizing case files and advisory work in a secure digital environment is essential for efficiency and productivity. Cloud Sentrics enables law firms to give authorized staff-controlled access to documents, with every action logged for compliance and accountability, while keeping client data protected from unauthorized access.
                </p>

                <p>
                  Cloud Sentrics removes the risks associated with data breaches by providing secure cloud storage, data protection and file sharing on your own terms. Unlike email attachments or consumer cloud services which are often insecure and difficult to track, Cloud Sentrics ensures confidential document exchange that meets regulatory requirements without sacrificing ease of use.
                </p>

                <p>
                  There are no limits on file sizes, making it easy to share large case files, evidence, and legal documents. Secure sharing links can be protected with One-Time Passcodes (OTP) and expiry dates, and all file access remains fully under your firm's control. Documents can be shared via email without compromising security, compliance, or client confidentiality.
                </p>
              </div>
            </div>

            {/* Right: Law-themed image (Lady Justice statue) */}
            <div className="rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <img
                src="/law2.png"
                alt="Lady Justice statue with scales, legal documents, and professional handling files"
                className="w-full h-auto object-cover"
              />
            </div>
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