import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {generate} from "random-words";

import Footer from "../components/UI/Footer.jsx";
import Button from "../components/UI/Button.jsx";
import MainBackground from "../components/Backgrounds/MainBackground.jsx";

const variants = {
    initial: {
        y: 70,
        opacity: 0
    },
    final: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: "anticipate",
            staggerChildren: 0.12,
        },
    }
}

function Home() {

    const navigate = useNavigate();

    const handleCreateRoomClick = async () => {
        const roomId = await generate({exactly: 1, maxLength: 6});
        navigate(`/room/${roomId}`);
    }

    return (
        <MainBackground className="flex flex-col justify-center items-center size-full" glowOpacity={0.8}>
            <motion.main variants={variants} initial="initial" animate="final"
                className="flex flex-col size-full justify-center items-center gap-1.5 px-5 sm:px-9" >

                {/* Headline Section */}
                <div className="font-bold tracking-normal overflow-hidden flex flex-wrap justify-center items-center gap-x-2.5 w-full"
                     style={{fontSize: "clamp(min(10vw, 37px), 4.4vw, 80px)"}} >

                    {["Connect.", "Chat.", "Disconnect."].map((label, idx) => (
                        <motion.h1 key={idx} variants={variants} className="inline-block">
                            {label}
                        </motion.h1>
                    ))}

                </div>

                {/* Description Section */}
                <motion.p variants={variants}
                    className="hidden sm:block text-[0.95rem] leading-relaxed text-center text-pretty text-textPrimary/80 max-w-[65vw] md:max-w-[57vw]" >
                    Connect instantly and chat freely, with no sign-ups or accounts. Designed for seamless
                    conversations when you need them most.
                </motion.p>

                {/* Button Section */}
                <motion.div variants={variants} className="mt-12" >
                    <Button
                        label="Create Room"
                        effect={{click: {scale: 0.95}, hover: {}}}
                        onClick={handleCreateRoomClick}
                        className="rounded-full px-9 py-[0.7rem]"
                    />
                </motion.div>
            </motion.main>
            <Footer/>
        </MainBackground>
    );
}

export default Home;