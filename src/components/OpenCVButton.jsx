import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const OpenCVButton = () => {
    const openCV = () => {
        window.open("/assets/pdf/Javier Cables Resume.pdf", "_blank", "noopener,noreferrer");
    };

    return (
        <motion.button onClick={ openCV } whileHover={{ y: -5 }} whileTap={{ scale: 1.05 }} className="relative px-1 py-2 text-sm text-center rounded-xl border-1 font-extralight w-[7.5rem] cursor-pointer overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.p className="flex items-center justify-center gap-2" key="copied" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1, ease:"easeInOut" }}>
                    Open CV
                </motion.p>
            </AnimatePresence>
        </motion.button>
    );
};

export default OpenCVButton;