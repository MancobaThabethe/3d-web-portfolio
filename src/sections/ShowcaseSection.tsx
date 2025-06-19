import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger);

function ShowcaseSection() {
  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  
  useGSAP(() => {
      gsap.fromTo(sectionRef.current, {
          opacity: 0,
          y: 60,
    }, 
    {
        opacity: 1,
        y: 0,
        duration: 1,
        // ease: "power2.inOut",
        // scrollTrigger: {
        //     trigger: sectionRef.current,
        //     start: 'top 80%',
        //     end: 'top 10%',
        //     scrub: true,
        // },
    })
    const projectCards = [project1Ref.current,project2Ref.current, project3Ref.current];

    projectCards.forEach((card, index) => {
        gsap.fromTo(card, {
            opacity: 0,
            y: 60,
        }, 
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.2 *(index + 1) ,
            ease: "power2.in",
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                // end: 'top bottom-=0',
                // scrub: true,
            },
        })
    })
  }, [])
  
    return (
    <section id="work" className="app-showcase" ref={sectionRef}>
        <div className="w-full">
            <div className="showcaselayout">
                {/* LEFT */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde" />
                    </div>
                    <div className="text-content">
                        <div className="badges">
                            <span className="badge">Web</span>
                            <span className="badge">Mobile</span>
                        </div>
                        <h2>On-demand Rides Made Simple With a Powerful, User-Friendly App Called Ryde</h2>
                        <p className="text-white-50 md:text-xl">
                            Ryde is a ride-hailing app that connects users with drivers in their area. Users can request rides, track their driver's location, and rate their experience.
                        </p>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/project2.png" alt="Project 2" />
                        </div>
                        <div className="badges">
                            <span className="badge">Web</span>
                            <span className="badge">Mobile</span>
                        </div>
                        <h2>
                            Library Management Platform
                        </h2>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/project3.png" alt="Project 3" />
                        </div>
                        <div className="badges">
                            <span className="badge">Web</span>
                            <span className="badge">Mobile</span>
                        </div>
                        <h2>
                            E-Commerce Website
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default ShowcaseSection