import { experiences } from "../../../../utils/constants";
import {motion} from 'framer-motion'

function index() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-16">
      <div className="text-white mb-10 text-3xl font-thin">Work Experience</div>
      <div className="flex flex-col items-center justify-center gap-10 w-full">
        {experiences.map((experience) => (
          <motion.div className="flex flex-col gap-5 w-[80%] md:w-[60%] lg:w-[40%] text-white text-xl bg-white/30 px-2 py-5 rounded-lg"
          whileInView={{opacity:1,scaleY:1}}
          initial={{opacity:0,scaleY:0.5}}
          transition={{duration:0.5}}
          >
            <div className="flex items-center justify-between w-full ">
            <div>
             <div className='text-white drop-shadow-[0_0_10px_rgb(255,255,255)] text-2xl'>{experience.organisation}</div>
             <div className="text-white drop-shadow-[0_0_10px_rgb(255,255,255)] text-xl">{'*'}{experience.title}</div>
             </div>
             <div><img src={`${experience.image}`} className={`${experience.organisation==='AITR-ACM' ? "h-[30px]" :"h-[50px]"}`}/></div>
            </div>
            <div className="flex gap-3 flex-col text-base mx-5">{
              experience.description.map((info)=><div className="border-l-[1px] border-white px-4">{info}</div>)
            }</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default index;
