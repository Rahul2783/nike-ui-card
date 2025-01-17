import React from "react";
const HeroSection = () => {
    return (
        <>
        <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Availabe on</p>
                <div className="brand-icons">
                    <img src="/amazone.png" width={32} height={32} alt="amazone-logo" />
                    <img src="/flipkart.png" width={32} height={32} alt="flipkart-logo" />
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/shoe.png"  width={700} height={500} alt="shoe-logo" />
        </div>
    </main>
    </>
        
    );
};

export default HeroSection;
