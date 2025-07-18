import { FlipWords } from "./FlipWords"
import { motion } from "motion/react"

const HeroText = () => {
    const words = ["Insights", "Solutions", "Value"]

    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }

  return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/* Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1 className="text-4xl font-medium text-neutral-300" variants= { variants } initial="hidden" animate="visible" transition= {{ delay: 1 }} >Hi, I'm Javi</motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p className="text-5xl font-medium text-neutral-300" variants= { variants } initial="hidden" animate="visible" transition= {{ delay: 1.2 }}>
                        A <span className="text-white">Data Scientist</span> <br /> Focused on Creating
                    </motion.p>
                    <motion.div variants= { variants } initial="hidden" animate="visible" transition= {{ delay: 1.5 }}> 
                        <FlipWords words = {words} className="font-black text-white text-7xl"/> 
                    </motion.div>
                    <motion.p className="text-4xl font-medium text-neutral-300" initial= {{ opacity: 0, x: -50 }} animate= {{ opacity: 1, x: 0 }} transition= {{ delay: 1.8 }}>from Data</motion.p>
                </div>
            </div>
            {/* Mobile View */}
            <div className="flex flex-col space-y-6 md:hidden">
                <div>
                    <motion.p className="text-5xl font-medium text-neutral-300" initial= {{ opacity: 0, x: -50 }} animate= {{ opacity: 1, x: 0 }} transition= {{ delay: 1 }}>Hi, I'm Javi</motion.p>
                    <motion.p className="text-5xl font-black text-white" initial= {{ opacity: 0, x: -50 }} animate= {{ opacity: 1, x: 0 }} transition= {{ delay: 1.2 }}>Data Scientist</motion.p>
                    <motion.p className="text-5xl text-neutral-300" initial= {{ opacity: 0, x: -50 }} animate= {{ opacity: 1, x: 0 }} transition= {{ delay: 1.2 }}>Creating</motion.p>
                    <motion.div initial= {{ opacity: 0, x: -50 }} animate= {{ opacity: 1, x: 0 }} transition= {{ delay: 1.5 }}>
                        < FlipWords words = {words} className="font-bold text-white text-6xl"/>
                    </motion.div>
                    <motion.p className="text-5xl text-neutral-300" initial= {{ opacity: 0, x: -50 }} animate= {{ opacity: 1, x: 0 }} transition= {{ delay: 1.8 }}>from Data</motion.p>
                </div>
            </div>
        </div>
    );
};

export default HeroText;