import React from 'react';

const services = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Web Development is a broad term that encompasses all activities involved in creating websites or web applications for the internet. It involves various technologies, frameworks, and languages to build and maintain websites.',
        icon: 'https://cdn.lordicon.com/qhgmphtg.json',
        color: '#fa8c16',
    },
    {
        id: 2,
        title: 'Graphic Design',
        description: 'Graphics refers to visual images or designs created or displayed on a screen or printed on a physical medium. Graphics are used to communicate information, convey ideas, or enhance the visual appeal of various forms of media.',
        icon: 'https://cdn.lordicon.com/puvaffet.json',
        color: '#229342',
    },
    {
        id: 3,
        title: 'Mobile App Development',
        description: 'Mobile application development is the process of creating software applications that run on a mobile device, such as a smartphone or tablet.',
        icon: 'https://cdn.lordicon.com/nobciafz.json',
        color: '#4285f4',
    },
    {
        id: 4,
        title: 'Game Development',
        description: 'Game Development is the art of creating games and describes the design, development and release of a game. It may involve concept generation, design, build, test and release.',
        icon: 'https://cdn.lordicon.com/ktxpktdd.json',
        color: '#722ed1',
    },
];

const ServiceSection = () => {
    return (
        <section className="service py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap">
                        <div className="col-12 col-xl-4 d-flex align-items-center mb-3 mb-lg-5 mb-xl-0 ">
                            <div className="section_title service_title mb-5 wow fadeInDown animated text-center text-md-start" data-wow-delay="0.3s">
                                <div className="section_sub_title uppercase mb-3">
                                    <h6>SERVICES</h6>
                                </div>
                                <div className="section_main_title">
                                    <h1 className="mb-4">Explore What We offer</h1>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                                        voluptatum necessitatibus, incidunt rem odio debitis consectetur ullam nemo
                                        sint.</p>
                                    <a href="javascript:void(0);" className="rounded-1 text-decoration-none">View All</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-8 d-flex flex-wrap">
                            {services.map(service => (
                                <div key={service.id} className="col-12 col-md-6 mb-5 mb-md-3">
                                    <div className="service_sub_box d-block d-lg-flex p-3 me-0 me-lg-3">

                                    <i class="bi bi-pc-display-horizontal"></i>
                                        <div className="srvice_content">
                                            <div className="service_style_eleven_title">
                                                <h4>{service.title}</h4>
                                            </div>
                                            <div className="service_style_eleven_text pt-2">
                                                <p>{service.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
