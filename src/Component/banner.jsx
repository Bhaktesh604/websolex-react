import React from 'react';
import img1 from '../Assets/bootsrap.png'
import img2 from '../Assets/xd.png'
import img3 from '../Assets/figma.png'
import img4 from '../Assets/Illustrator.png'
import img5 from '../Assets/css.png'
import img6 from '../Assets/html.png'
import img7 from '../Assets/react.png'
import img8 from '../Assets/photoshop.png'

function Banner() {
    return (
        <section className="banner position-relative">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="banner_main_menu col-12 col-lg-6 text-center">
                        <h2 className="mb-4 fw-semibold">Easiest way to manage portfolio</h2>
                        <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae doloremque dolor laudantium corporis recusandae accusamus! Sed, saepe</p>
                        <a href="javascript:void(0);" className="border rounded-2 bg-primary text-white">Signup</a>
                        <div className="banner_image d-none d-lg-block">
                            <img src={img8} alt="" className="banner_img1 position-absolute" />
                            <img src={img4} alt="" className="banner_img2 position-absolute" />
                            <img src={img2} alt="" className="banner_img3 position-absolute" />
                            <img src={img3} alt="" className="banner_img4 position-absolute" />
                            <img src={img5} alt="" className="banner_img5 position-absolute" />
                            <img src={img6} alt="" className="banner_img6 position-absolute" />
                            <img src={img1} alt="" className="banner_img7 position-absolute" />
                            <img src={img7} alt="" className="banner_img8 position-absolute" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
