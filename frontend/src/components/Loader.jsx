import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const variants = {
    initial: {
        y: 15,
        opacity: 0,
    },
    final: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.3,
            ease: "anticipate",
            staggerChildren: 0.15,
        },
    },
    exit: {
        opacity: 0,
        y: -15,
        transition: {
            duration: 1.3,
            ease: "anticipate",
            staggerChildren: 0.15,
        }
    },
}

function Loader() {

    const loadingMessage = ["preparing the room...", "just a moment...", "tuning in...", "almost ready!"]
    const [currentText, setCurrentText] = useState(loadingMessage[0]);

    useEffect(() => {
        let idx = 0;
        const timer = setInterval(() => {
            idx = idx % loadingMessage.length;
            setCurrentText(loadingMessage[idx++]);
        }, 4500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative flex items-center justify-center h-full w-full">
            <AnimatePresence mode="wait">
                <motion.div key={currentText} variants={variants} initial="initial"
                            whileInView="final" exit="exit" className="flex"
                >
                    {
                        currentText.split(" ").map((word, idx) => (
                            <motion.span key={idx}
                                         variants={variants}
                                         className="mr-1.5 text-md">{word}</motion.span>
                        ))
                    }
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Loader;