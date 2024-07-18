// import React from 'react';
// import logo1 from '../Assets/logo-dreamliner.png'; // Add paths to your logos

// const logos = [
//     { id: 1, src: logo1, alt: 'Logo 1' },
//     { id: 2, src: logo1, alt: 'Logo 2' },
//     { id: 3, src: logo1, alt: 'Logo 3' },
//     { id: 4, src: logo1, alt: 'Logo 4' },
//     { id: 5, src: logo1, alt: 'Logo 5' },
//     { id: 6, src: logo1, alt: 'Logo 6' },
//     // Add more logos as needed
// ];

// const ClientSlider = () => {
//     return (
//         <div className="logo-slider-container">
//             <div className="logo-slider">
//                 {logos.map((logo) => (
//                     <img key={logo.id} src={logo.src} alt={logo.alt} className="img-fluid" />
//                 ))}
//                 {logos.map((logo) => (
//                     <img key={logo.id + logos.length} src={logo.src} alt={logo.alt} className="img-fluid" />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ClientSlider;


import React from 'react';
import logo1 from '../Assets/logo-dreamliner.png';
import logo2 from '../Assets/omdiamond.png';
import logo3 from '../Assets/Elan.png';
import logo4 from '../Assets/Elysian-jewels.png';

const logos = [
    { id: 1, src: logo1, alt: 'Logo 1' },
    { id: 2, src: logo2, alt: 'Logo 2' },
    { id: 3, src: logo3, alt: 'Logo 3' },
    { id: 4, src: logo4, alt: 'Logo 4' },
    { id: 5, src: logo1, alt: 'Logo 5' },
    { id: 6, src: logo1, alt: 'Logo 6' },
    // Add more logos as needed
];

const ClientSlider = () => {
    return (
        <>
            <div className="container">
                <div className="row mb-4">
                    <div className="section_sub_title clienttitle text-center uppercase mb-3">
                        <h6>TRUSTED BY HUNDREDS OF BRANDS</h6>
                    </div> 
                </div>
                <div className="logo-slider-container pb-5">
                    <div className="logo-slider">
                        {logos.map((logo) => (
                            <img key={logo.id} src={logo.src} alt={logo.alt} className="img-fluid mx-5" />
                        ))}
                        {logos.map((logo) => (
                            <img key={logo.id + logos.length} src={logo.src} alt={logo.alt} className="img-fluid" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientSlider;
