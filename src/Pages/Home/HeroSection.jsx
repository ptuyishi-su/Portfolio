import React from "react";

export default function HeroSection() {



    return (
        <section className="hero min-h-[75vh] relative" id="Hero">
            {/* Content positioned on the far right, flush with bottom, no padding */}
            <div className="absolute bottom-0 right-0 max-w-2xl">
                <h1 className="hero-title mb-3">
                    Healthcare Data and Design
                </h1>
                <p className="body-text">
                I'm a multidisciplinary data analyst and UI/UX designer based in New York, working at the intersection of healthcare and technology. I'm passionate about building solutions for social good, with a focus on improving clinical, pharmacy, and patient-facing experiences. My work focuses on simplifying complex healthcare workflows, supporting better data-driven decision-making, and helping organizations deliver safer, efficient, and more human-centered care.
                </p>
            </div>
        </section>
    );
}
