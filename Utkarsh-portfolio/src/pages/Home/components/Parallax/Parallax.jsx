import { motion, useScroll, useTransform } from "framer-motion";
import mountains from "../../../../utils/mountains.png";
import planets from "../../../../utils/planets.png";
import stars from "../../../../utils/stars.png";
import { useRef } from "react";

function Parallax({ type = "About" }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      className="relative flex items-center justify-center h-[100vh] overflow-hidden"
      ref={ref}
      style={{
        background:
          type === "About"
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      <motion.h1
        className="text-white text-center text-[50px] mb-10 font-bold"
        style={{ y: ytext }}
      >
        {type === "About" ? "Know a bit about Me" : "Look what I can make"}
      </motion.h1>

      {/* ⭐ Stars (Background) */}
      <motion.div
        className="absolute bottom-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${stars})`, x: ybg }}
      ></motion.div>

      {/* 🪐 Planets (Middle Layer) */}
      <motion.div
        className="absolute bottom-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat z-10"
        style={{ backgroundImage: `url(${planets})`, y: ybg }}
      ></motion.div>

      {/* ⛰️ Mountains (Foreground) */}
      <motion.div
        className="absolute bottom-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat z-20"
        style={{ backgroundImage: `url(${mountains})` }}
      ></motion.div>
    </div>
  );
}

export default Parallax;
