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
            duration: 0.9,
            ease: "anticipate",
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: -15,
        transition: {
            duration: 0.9,
            ease: "anticipate",
            staggerChildren: 0.1,
        }
    },
}

function Loader() {

    const loadingMessage = ["preparing the room...", "just a moment...", "tuning in...", "almost ready!"]
    const [loadingText, setLoadingText] = useState(loadingMessage[0]);

    useEffect(() => {
        let text = [...loadingMessage];
        let idx = 0;
        const timer = setInterval(() => {
            if (idx === text.length) idx = 0;
            setLoadingText(text[idx++]);
        }, 3000);

        return () => clearInterval(timer);
    }, [loadingText]);

    return (
        <div className="relative flex items-center justify-center h-full w-full">
            <AnimatePresence mode="wait">
                <motion.div key={loadingText} variants={variants} initial="initial"
                            whileInView="final" exit="exit"
                className="flex">
                    {
                        loadingText.split(" ").map((word, idx) => (
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