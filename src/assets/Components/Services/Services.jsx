import React from 'react'
import { motion } from 'framer-motion'
import coffee1 from '../../Coffee/coffee1.png'
import coffee2 from '../../Coffee/coffee2.png'
import coffee3 from '../../Coffee/coffee3.png'
const servicesData = [
    {
        id:1,
        image: coffee1,
        title: "Black Coffee",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam."
    },
    {
        id:2,
        image: coffee3,
        title: "Cold Coffee",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam."
    },
    {
        id:3,
        image: coffee1,
        title: "Cold Coffee",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam."
    },

]

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 10,
            ease: "easeInOut",
            // duration: 0.2
        }
    }
}

const containerVariants = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            staggerChildren: 0.4,
            // duration: 0.2
        }
    }
}

const Services = () => {
    return (
        <div className='container my-16 space-y-4'>

            {/* header section */}

            <div className='text-center max-w-lg mx-auto space-y-2'>
                <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.2 }} className='text-3xl font-bold text-lightGray'>
                    Fresh and <span className='text-primary'>Tasty Coffee</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.6 }} className='text-sm opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam.</motion.p>
            </div>




            {/* card section */}

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{amount: 0.8}} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {servicesData.map((service) => (
                     <motion.div variants={cardVariants} className='text-center p-4 space-y-6'>
                        <img src={service.image} alt={service.title} className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' />
                        <div className="spacy">
                            <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
                        <p className='text-darkGray'>{service.description}</p>
                        </div>
                        
                    </motion.div>
                ))}
            </motion.div>





        </div>
    )
}

export default Services