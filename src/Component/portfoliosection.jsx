// import React, { useState } from 'react';

// const portfolios = {
//     Animation: [
//         { id: 1, src: 'animation1.jpg', alt: 'Animation 1' },
//         { id: 2, src: 'animation2.jpg', alt: 'Animation 2' },
//     ],
//     '3D Model': [
//         { id: 1, src: '3dmodel1.jpg', alt: '3D Model 1' },
//         { id: 2, src: '3dmodel2.jpg', alt: '3D Model 2' },
//     ],
//     'Game Development': [
//         { id: 1, src: 'gamedev1.jpg', alt: 'Game Development 1' },
//         { id: 2, src: 'gamedev2.jpg', alt: 'Game Development 2' },
//     ],
//     'Graphic Design': [
//         { id: 1, src: 'graphicdesign1.jpg', alt: 'Graphic Design 1' },
//         { id: 2, src: 'graphicdesign2.jpg', alt: 'Graphic Design 2' },
//     ],
//     'App Development': [
//         { id: 1, src: 'appdev1.jpg', alt: 'App Development 1' },
//         { id: 2, src: 'appdev2.jpg', alt: 'App Development 2' },
//     ],
//     'Web Development': [
//         { id: 1, src: 'webdev1.jpg', alt: 'Web Development 1' },
//         { id: 2, src: 'webdev2.jpg', alt: 'Web Development 2' },
//     ],
// };

// const PortfolioSection = () => {
//     const [activeTab, setActiveTab] = useState('Animation');

//     return (
//         <section className="portfolio-section">
//             <div className="container">
//                 <div class="row">
//                     <div class="col-lg-12 text-center">
//                         <div class="section_title portfolio_title text_center  mt-3 wow fadeInDown mb-4">
//                             <div class="section_sub_title uppercase mb-3">
//                                 <h6>PORTFOLIO</h6>
//                             </div>
//                             <div class="section_main_title">
//                                 <h1>Our Latest Works For Your Business</h1>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <ul className="nav nav-tabs justify-content-start justify-content-lg-center  pt-3 pt-lg-4">
//                     {Object.keys(portfolios).map(tab => (
//                         <li className="nav-item px-1 px-lg-3 mb-1 mb-lg-0" key={tab}>
//                             <button
//                                 className={`nav-link ${activeTab === tab ? 'active' : ''}`}
//                                 onClick={() => setActiveTab(tab)}
//                             >
//                                 {tab}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//                 <div className="tab-content">
//                     <div className="portfolio-tab-content">
//                         {portfolios[activeTab].map(image => (
//                             <img
//                                 key={image.id}
//                                 src={image.src}
//                                 alt={image.alt}
//                                 className="portfolio-image"
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PortfolioSection;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import 'react-owl-carousel2/src/owl.carousel.css';
// import 'react-owl-carousel2/src/owl.theme.default.css';
// import OwlCarousel from 'react-owl-carousel2';
// import portfolio1 from '../../src/Assets/portfolio1.png';
// import portfolio2 from '../../src/Assets/portfolio2.png';
// import portfolio3 from '../../src/Assets/portfolio3.png';
// import portfolio4 from '../../src/Assets/portfolio1.png';

// const portfolios = {
//     Animation: [
//         { id: 1, src: portfolio1, alt: 'Animation 1', title: 'Project 1', language: 'HTML, CSS' },
//         { id: 2, src: portfolio2, alt: 'Animation 2', title: 'Project 2', language: 'React, Bootstrap' },
//         { id: 3, src: portfolio3, alt: 'Animation 1', title: 'Project 3', language: 'JavaScript, CSS' },
//         { id: 4, src: portfolio4, alt: 'Animation 2', title: 'Project 4', language: 'HTML, Bootstrap' },
//     ],
//     '3D Model': [
//         { id: 1, src: '3dmodel1.jpg', alt: '3D Model 1', title: '3D Project 1', language: 'Blender' },
//         { id: 2, src: '3dmodel2.jpg', alt: '3D Model 2', title: '3D Project 2', language: 'Maya' },
//     ],
//     'Game Development': [
//         { id: 1, src: 'gamedev1.jpg', alt: 'Game Development 1', title: 'Game Project 1', language: 'Unity, C#' },
//         { id: 2, src: 'gamedev2.jpg', alt: 'Game Development 2', title: 'Game Project 2', language: 'Unreal Engine' },
//     ],
//     'Graphic Design': [
//         { id: 1, src: 'graphicdesign1.jpg', alt: 'Graphic Design 1', title: 'Graphic Design 1', language: 'Photoshop' },
//         { id: 2, src: 'graphicdesign2.jpg', alt: 'Graphic Design 2', title: 'Graphic Design 2', language: 'Illustrator' },
//     ],
//     'App Development': [
//         { id: 1, src: 'appdev1.jpg', alt: 'App Development 1', title: 'App Project 1', language: 'Flutter' },
//         { id: 2, src: 'appdev2.jpg', alt: 'App Development 2', title: 'App Project 2', language: 'React Native' },
//     ],
//     'Web Development': [
//         { id: 1, src: 'webdev1.jpg', alt: 'Web Development 1', title: 'Web Project 1', language: 'React, Node.js' },
//         { id: 2, src: 'webdev2.jpg', alt: 'Web Development 2', title: 'Web Project 2', language: 'Vue.js, Laravel' },
//     ],
// };

// const PortfolioSection = () => {
//     const [activeTab, setActiveTab] = useState('Animation');
//     const isMobile = window.innerWidth <= 768; // Define mobile breakpoint as per your design

//     const renderPortfolio = () => {
//         const options = {
//             items: isMobile ? 1 : 4,
//             loop: true,
//             nav: false,
//             dots: true,
//             responsive: {
//                 0: {
//                     items: 1
//                 },
//                 768: {
//                     items: 4
//                 }
//             }
//         };

//         return (
//             <OwlCarousel options={options}>
//                 {portfolios[activeTab].map(project => (
//                     <div className="item" key={project.id}>
//                         <img
//                             src={project.src}
//                             alt={project.alt}
//                             className="img-fluid portfolio-image"
//                         />
//                         <div className="portfolio-info">
//                             <h3 className="portfolio-title">{project.title}</h3>
//                             <p className="portfolio-language">{project.language}</p>
//                         </div>
//                     </div>
//                 ))}
//             </OwlCarousel>
//         );
//     };

//     return (
//         <section className="portfolio-section">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12 text-center">
//                         <div className="section_title portfolio_title text_center mt-3 wow fadeInDown mb-4">
//                             <div className="section_sub_title uppercase mb-3">
//                                 <h6>PORTFOLIO</h6>
//                             </div>
//                             <div className="section_main_title">
//                                 <h1>Our Latest Works For Your Business</h1>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <ul className="nav nav-tabs justify-content-start justify-content-lg-center pt-3 pt-lg-4">
//                     {Object.keys(portfolios).map(tab => (
//                         <li className="nav-item px-1 px-lg-3 mb-1 mb-lg-0" key={tab}>
//                             <button
//                                 className={`nav-link ${activeTab === tab ? 'active' : ''}`}
//                                 onClick={() => setActiveTab(tab)}
//                             >
//                                 {tab}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//                 <div className="tab-content">
//                     <div className="portfolio-tab-content">
//                         {renderPortfolio()}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PortfolioSection;


import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel2';
import portfolio1 from '../../src/Assets/portfolio1.png';
import portfolio2 from '../../src/Assets/portfolio2.png';
import portfolio3 from '../../src/Assets/portfolio3.png';
import portfolio4 from '../../src/Assets/portfolio1.png';

const portfolios = {
    Animation: [
        { id: 1, src: portfolio1, alt: 'Animation 1', title: 'Project 1', language: 'HTML, CSS' },
        { id: 2, src: portfolio2, alt: 'Animation 2', title: 'Project 2', language: 'React, Bootstrap' },
        { id: 3, src: portfolio3, alt: 'Animation 1', title: 'Project 3', language: 'JavaScript, CSS' },
        { id: 4, src: portfolio4, alt: 'Animation 2', title: 'Project 4', language: 'HTML, Bootstrap' },
    ],
    '3D Model': [
        { id: 1, src: '3dmodel1.jpg', alt: '3D Model 1', title: '3D Project 1', language: 'Blender' },
        { id: 2, src: '3dmodel2.jpg', alt: '3D Model 2', title: '3D Project 2', language: 'Maya' },
    ],
    'Game Development': [
        { id: 1, src: 'gamedev1.jpg', alt: 'Game Development 1', title: 'Game Project 1', language: 'Unity, C#' },
        { id: 2, src: 'gamedev2.jpg', alt: 'Game Development 2', title: 'Game Project 2', language: 'Unreal Engine' },
    ],
    'Graphic Design': [
        { id: 1, src: 'graphicdesign1.jpg', alt: 'Graphic Design 1', title: 'Graphic Design 1', language: 'Photoshop' },
        { id: 2, src: 'graphicdesign2.jpg', alt: 'Graphic Design 2', title: 'Graphic Design 2', language: 'Illustrator' },
    ],
    'App Development': [
        { id: 1, src: 'appdev1.jpg', alt: 'App Development 1', title: 'App Project 1', language: 'Flutter' },
        { id: 2, src: 'appdev2.jpg', alt: 'App Development 2', title: 'App Project 2', language: 'React Native' },
    ],
    'Web Development': [
        { id: 1, src: 'webdev1.jpg', alt: 'Web Development 1', title: 'Web Project 1', language: 'React, Node.js' },
        { id: 2, src: 'webdev2.jpg', alt: 'Web Development 2', title: 'Web Project 2', language: 'Vue.js, Laravel' },
    ],
};

const PortfolioSection = () => {
    const [activeTab, setActiveTab] = useState('Animation');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderPortfolio = () => {
        const options = {
            items: isMobile ? 1 : 4,
            loop: true,
            nav: false,
            dots: true,
            margin: 20, // Adds space between items
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 4
                }
            }
        };

        return (
            <OwlCarousel options={options}>
                {portfolios[activeTab].slice(0, 4).map(project => (
                    <div className="item" key={project.id}>
                        <div className="card" style={{ border: 'rgb(244, 248, 254)',backgroundColor: '#f4f8fe', padding: '20px', textAlign: 'center' }}>
                            <img
                                src={project.src}
                                alt={project.alt}
                                className="card-img-top img-fluid portfolio-image"
                                style={{ marginBottom: '15px' }} // Adds space below the image
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ marginBottom: '10px' }}>{project.title}</h5>
                                <p className="card-text">{project.language}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        );
    };

    return (
        <section className="portfolio-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="section_title portfolio_title text_center mt-3 wow fadeInDown mb-4">
                            <div className="section_sub_title uppercase mb-3">
                                <h6>PORTFOLIO</h6>
                            </div>
                            <div className="section_main_title">
                                <h1>Our Latest Works For Your Business</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="nav nav-tabs justify-content-start justify-content-lg-center pt-3 pt-lg-4">
                    {Object.keys(portfolios).map(tab => (
                        <li className="nav-item px-1 px-lg-3 mb-1 mb-lg-0" key={tab}>
                            <button
                                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="tab-content pt-4">
                    <div className="portfolio-tab-content">
                        {renderPortfolio()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
