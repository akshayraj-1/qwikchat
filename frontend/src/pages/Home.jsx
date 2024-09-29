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
            duration: 1,
            ease: "anticipate",
            staggerChildren: 0.11,
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
            <motion.main variants={variants} initial="initial" animate="final" viewport={{ once: true }}
                className="flex flex-col size-full justify-center items-center gap-1.5 px-5 sm:px-9" >

                {/* Headline Section */}
                <div className="font-semibold tracking-normal overflow-hidden flex flex-wrap justify-start sm:justify-center items-center gap-x-3 w-full
                text-[37px] sm:text-[5.7vw] md:text-[4.5vw]">
                    {["Connect.", "Chat.", "Disconnect."].map((label, idx) => (
                        <motion.h1 key={idx} variants={variants} className="inline-block">
                            {label}
                        </motion.h1>
                    ))}
                </div>

                {/* Description Section */}
                <motion.p variants={variants}
                    className="text-sm sm:text-[0.95rem] font-thin text-start sm:text-center text-pretty text-[#d8d8d8]/80 leading-relaxed w-full sm:max-w-custom md:max-w-custom2" >
                    Connect instantly and chat freely, with no sign-ups. Enjoy seamless conversations whenever you want.
                </motion.p>

                {/* Button Section */}
                <motion.div variants={variants} className="flex mt-10 justify-start w-full sm:justify-center" >
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