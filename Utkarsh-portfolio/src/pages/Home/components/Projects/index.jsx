import React from "react";
import Fling from "../../../../utils/projects/Fling.png";
import RouteSync from "../../../../utils/projects/RouteSync.png";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { motion } from "motion/react";
import { FLING_URL, FLING_GITHUB,ROUTESYNC_GITHUB,ROUTESYNC_URL } from "../../../../utils/constants";

function index(props) {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="text-3xl font-thin text-white border-b-[1px] border-white">Projects</div>
      <div className="mt-10 flex gap-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <a href={FLING_URL}>
            <motion.img
             whileHover={{ scale: 1.1}}
              src={Fling}
              height={200}
              width={200}
              className="rounded-md"
              data-tooltip-id="fling-url"
            />
            <Tooltip id="fling-url" content="Visit Site" />
          </a>
          <div data-tooltip-id="fling-github" className="flex items-center gap-3">
          <div className="text-purple-500 font-semibold">
          Fling
          </div>
            <a href={FLING_GITHUB}>
              <FaGithub className="text-white text-lg" />
            </a>
            <Tooltip id="fling-github" content="GitHub" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <a href={ROUTESYNC_URL}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={RouteSync}
              height={200}
              width={200}
              className="rounded-md"
              data-tooltip-id="fling-url"
            />
            <Tooltip id="fling-url" content="Visit Site" />
          </a>
          <div data-tooltip-id="fling-github" className="flex items-center gap-3">
          <div className="text-white font-semibold">
          <span className="text-orange-500">Route</span>
          <span>Sync</span>
          </div>
            <a href={ROUTESYNC_GITHUB}>
              <FaGithub className="text-white text-lg" />
            </a>
            <Tooltip id="fling-github" content="GitHub" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default index;
