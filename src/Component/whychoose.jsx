import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ChooseSection = () => {
    const reasons = [
        { id: 1, title: "High Quality Hardware", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, earum." },
        { id: 2, title: "Dedicated 24/7 support", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, earum." },
        { id: 3, title: "30-Day Money-back Guarantee", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, earum." },
        { id: 4, title: "Agile and Fast Working Style", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, earum." },
        { id: 5, title: "Some Apps are Free", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, earum." },
        { id: 6, title: "High Level of Usability", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, earum." }
    ];

    return (
        <section className="choose_section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h1>Why Choose Us</h1>
                    </div>
                    {reasons.map(reason => (
                        <div key={reason.id} className="col-12 col-md-6 col-xl-4 mb-4">
                            <div className="d-flex">
                                <div className="number_choose position-relative me-4">
                                    <p className="mb-0 fw-bold">{reason.id < 10 ? `0${reason.id}` : reason.id}</p>
                                </div>
                                <div className="choose_content">
                                    <h4 className="fw-bold">{reason.title}</h4>
                                    <p>{reason.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChooseSection;
