import React from 'react'
import worldMap from '../../background-images/world-map.png'
import { motion } from 'framer-motion'

const WhereToBuy = () => {
    return (
        <div className='container my-36'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>

                {/* form section */}
                <div className='space-y-4'>
                    <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className='text-3xl font-bold leading-tight'>
                        Buy our <br /> products from <br /> anywhere
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className='text-sm text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                    </motion.p>

                    <form className='space-y-3'>
                        {/* Row 1: Name & Email */}
                        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4}} className='flex flex-col sm:flex-row gap-3'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='w-full sm:w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-500'
                            />
                            <input
                                type='email'
                                placeholder='Email'
                                className='w-full sm:w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-500'
                            />
                        </motion.div>

                        {/* Row 2: Country & Zipcode */}
                        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className='flex flex-col sm:flex-row gap-3'>
                            <input
                                type='text'
                                placeholder='Country'
                                className='w-full sm:w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-500'
                            />
                            <input
                                type='text'
                                placeholder='Zipcode'
                                className='w-full sm:w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-500'
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className='flex justify-center sm:justify-start'>
                            <button
                                type='submit'
                                className='bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold px-6 py-2 rounded transition-colors duration-200'
                            >
                                Order Now
                            </button>
                        </motion.div>
                    </form>
                </div>

                {/* world map section */}
                <div className='col-span-2'>
                    <motion.img initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1 }} src={worldMap} alt="World Map" className='w-full sm:w-[500px] mx-auto' />
                </div>

            </div>
        </div>
    )
}

export default WhereToBuy