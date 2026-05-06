import React, { useState } from 'react'
import BgImageFile from '../background-images/bg-slate.png'
import Blactumbler from '../background-images/black.png'
import Navbar from './Navbar/Navbar'
import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const bgStyle = {
    backgroundImage: `url(${BgImageFile})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}

// Shared viewport config — once:false means animations replay every time
const vp = { once: false, amount: 0.2 }

const spring = (delay = 0) => ({
    type: 'spring', stiffness: 100, damping: 10, delay,
})

const Hero = () => {
    const [sideBar, setSideBar] = useState(false)

    return (
        <main style={bgStyle}>
            <section className='relative min-h-[750px] w-full'>
                <Navbar sideBar={sideBar} setSideBar={setSideBar} />

                {/* ── MOBILE layout (< md) ── */}
                <div className='md:hidden container flex flex-col items-center text-center pt-24 pb-12 gap-8 px-6'>

                    <motion.h1
                        initial={{ opacity: 0, y: -60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={vp}
                        transition={spring(0.1)}
                        className='text-5xl font-bold text-lightOrange tracking-wide'
                    >
                        BLACK TUMBLER
                    </motion.h1>

                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={vp}
                        transition={spring(0.2)}
                        src={Blactumbler} alt="Black Tumbler"
                        className='h-[260px] img-shadow'
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={vp}
                        transition={spring(0.3)}
                        className='text-lightOrange space-y-2'
                    >
                        <h2 className='text-xl font-semibold'>BLACK LIFESTYLE LOVERS</h2>
                        <p className='text-sm opacity-60 leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at dolor,
                            eaque dolores aut laborum neque voluptatibus quasi doloremque asperiores.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={vp}
                        transition={spring(0.4)}
                        className='text-lightOrange space-y-2'
                    >
                        <h2 className='text-xl font-semibold'>BLACK TUMBLER</h2>
                        <p className='text-sm opacity-60 leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Harum at dolor, eaque dolores aut laborum.
                        </p>
                    </motion.div>

                    {/* Social icons — inline row on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={vp}
                        transition={spring(0.5)}
                        className='flex gap-4'
                    >
                        <div className='p-2 rounded-full border border-white text-white cursor-pointer'><FaFacebookF className='text-xl' /></div>
                        <div className='p-2 rounded-full border border-white text-white cursor-pointer'><FaInstagram className='text-xl' /></div>
                        <div className='p-2 rounded-full border border-white text-white cursor-pointer'><FaTwitter className='text-xl' /></div>
                    </motion.div>
                </div>

                {/* ── TABLET layout (md → lg) ── */}
                <div className='hidden md:grid lg:hidden container grid-cols-2 gap-10 place-items-center min-h-[750px] px-8'>

                    {/* Left: stacked text blocks */}
                    <div className='text-lightOrange space-y-10'>
                        <motion.h1
                            initial={{ opacity: 0, y: -60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={vp}
                            transition={spring(0.8)}
                            className='text-5xl font-bold'
                        >
                            BLACK TUMBLER
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={vp}
                            transition={spring(1)}
                            className='space-y-3'
                        >
                            <h2 className='text-2xl'>BLACK LIFESTYLE LOVERS,</h2>
                            <p className='text-sm opacity-55 leading-loose'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at dolor,
                                eaque dolores aut laborum neque voluptatibus quasi doloremque asperiores.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={vp}
                            transition={spring(0.5)}
                            className='space-y-3'
                        >
                            <h2 className='text-2xl'>BLACK TUMBLER</h2>
                            <p className='text-sm opacity-55 leading-loose'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Harum at dolor, eaque dolores aut laborum.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: image with orange ring */}
                    <div className='relative flex justify-center'>
                        <motion.img
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={vp}
                            transition={spring(0.4)}
                            src={Blactumbler} alt="Black Tumbler"
                            className='relative z-40 h-[450px] img-shadow'
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={vp}
                            transition={spring(0.8)}
                            className='h-[140px] w-[140px] absolute top-16 -right-6 border-primary border-[16px] rounded-full z-10'
                        />
                    </div>
                </div>

                {/* ── DESKTOP layout (lg+) ── */}
                <div className='hidden lg:grid container grid-cols-3 place-items-center min-h-[850px]'>

                    {/* Left text panel */}
                    <div className='text-lightOrange p-4 space-y-28'>
                        <motion.h1
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={vp}
                            transition={spring(1)}
                            className='text-7xl font-bold ml-14'
                        >
                            BLACK TUMBLER
                        </motion.h1>
                        <div className='relative'>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={vp}
                                transition={spring(0.5)}
                                className='relative z-10 space-y-4'
                            >
                                <h1 className='text-2xl'>BLACK LIFESTYLE LOVERS,</h1>
                                <h1 className='text-sm opacity-55 leading-loose'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at dolor,
                                    eaque dolores aut laborum neque voluptatibus quasi doloremque asperiores
                                    possimus nesciunt et eligendi doloribus, accusantium velit rerum nobis recusandae.
                                </h1>
                            </motion.div>
                            <div className='absolute -top-6 -left-10 w-[250px] h-[195px] bg-gray-700/25' />
                        </div>
                    </div>

                    {/* Center image panel */}
                    <div className='relative'>
                        <motion.img
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={vp}
                            transition={spring(0.4)}
                            src={Blactumbler} alt="Black Tumbler"
                            className='relative z-40 h-[700px] img-shadow'
                        />
                        {/* Orange ring */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={vp}
                            transition={spring(0.8)}
                            className='h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10'
                        />
                        {/* Watermark text — lg only */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={vp}
                            transition={spring(0.8)}
                            className='absolute top-20 left-[200px] z-[1]'
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: -180 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={vp}
                                transition={spring(0.2)}
                                className='text-[140px] font-bold text-darkGray/40 leading-none'
                            >
                                Black Tumbler
                            </motion.h1>
                        </motion.div>
                    </div>

                    {/* Right text panel */}
                    <div className='text-lightOrange p-4 space-y-28'>
                        <h1 className='opacity-0 text-7xl font-bold ml-14'>BLACK TUMBLER</h1>
                        <div className='relative'>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={vp}
                                transition={spring(1.2)}
                                className='relative z-10 space-y-4'
                            >
                                <h1 className='text-2xl'>BLACK TUMBLER</h1>
                                <h1 className='text-sm opacity-55 leading-loose'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at dolor,
                                    eaque dolores aut laborum neque voluptatibus quasi doloremque asperiores.
                                </h1>
                            </motion.div>
                            <div className='absolute -top-6 -right-10 w-[250px] h-[195px] bg-darkGray/50' />
                        </div>
                    </div>
                </div>

                {/* ── SIDEBAR — lg+ only ── */}
                {sideBar && (
                    <motion.div
                        initial={{ x: '100%' }}
                        whileInView={{ x: 0 }}
                        viewport={vp}
                        className='absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10'
                    >
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='flex flex-col justify-center items-center gap-6 text-white'>
                                <div className='w-[1px] h-[70px] bg-white' />
                                <div className='p-2 rounded-full border border-white cursor-pointer'><FaFacebookF className='text-2xl' /></div>
                                <div className='p-2 rounded-full border border-white cursor-pointer'><FaInstagram className='text-2xl' /></div>
                                <div className='p-2 rounded-full border border-white cursor-pointer'><FaTwitter className='text-2xl' /></div>
                                <div className='w-[1px] h-[70px] bg-white' />
                            </div>
                        </div>
                    </motion.div>
                )}

            </section>
        </main>
    )
}

export default Hero