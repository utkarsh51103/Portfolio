import { experiences } from "../../../../utils/constants";
import { motion } from "motion/react";

function index() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-16">
      <div className="text-white mb-10 text-3xl font-thin">Experience</div>
      <div className="flex justify-between w-[80%] md:w-[50%] text-white text-xl mb-5">
        <div className="pb-3 border-b-[1px] border-white font-thin">
          Timeline
        </div>
        <div className="pb-3 border-b-[1px] border-white font-thin">
          Organisation
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 w-full">
        {experiences.map((experience) => (
          <div className="text-slate-400 w-[80%] md:w-[60%] flex items-center justify-between gap-28 md:gap-40 lg:gap-52 border-b-[1px] pb-4 border-white">
            <div className="text-neutral-300 font-thin">{experience.time}</div>
            <div className="flex flex-col items-end justify-center gap-1">
              <div className="text-purple-500 text-right text-lg font-light">
                {experience.organisation}
              </div>
              <div className="text-sm text-right text-white font-extralight">
                {experience.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
