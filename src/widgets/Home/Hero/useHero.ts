import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
gsap.registerPlugin(ScrollTrigger);

export const useHero = () => {
  const main = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);


  useGSAP(
    (context) => {
      const fade = context.selector?.(".fade");
      const cover = context.selector?.(".cover img");

      if (!fade || !cover) return;

      gsap.set(fade, {
        y: 200,
        autoAlpha: 0,
        willChange: "transform",
      });

      gsap.set(cover, {
        scale: 1.3,
        autoAlpha: 0,
        willChange: "transform",
      });

      if (sliderRef.current) {
        gsap.set(sliderRef.current, {
          scale: 2,
          filter: "blur(10px)",
          autoAlpha: 0,
          willChange: "transform",
        });
      }

      if (main.current) {
        gsap.set(main.current, {
          clipPath: "inset(0% 0%)",
        });
      }

      const tl = gsap.timeline({ paused: true });

      tl.to(
        fade,
        {
          y: 0,
          autoRound: false,
          stagger: 0.05,
          autoAlpha: 1,
          ease: "expo.out",
          duration: 2,
        },
        0
      )
        .to(
          cover,
          {
            scale: 1,
            autoAlpha: 1,
            ease: "expo.out",
            duration: 2,
          },
          0
        )
        .play(0);
    },
    { scope: main, dependencies: [] }
  );

  return {
    main,
    sliderRef,
    contentRef,
  };
};
