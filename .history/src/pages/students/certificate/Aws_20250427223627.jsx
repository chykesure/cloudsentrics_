import React from 'react';

const AW1 = "/assets/AW1.png";

const badges = {
    foundational: [
        { title: 'Cloud Practitioner', img: AW1 },
        { title: 'AI Practitioner', img: AW1 },
    ],
    associate: [
        { title: 'SysOps Administrator', img: AW1 },
        { title: 'Developer', img: AW1 },
        { title: 'Solutions Architect', img: AW1 },
        { title: 'Data Engineer', img: AW1 },
        { title: 'Machine Learning Engineer', img: AW1 },
    ],
    professional: [
        { title: 'Solutions Architect', img: AW1 },
        { title: 'DevOps Engineer', img: AW1 },
    ],
    specialty: [
        { title: 'Advanced Networking', img: AW1 },
        { title: 'Machine Learning', img: AW1 },
        { title: 'Security', img: AW1 },
    ],
};

const AwsCertification = () => {
    return (
        <div className="p-8 bg-white relative">
            {/* Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left Column: Foundational + Associate */}
                <div className="flex flex-col gap-16">
                    {/* Foundational */}
                    <section>
                        <h2 className="text-gray-700 font-bold text-lg mb-2">FOUNDATIONAL</h2>
                        <p className="text-sm mb-6 text-gray-500">
                            Knowledge-based certification for foundational understanding of AWS Cloud.<br />
                            <b>No prior experience needed.</b>
                        </p>
                        <div className="flex gap-8 flex-wrap">
                            {badges.foundational.map((badge, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <img
                                        src={badge.img}
                                        alt={badge.title}
                                        className="w-28 h-28 object-cover clip-badge shadow-lg"
                                    />
                                    <span className="text-xs mt-2 text-center">{badge.title}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Associate */}
                    <section>
                        <h2 className="text-gray-700 font-bold text-lg mb-2">ASSOCIATE</h2>
                        <p className="text-sm mb-6 text-gray-500">
                            Showcase your knowledge and skills on AWS and build credibility.<br />
                            <b>Prior cloud and/or strong on-premises IT experience recommended.</b>
                        </p>

                        <div className="flex flex-col items-start gap-6 ml-6">
                            {/* First row - 3 badges */}
                            <div className="flex gap-8 flex-wrap">
                                {badges.associate.slice(0, 3).map((badge, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        <img
                                            src={badge.img}
                                            alt={badge.title}
                                            className="w-28 h-28 object-cover clip-badge shadow-lg"
                                        />
                                        <span className="text-xs mt-2 text-center">{badge.title}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Second row - 2 badges centered */}
                            <div className="flex gap-8 justify-center">
                                {badges.associate.slice(3).map((badge, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        <img
                                            src={badge.img}
                                            alt={badge.title}
                                            className="w-28 h-28 object-cover clip-badge shadow-lg"
                                        />
                                        <span className="text-xs mt-2 text-center">{badge.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column: Professional + Specialty */}
                <div className="flex flex-col gap-16">
                    {/* Professional */}
                    <section>
                        <h2 className="text-gray-700 font-bold text-lg mb-2">PROFESSIONAL</h2>
                        <p className="text-sm mb-6 text-gray-500">
                            Role-based certifications that validate advanced skills and knowledge.<br />
                            <b>2 years of prior AWS Cloud experience recommended.</b>
                        </p>
                        <div className="flex gap-8 flex-wrap">
                            {badges.professional.map((badge, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <img
                                        src={badge.img}
                                        alt={badge.title}
                                        className="w-28 h-28 object-cover clip-badge shadow-lg"
                                    />
                                    <span className="text-xs mt-2 text-center">{badge.title}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Specialty */}
                    <section>
                        <h2 className="text-gray-700 font-bold text-lg mb-2">SPECIALTY</h2>
                        <p className="text-sm mb-6 text-gray-500">
                            Dive deeper and position yourself as a trusted advisor.<br />
                            <b>Refer to the exam guides on the exam pages for recommended experience.</b>
                        </p>
                        <div className="flex gap-8 flex-wrap">
                            {badges.specialty.map((badge, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <img
                                        src={badge.img}
                                        alt={badge.title}
                                        className="w-28 h-28 object-cover clip-badge shadow-lg"
                                    />
                                    <span className="text-xs mt-2 text-center">{badge.title}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default AwsCertification;
