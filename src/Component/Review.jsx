import React, { useRef, useState } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'; // Import the default Owl Carousel CSS
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; // Import Bootstrap icons

const ReviewSection = ({ reviews }) => {
    const carouselRef = useRef(null); // Ref to access Owl Carousel instance
    const [activeIndex, setActiveIndex] = useState(0); // State to track active slide index

    const options = {
        items: 2,
        // nav: true,
        rewind: true,
        autoplay: true
    };

    // Handle navigation to previous slide
    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev(); // Navigate to previous slide
            setActiveIndex(activeIndex === 0 ? reviews.length - 1 : activeIndex - 1);
        }
    };

    // Handle navigation to next slide
    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next(); // Navigate to next slide
            setActiveIndex(activeIndex === reviews.length - 1 ? 0 : activeIndex + 1);
        }
    };

    const reviewData = [ // Changed variable name to 'reviewData'
        {
            text: "Awesome service of web development. Thanks to Parth vaghani and Bhaktesh for their consultation. They guys made an amazing product for my business which helps me to automate my work easily.",
            author: "Pramay Usadadiya",
        },
        {
            text: "Work with WebSolex infotech is pure amount of trust & reliability! They believe in quality in most cost effective way , we have gave them work for our website & that work is as perfect as our vision! Thanks for such great service you have provided to your customers! Give you 5 star rating with all my heart!",
            author: "Dr Rahul Gelani",
        },
        {
            text: "The design process was seamless and collaborative. They took the time to listen to my ideas, preferences, and even my concerns. What impressed me the most was their ability to translate abstract concepts into a stunning and memorable logo. It's as if they took the essence of my business and transformed it into a work of art.",
            author: "Mayur Sheliya",
        },
        {
            text: "Working with WebSolex Infotech was a pleasure! They had a clear vision for their video project and provided detailed feedback throughout the process. Their communication was excellent, and they were responsive to my suggestions. I'm thrilled with the final result and would highly recommend Naimish Kanani as a client.",
            author: "Naimish Kanani",
        }
    ];

    return (
        <section className="review_section py-5">
            <div className="container">
                <div className="row">
                    <div className="review_heading d-flex justify-content-between align-items-center mb-5">
                        <h3 className="col-sm-6 col-xl-4">Discover What Our Wonderful Customers Have to Say</h3>
                        <div className="review_navigation">
                            <BsChevronLeft size="30px" style={{ marginRight: '10px', cursor: 'pointer' }} onClick={handlePrev} />
                            <BsChevronRight size="30px" style={{ cursor: 'pointer' }} onClick={handleNext} />
                        </div>
                    </div>
                    <OwlCarousel ref={carouselRef} options={options}>
                        {reviewData.map((item, index) => (
                            <div key={index} className="item">
                                <div className="review_sub_box d-block d-md-flex rounded-2">
                                    <div className="review_content">
                                        <ul className="d-flex mb-2">
                                            <li><i className="bi bi-star-fill pe-1" style={{ color: '#FFD43B' }}></i></li>
                                            <li><i className="bi bi-star-fill pe-1" style={{ color: '#FFD43B' }}></i></li>
                                            <li><i className="bi bi-star-fill pe-1" style={{ color: '#FFD43B' }}></i></li>
                                            <li><i className="bi bi-star-fill pe-1" style={{ color: '#FFD43B' }}></i></li>
                                            <li><i className="bi bi-star-fill pe-1" style={{ color: '#FFD43B' }}></i></li>
                                        </ul>
                                        <p className="mb-3">{item.text}</p>
                                        <h5 className="mb-0 fw-bold">{item.author}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
