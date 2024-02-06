import React from 'react';
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from "framer-motion";
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Landing = ({ setSelectedPage }) => {
    const isAboveSmallScreens = useMediaQuery("(min-width:1060px)");
    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
        >
            {/* IMAGE SECTION */}
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                {isAboveSmallScreens ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
                  before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img
                            alt="profile"
                            className="rounded-t-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src="/assets/self3.png"
                        />
                    </div>
                ) : (
                    <img
                        alt="profile"
                        className="rounded-t-full z-10 w-full max-w-[400px] md:max-w-[600px]"
                        src="/assets/self3.png"
                    />
                )}

            </div>

            {/* main section */}
            <div className='z-30 basis-4/5 mt-12 md:mt-28'>
                <motion.div initial='hidden' whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >

                    <p className="text-5xl font-playfair z-10 text-center md:text-start">
                        Fateru Victor <span className='text-yellow'>Oluwatobiloba</span>

                    </p>

                    <p className="mt-10 mb-4 text-lg text-center md:text-start">
                       A self taught frontend developer with over four years of active development, more actively in the financial technology industry,
                    </p>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <AnchorLink
                        className="bg-blue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:border-2 hover:bg-none transition duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        Contact Me
                    </AnchorLink>
                    <AnchorLink
                        className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                            Let's talk.
                        </div>
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>


        </section>
    )
}

export default Landing
