import { useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosColorFilter } from "react-icons/io";

import { useTheme, THEME_NAMES } from "@/modules/ThemeContext";

export default function Hero() {
  const { primary, secondary, dispatch } = useTheme();

  useEffect(() => {
    VANTA.BIRDS({
      el: "#hero-background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x000000,
      backgroundAlpha: 0,
      color1: 0xffffff,
      color2: 0xd1d5db,
      birdSize: 1.5,
      quantity: 3.0,
      colorMode: "lerp",
    });

    const txt = "Student. Developer. Entrepreneur.";
    let i = 0;

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("subtitle-typewriter").innerHTML =
          txt.substring(0, i + 1);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    typeWriter();
  }, []);

  return (
    <section style={{ backgroundColor: primary }} id="hero-background">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-[90vh] relative">
        <div className="flex flex-col h-full justify-center pb-[100px]">
          <motion.div
            animate={{ y: 0, opacity: 100 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.75 }}
          >
            <h1 className="text-[85px] font-bold text-white">Anshay Saboo</h1>
            <p
              className={`text-[35px] font-semibold`}
              style={{ color: secondary }}
              id="subtitle-typewriter"
            ></p>
          </motion.div>
        </div>

        <button
          className="absolute bottom-5 right-5 bg-white w-12 h-12 rounded hover:bg-gray-200 transition flex justify-center items-center pb-1"
          style={{ color: primary }}
          onClick={() => dispatch({})}
        >
          <IoIosColorFilter size={40} />
        </button>
      </div>
    </section>
  );
}
