import React from 'react';


const AW1 = "/assets/AW1.jpng";

const badges = {
  foundational: [
    { title: 'Cloud Practitioner', img: AW1 },
    { title: 'AI Practitioner', img: AW1 },
  ],
  associate: [
    { title: 'SysOps Administrator', img: '/path-to-sysops.jpg' },
    { title: 'Developer', img: '/path-to-developer.jpg' },
    { title: 'Solutions Architect', img: '/path-to-solutions-architect.jpg' },
    { title: 'Data Engineer', img: '/path-to-data-engineer.jpg' },
    { title: 'Machine Learning Engineer', img: '/path-to-ml-engineer.jpg' },
  ],
  professional: [
    { title: 'Solutions Architect', img: '/path-to-professional-solutions.jpg' },
    { title: 'DevOps Engineer', img: '/path-to-devops.jpg' },
  ],
  specialty: [
    { title: 'Advanced Networking', img: '/path-to-advanced-networking.jpg' },
    { title: 'Machine Learning', img: '/path-to-specialty-ml.jpg' },
    { title: 'Security', img: '/path-to-security.jpg' },
  ],
};

const AwsCertification = () => {
  return (
    <div className="p-8 bg-white relative">

      {/* Foundational */}
      <section className="mb-16">
        <h2 className="text-gray-700 font-bold text-lg mb-2">FOUNDATIONAL</h2>
        <p className="text-sm mb-6 text-gray-500">Knowledge-based certification for foundational understanding of AWS Cloud.<br/> <b>No prior experience needed.</b></p>

        <div className="flex gap-8">
          {badges.foundational.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={badge.img} alt={badge.title} className="w-28 h-28 object-cover clip-badge shadow-lg" />
              <span className="text-xs mt-2 text-center">{badge.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Professional */}
      <section className="mb-16">
        <h2 className="text-gray-700 font-bold text-lg mb-2">PROFESSIONAL</h2>
        <p className="text-sm mb-6 text-gray-500">Role-based certifications that validate advanced skills and knowledge.<br/> <b>2 years of prior AWS Cloud experience recommended.</b></p>

        <div className="flex gap-8">
          {badges.professional.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={badge.img} alt={badge.title} className="w-28 h-28 object-cover clip-badge shadow-lg" />
              <span className="text-xs mt-2 text-center">{badge.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Associate */}
      <section className="mb-16">
        <h2 className="text-gray-700 font-bold text-lg mb-2">ASSOCIATE</h2>
        <p className="text-sm mb-6 text-gray-500">Showcase your knowledge and skills on AWS and build credibility.<br/><b>Prior cloud and/or strong on-premises IT experience recommended.</b></p>

        <div className="grid grid-cols-3 gap-8">
          {badges.associate.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={badge.img} alt={badge.title} className="w-28 h-28 object-cover clip-badge shadow-lg" />
              <span className="text-xs mt-2 text-center">{badge.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Specialty */}
      <section>
        <h2 className="text-gray-700 font-bold text-lg mb-2">SPECIALTY</h2>
        <p className="text-sm mb-6 text-gray-500">Dive deeper and position yourself as a trusted advisor.<br/><b>Refer to the exam guides on the exam pages for recommended experience.</b></p>

        <div className="flex gap-8">
          {badges.specialty.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={badge.img} alt={badge.title} className="w-28 h-28 object-cover clip-badge shadow-lg" />
              <span className="text-xs mt-2 text-center">{badge.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ARROWS - OPTIONAL */}
      {/* You can add lines here using <div className="absolute bg-orange-400 w-[100px] h-[2px]"> and rotate if needed */}
    </div>
  );
};

export default AwsCertification;
