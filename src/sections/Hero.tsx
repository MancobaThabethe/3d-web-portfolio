import { words } from "../constants/index.ts"
import Button from "../components/button.tsx"
import HeroExperience from "../components/hero-models/HeroExperience.tsx"
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.tsx";

function Hero() {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    useGSAP(() => {
        gsap.fromTo(".hero-text h1", {
            y: 60,
            opacity: 0,
        }, 
        {
            y: 0,
            opacity: 1,
            stagger: 0.25,
            duration: 1,
            ease: "power2.inOut",
        })

        gsap.fromTo("p.hero-desc", {
            y: -60,
            opacity: 0,
        }, 
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })
    })


    return (
    <section id="Hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className="hero-layout flex-col lg:flex-row justify-evenly">
        {/* HERO CONTENT */}
        <header className={`flex flex-col md:w-full w-screen justify-center md:px-20 px-5 ${isMobile ? "mt-5" : "mt-0"}`}>
            <div className="flex flex-col gap-7">
                <div className="hero-text">
                    <h1>Shaping 
                        <span className="slide">
                            <span className="wrapper">
                                {
                                    words.map(word => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img src={word.imgPath} alt={word.text + "-icon"} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
                                            <span className="">{word.text}</span>
                                        </span>
                                    ))
                                }
                            </span>
                        </span>
                    </h1>
                    <h1>into Real Projects</h1>
                    <h1>that Deliver Results</h1>
                </div>
                <p className=" text-white-50 md:text-xl relative z-10 pointer-events-none hero-desc">
                    Hi! I'm Mancoba, a self-taught Software Developer based in Nelspruit, South Africa with a passion for code.
                </p>
                <Button className="md:w-80 md:h-16 w-60 h-12" text="See My Work" id="button" />
            </div>
        </header>
            {/* 3D MODEL */}
            <figure className="pointer-events-none">
                <HeroExperience />
            </figure>
        </div>
        <AnimatedCounter />
    </section>
  )
}
export default Hero