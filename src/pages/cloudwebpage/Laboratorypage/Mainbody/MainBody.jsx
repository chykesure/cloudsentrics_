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
      {/* Lab / Research Focused Section – matching uploaded layout */}
      <section className="bg-[#f3f8fc] py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

          {/* Top part: Text left + Futuristic lab image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-28">
            {/* Left: Main descriptive text */}
            <div className="text-left">
              <p className="text-lg md:text-xl lg:text-2xl text-[#0a1a3f] leading-relaxed font-medium">
                Cloud Sentrics empowers laboratories to collaborate safely while retaining full control over sensitive patient and research information. Staff can store, manage, share, and access files from any device or location, with least privilege access ensuring only authorized users have permissions. Your data remains fully under your control.
              </p>
            </div>

            {/* Right: Futuristic lab with holograms/clouds */}
            <div className="rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
              <img
                src="/lab1.png"
                alt="Futuristic laboratory with holographic data visualization and cloud elements"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Bottom part: Clean lab image left + HIPAA dark panel right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Modern lab interior */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/lab2.png"
                alt="Modern high-tech research laboratory with scientists and equipment"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right: Dark blue HIPAA panel */}
            <div className="bg-[#0a1a3f] text-white rounded-2xl p-8 md:p-10 lg:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                HIPAA Compliant
                <br />
                Service
              </h2>
              <p className="text-lg md:text-xl leading-relaxed opacity-95">
                Our platform is HIPAA-compliant, ensuring that protected health information (PHI) is stored, processed, and transmitted with robust security measures. Access is strictly monitored and restricted on a need to know basis, and all sharing aligns with patient consent requirements. With Cloud Sentrics, laboratories can confidently digitize operations without compromising privacy or regulatory compliance.
              </p>
            </div>
          </div>

        </div>
      </section>


      <section className="bg-[#f3f4f6] py-20 md:py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 text-center">
          {/* Main Title Block */}
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-[#0a1a3f] leading-tight tracking-tight mb-6">
            Enabling Secure Collaboration and File 
            <br className="hidden sm:block" />
            Sharing in Hospitals and Healthcare
          </h1>

          <div className="max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-8">
            <p>
              Laboratory and diagnostic centre data including test results, diagnostic images, and research findings is highly sensitive. Cloud Sentrics provides a secure, controlled file sharing and collaboration solution, enabling teams to work together efficiently without compromising patient privacy or intellectual property. Whether sharing results among pathologists, technicians, or external specialists, or exchanging confidential research data and even the patient themselves, Cloud Sentrics ensures secure and compliant collaboration across your organization.
            </p>

            <hr className="border-gray-300 my-12" />

            <h3 className="text-3xl md:text-4xl font-bold text-[#0a1a3f] mb-6">
              Seamless and Secure File Sharing
            </h3>

            <p>
              Cloud Sentrics allows laboratories and diagnostic centres to collaborate and share files securely without slowing down workflows. Unlike consumer-grade file sharing services that store sensitive data on public servers, Cloud Sentrics keeps your data fully under your control, ensuring privacy and regulatory compliance. The platform integrates smoothly with your existing IT systems, keeping data protected while providing easy access from any device, supporting mobility and efficient collaboration across teams, departments, external partners and patients.
            </p>
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