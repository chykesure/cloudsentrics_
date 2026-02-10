import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const plans = [
  {
    name: 'Starter Plan',
    subtitle: 'Best for: Organizations beginning to securely store and distribute customer data.',
    storage: '300GB',
    isHighlighted: false,
    features: [
      'User Access: Up to 600 users.',
      'Secure File Delivery via Email + OTP',
      'NDPC-compliant secure data storage.',
      'OTP-protected access links.',
      'Audit logs and access history.',
    ],
  },
  {
    name: 'Growth Plan',
    subtitle: 'Best for: Growing teams handling frequent and sensitive customer data.',
    storage: '600GB',
    isHighlighted: true,
    features: [
      'User Access: Up to 600 users.',
      'Secure File Delivery via Email + OTP',
      'Enhanced NDPC compliance support.',
      'Advanced Encryption.',
      'OTP and access expiry controls.',
      'Detailed audit and delivery logs.',
    ],
  },
  {
    name: 'Enterprise Plan',
    subtitle: 'Best for large organizations and regulated industries',
    storage: '2TB',
    isHighlighted: false,
    features: [
      'User Access: Up to 600 users',
      'Secure File Delivery via Email + OTP',
      'Full NDPC Compliance alignment',
      'Advanced Access Control & Permissions',
      'Detailed Audit Trails',
      'Dedicated Account Support',
    ],
  },
  {
    name: 'Custom Plan',
    subtitle: 'Designed for organizations with advanced or unique data storage needs',
    storage: null,
    isHighlighted: true,
    features: [
      'Custom storage capacity',
      'NDPC-compliant architecture tailored to your organization',
      'Secure File Delivery via Email + OTP',
      'Advanced access control and custom OTP rules',
      'Multi-user access control (up to 600 users)',
      'Dedicated audit and compliance reporting',
      'Custom delivery workflows',
      'Priority onboarding and support',
    ],
  },
];

const MainBody = () => {
  // Split into pairs for separate card groups (each pair gets its own container)
  const planPairs = [
    [plans[0], plans[1]], // Starter + Growth
    [plans[2], plans[3]], // Enterprise + Custom
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white text-gray-900 relative overflow-hidden">
      {/* Subtle cyan radial gradients in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.12)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16 lg:space-y-20">
        {planPairs.map((pair, pairIndex) => (
          <div
            key={pairIndex}
            className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl border border-cyan-800/30 shadow-2xl shadow-black/40"
          >
            {pair.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 + pairIndex * 0.15 }}
                className={`flex flex-col ${plan.isHighlighted ? 'bg-[#0b1e44]' : 'bg-[#0a1a38]'}`}
              >
                {/* Header - cyan gradient */}
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-6 md:py-8 px-6 md:px-10 text-center">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="mt-2 md:mt-3 text-base md:text-lg text-cyan-50/90 font-medium">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Content area */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col flex-grow">
                  {/* Storage Capacity or FEATURES label */}
                  <div className="mb-8 md:mb-10 text-center">
                    {plan.storage ? (
                      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        Storage Capacity: <span className="text-cyan-400">{plan.storage}</span>
                      </p>
                    ) : (
                      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400">
                        FEATURES
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 md:space-y-5 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircleIcon className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-base md:text-lg text-slate-100 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Button - centered */}
                  <div className="mt-10 md:mt-12 flex justify-center">
                    <motion.a
                      whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(6,182,212,0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      href="/get-started"
                      className={`
                        px-10 md:px-16 py-4 md:py-5 rounded-lg font-semibold text-lg md:text-xl
                        transition-all duration-300
                        ${plan.isHighlighted
                          ? 'bg-white hover:bg-gray-100 text-[#0a1a3f] border-2 border-white/80'
                          : 'bg-white hover:bg-gray-100 text-[#0a1a3f] border-2 border-white/80 shadow-lg'
                        }
                      `}
                    >
                      Contact Us
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainBody;