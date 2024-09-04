import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {generate} from "random-words";

import Footer from "../components/UI/Footer.jsx";
import Button from "../components/UI/Button.jsx";
import MeshGradient from "../components/Backgrounds/MeshGradient.jsx";
import InfiniteGrids from "../components/Backgrounds/InfiniteGrids/InfiniteGrids.jsx";

const variants = {
    parent: {
        initial: {
            opacity: 0,
        },
        final: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            },
        }
    },
    child: {
        initial: {
            y: 70,
            opacity: 0
        },
        final: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "anticipate",
                staggerChildren: 0.1,
            },
        }
    }
}

function Home() {

    const navigate = useNavigate();

    const handleCreateRoomClick = async () => {
        const roomId = await generate({ exactly: 1, maxLength: 6 });
        navigate(`/room/${roomId}`);
    }

    return (
        <motion.div variants={variants.parent} initial="initial" animate="final" className="relative h-full w-full">
            <InfiniteGrids opacity={0.95}>
                <MeshGradient className="flex flex-col justify-center items-center h-full w-full px-5 sm:px-9"
                              opacity={0.95}>

                    <motion.div className="font-bold tracking-normal"
                                style={{fontSize: 'clamp(40px, 4.3vw, 80px)'}}
                                variants={variants.child} initial="initial" animate="final">
                        <h1 className="overflow-hidden">
                            {
                                ["Connect.", "Chat.", "Disconnect."].map((label, idx) => {
                                    return (
                                        <motion.span key={idx}
                                                     variants={variants.child}
                                                     className="inline-block">{label}
                                        </motion.span>
                                    )
                                })
                            }
                        </h1>
                        <motion.div variants={variants.child}
                                    className="flex justify-start md:justify-center flex-wrap gap-5 mt-10">
                            <Button label="Create Room"
                                    effect={{ click: { scale: 0.95 } }}
                                    onClick={handleCreateRoomClick}/>
                        </motion.div>
                    </motion.div>

                </MeshGradient>
            </InfiniteGrids>
            <Footer/>
        </motion.div>
    );
}

export default Home;