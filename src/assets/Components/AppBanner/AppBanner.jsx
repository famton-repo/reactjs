import React from 'react'
import { motion } from 'framer-motion'
import appBanner from '../../background-images/coffee-cover.jpg'
import appleStore from '../../AppBannerIcons/app_store.png'
import googlePlay from '../../AppBannerIcons/play_store.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const AppBanner = () => {
  return (
    <section className='w-full overflow-hidden'>

      {/* ── MOBILE layout (< md) ── */}
      <div className='md:hidden flex flex-col'>
        {/* Image fills full width */}
        <div className='relative w-full h-[260px] overflow-hidden'>
          <motion.img
            {...fadeUp(0)}
            src={appBanner}
            alt='Download our coffee app'
            className='w-full h-full object-cover object-center'
          />
          {/* dark gradient overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-darkGray/90 via-darkGray/30 to-transparent' />
        </div>

        {/* Text + buttons below image */}
        <div className='bg-darkGray px-6 py-10 flex flex-col items-center text-center gap-6'>
          <motion.span
            {...fadeUp(0.1)}
            className='text-primary text-xs font-semibold tracking-[0.2em] uppercase'
          >
            Mobile Application
          </motion.span>

          <motion.h2
            {...fadeUp(0.2)}
            className='text-lightOrange text-3xl font-bold leading-tight'
          >
            Download <br />
            <span className='text-primary'>the App</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.3)}
            className='text-lightOrange/60 text-sm leading-relaxed max-w-xs'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            magnam iusto, nam accusantium adit.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className='flex flex-col gap-3 w-full max-w-[220px]'
          >
            <a href='#' className='group'>
              <img
                src={googlePlay}
                alt='Get it on Google Play'
                className='w-full h-auto transition-transform duration-300 group-hover:scale-105'
              />
            </a>
            <a href='#' className='group'>
              <img
                src={appleStore}
                alt='Download on the App Store'
                className='w-full h-auto transition-transform duration-300 group-hover:scale-105'
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── TABLET layout (md → lg) ── */}
      <div className='hidden md:flex lg:hidden relative min-h-[380px] overflow-hidden'>
        {/* Left: image taking 55% */}
        <motion.div
          {...fadeLeft(0)}
          className='w-[55%] relative'
        >
          <img
            src={appBanner}
            alt='Download our coffee app'
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-transparent to-darkGray' />
        </motion.div>

        {/* Right: dark bg with content */}
        <div className='w-[45%] bg-darkGray flex flex-col justify-center px-8 py-10 gap-5'>
          <motion.span
            {...fadeRight(0.1)}
            className='text-primary text-xs font-semibold tracking-[0.2em] uppercase'
          >
            Mobile Application
          </motion.span>

          <motion.h2
            {...fadeRight(0.2)}
            className='text-lightOrange text-3xl font-bold leading-snug'
          >
            Download <br />
            <span className='text-primary'>the App</span>
          </motion.h2>

          <motion.p
            {...fadeRight(0.3)}
            className='text-lightOrange/60 text-sm leading-relaxed'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            magnam iusto, nam accusantium.
          </motion.p>

          <motion.div
            {...fadeRight(0.4)}
            className='flex flex-col gap-3 max-w-[200px]'
          >
            <a href='#' className='group'>
              <img
                src={googlePlay}
                alt='Get it on Google Play'
                className='w-full h-auto transition-transform duration-300 group-hover:scale-105'
              />
            </a>
            <a href='#' className='group'>
              <img
                src={appleStore}
                alt='Download on the App Store'
                className='w-full h-auto transition-transform duration-300 group-hover:scale-105'
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── DESKTOP layout (lg+) ── */}
      <div className='hidden lg:grid grid-cols-2 min-h-[480px] overflow-hidden'>

        {/* Left panel: image with layered overlays */}
        <motion.div
          {...fadeLeft(0)}
          className='relative overflow-hidden'
        >
          <img
            src={appBanner}
            alt='Download our coffee app'
            className='w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-[1.5s] ease-out'
          />
          {/* gradient bleed into right panel */}
          <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-darkGray/80' />

          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='absolute bottom-8 left-8 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg'
          >
            ☕ Premium Coffee Experience
          </motion.div>
        </motion.div>

        {/* Right panel: dark content */}
        <div className='bg-darkGray flex flex-col justify-center px-16 py-14 gap-6 relative overflow-hidden'>
          {/* decorative circle */}
          <div className='absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full border-[40px] border-primary/10' />
          <div className='absolute -bottom-16 -left-16 w-[200px] h-[200px] rounded-full border-[30px] border-primary/5' />

          <motion.span
            {...fadeRight(0.1)}
            className='text-primary text-xs font-semibold tracking-[0.25em] uppercase'
          >
            Mobile Application
          </motion.span>

          <motion.h2
            {...fadeRight(0.2)}
            className='text-lightOrange text-5xl font-extrabold leading-tight'
          >
            Download <br />
            <span className='text-primary'>the App</span>
          </motion.h2>

          <motion.p
            {...fadeRight(0.3)}
            className='text-lightOrange/55 text-sm leading-loose max-w-sm'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            magnam iusto, nam accusantium adit quam commodi pariatur voluptatum
            blanditiis tenetur.
          </motion.p>

          {/* divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className='origin-left h-[1px] w-16 bg-primary'
          />

          <motion.div
            {...fadeRight(0.45)}
            className='flex gap-4 items-center'
          >
            <a href='#' className='group'>
              <img
                src={googlePlay}
                alt='Get it on Google Play'
                className='h-12 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.5)]'
              />
            </a>
            <a href='#' className='group'>
              <img
                src={appleStore}
                alt='Download on the App Store'
                className='h-12 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.5)]'
              />
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default AppBanner