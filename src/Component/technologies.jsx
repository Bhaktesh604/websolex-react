import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TechnologiesSection = () => {
    const [activeTab, setActiveTab] = useState('Design');

    const tabs = ['Design', 'Frameworks', 'Mobile Development', 'Web Development', 'Database', 'Infrastructure'];
    const technologies = {
        Design: [
            { id: 1, src: 'design-image1.jpg', alt: 'Design Technology 1' },
            { id: 2, src: 'design-image2.jpg', alt: 'Design Technology 2' },
        ],
        Frameworks: [
            { id: 1, src: 'framework-image1.jpg', alt: 'Framework Technology 1' },
            { id: 2, src: 'framework-image2.jpg', alt: 'Framework Technology 2' },
        ],
        'Mobile Development': [
            { id: 1, src: 'mobile-image1.jpg', alt: 'Mobile Development Technology 1' },
            { id: 2, src: 'mobile-image2.jpg', alt: 'Mobile Development Technology 2' },
        ],
        'Web Development': [
            { id: 1, src: 'web-image1.jpg', alt: 'Web Development Technology 1' },
            { id: 2, src: 'web-image2.jpg', alt: 'Web Development Technology 2' },
        ],
        Database: [
            { id: 1, src: 'database-image1.jpg', alt: 'Database Technology 1' },
            { id: 2, src: 'database-image2.jpg', alt: 'Database Technology 2' },
        ],
        Infrastructure: [
            { id: 1, src: 'infrastructure-image1.jpg', alt: 'Infrastructure Technology 1' },
            { id: 2, src: 'infrastructure-image2.jpg', alt: 'Infrastructure Technology 2' },
        ]
    };

    return (
        <section className="technologies_section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4 text-center">
                        <h1>Our Technologies</h1>
                    </div>
                    <div className="col-12">
                        <ul className="nav nav-tabs justify-content-center">
                            {tabs.map(tab => (
                                <li className="nav-item px-lg-3" key={tab}>
                                    <a
                                        className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                                        href="#!"
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="tab-content">
                            <div className="row">
                                {technologies[activeTab].map(tech => (
                                    <div key={tech.id} className="col-12 col-md-6 col-lg-4 mb-4">
                                        <img src={tech.src} alt={tech.alt} className="img-fluid" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;
