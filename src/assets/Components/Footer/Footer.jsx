import React from 'react'
import { motion } from 'framer-motion'
import creditCards from './FooterBanner/credit-cards.webp'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

const navLinks = ['Home', 'About', 'Contact', 'Search Fruits']
const socialLinks = [
  { icon: <FaFacebookF />, label: 'Facebook', color: '#1877f2' },
  { icon: <FaTwitter />,   label: 'Twitter',  color: '#1da1f2' },
  { icon: <FaInstagram />, label: 'Instagram',color: '#e1306c' },
  { icon: <FaYoutube />,   label: 'YouTube',  color: '#ff0000' },
]

const Footer = () => {
  return (
    <footer className='bg-darkGray w-full overflow-hidden'>

      {/* ═══════════════════════════════════════
          MOBILE layout  (< md)  — stacked cards
      ═══════════════════════════════════════ */}
      <div className='md:hidden px-6 py-10 flex flex-col gap-8'>

        {/* Brand card */}
        <motion.div {...fadeUp(0)} className='flex flex-col gap-3'>
          <h3 className='text-primary text-xl font-extrabold tracking-widest uppercase'>
            Coders Café
          </h3>
          <p className='text-lightOrange/55 text-sm leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ea
            molestias, sint accusantium odio blanditiis.
          </p>
          <div className='flex flex-col gap-1 mt-1 text-lightOrange/60 text-sm'>
            <span className='flex items-center gap-2'><FaPhone className='text-primary text-xs'/> +1 (322) 555-7890</span>
            <span className='flex items-center gap-2'><FaEnvelope className='text-primary text-xs'/> hello@coderscafe.com</span>
          </div>
        </motion.div>

        {/* Divider */}
        <div className='h-[1px] bg-lightGray' />

        {/* Quick links + Follow Us in a 2-col grid */}
        <div className='grid grid-cols-2 gap-6'>
          <motion.div {...fadeUp(0.1)}>
            <h4 className='text-lightOrange text-sm font-semibold mb-3 uppercase tracking-wider'>Quick Links</h4>
            <ul className='space-y-2'>
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href='#'
                    className='text-lightOrange/55 text-sm hover:text-primary transition-colors duration-200 flex items-center gap-1 group'
                  >
                    <span className='w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-primary'>›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <h4 className='text-lightOrange text-sm font-semibold mb-3 uppercase tracking-wider'>Follow Us</h4>
            <div className='grid grid-cols-2 gap-2'>
              {socialLinks.map(({ icon, label, color }) => (
                <a
                  key={label}
                  href='#'
                  aria-label={label}
                  className='flex items-center justify-center w-9 h-9 rounded-full border border-lightGray text-lightOrange/70 hover:text-white hover:border-transparent transition-all duration-300'
                  style={{ '--hover-bg': color }}
                  onMouseEnter={e => e.currentTarget.style.background = color}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Credit cards */}
        <motion.div {...fadeUp(0.3)} className='flex flex-col items-center gap-3'>
          <img src={creditCards} alt='Accepted payment methods' className='h-8 object-contain opacity-60' />
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════
          TABLET layout  (md → lg)  — 2-col grid
      ═══════════════════════════════════════ */}
      <div className='hidden md:grid lg:hidden grid-cols-2 gap-0'>

        {/* Left column: brand + contact */}
        <motion.div {...fadeUp(0)} className='px-10 py-12 flex flex-col gap-5 border-r border-lightGray'>
          <h3 className='text-primary text-2xl font-extrabold tracking-widest uppercase'>
            Coders Café
          </h3>
          <p className='text-lightOrange/55 text-sm leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ea
            molestias, sint accusantium odio blanditiis deleniti.
          </p>
          <div className='flex flex-col gap-2 text-lightOrange/60 text-sm mt-1'>
            <span className='flex items-center gap-2'><FaPhone className='text-primary'/> +1 (322) 555-7890</span>
            <span className='flex items-center gap-2'><FaEnvelope className='text-primary'/> hello@coderscafe.com</span>
            <span className='flex items-center gap-2'><FaMapMarkerAlt className='text-primary'/> 123 Brew St, Coffee City</span>
          </div>
          <img src={creditCards} alt='Payment methods' className='h-7 object-contain opacity-60 mt-3 self-start' />
        </motion.div>

        {/* Right column: links + social stacked */}
        <div className='px-10 py-12 flex flex-col gap-8'>
          <motion.div {...fadeUp(0.1)}>
            <h4 className='text-lightOrange text-sm font-semibold mb-4 uppercase tracking-wider'>Quick Links</h4>
            <ul className='grid grid-cols-2 gap-y-2 gap-x-4'>
              {navLinks.map((link) => (
                <li key={link}>
                  <a href='#' className='text-lightOrange/55 text-sm hover:text-primary transition-colors duration-200 group flex items-center gap-1'>
                    <span className='w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-primary text-base'>›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <h4 className='text-lightOrange text-sm font-semibold mb-4 uppercase tracking-wider'>Follow Us</h4>
            <div className='flex gap-3'>
              {socialLinks.map(({ icon, label, color }) => (
                <a
                  key={label}
                  href='#'
                  aria-label={label}
                  className='flex items-center justify-center w-10 h-10 rounded-full border border-lightGray text-lightOrange/70 hover:text-white transition-all duration-300'
                  onMouseEnter={e => e.currentTarget.style.background = color}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          DESKTOP layout (lg+)  — 3-col grid
      ═══════════════════════════════════════ */}
      <div className='hidden lg:grid grid-cols-3 gap-0 border-b border-lightGray relative overflow-hidden'>
        {/* decorative top accent line */}
        <div className='absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent' />

        {/* Col 1: Brand */}
        <motion.div {...fadeUp(0)} className='px-12 py-14 flex flex-col gap-5 border-r border-lightGray'>
          <h3 className='text-primary text-2xl font-extrabold tracking-widest uppercase flex items-center gap-2'>
            <span className='text-lightOrange'>☕</span> Coders Café
          </h3>
          <p className='text-lightOrange/55 text-sm leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ea
            molestias, sint accusantium odio blanditiis deleniti ad ipsa
            quidem.
          </p>
          <div className='flex flex-col gap-2 text-lightOrange/60 text-sm'>
            <span className='flex items-center gap-2'><FaPhone className='text-primary'/> +1 (322) 555-7890</span>
            <span className='flex items-center gap-2'><FaEnvelope className='text-primary'/> hello@coderscafe.com</span>
            <span className='flex items-center gap-2'><FaMapMarkerAlt className='text-primary'/> 123 Brew St, Coffee City</span>
          </div>
        </motion.div>

        {/* Col 2: Quick Links */}
        <motion.div {...fadeUp(0.1)} className='px-12 py-14 flex flex-col gap-5 border-r border-lightGray'>
          <h4 className='text-lightOrange text-sm font-semibold uppercase tracking-[0.2em]'>Quick Links</h4>
          {/* accent underline */}
          <div className='w-10 h-[2px] bg-primary -mt-3' />
          <ul className='space-y-3'>
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href='#'
                  className='text-lightOrange/55 text-sm hover:text-primary transition-colors duration-200 group flex items-center gap-2'
                >
                  <span className='w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-primary text-base leading-none'>›</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Col 3: Follow Us + credit cards */}
        <motion.div {...fadeUp(0.2)} className='px-12 py-14 flex flex-col gap-5'>
          <h4 className='text-lightOrange text-sm font-semibold uppercase tracking-[0.2em]'>Follow Us</h4>
          <div className='w-10 h-[2px] bg-primary -mt-3' />

          <div className='flex gap-3 flex-wrap'>
            {socialLinks.map(({ icon, label, color }) => (
              <motion.a
                key={label}
                href='#'
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='flex items-center justify-center w-11 h-11 rounded-full border border-lightGray text-lightOrange/70 hover:text-white transition-colors duration-300 cursor-pointer'
                onMouseEnter={e => {
                  e.currentTarget.style.background = color
                  e.currentTarget.style.borderColor = color
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = ''
                }}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          <div className='mt-4'>
            <p className='text-lightOrange/40 text-xs mb-2 uppercase tracking-wider'>We Accept</p>
            <img src={creditCards} alt='Accepted payment methods' className='h-8 object-contain opacity-70' />
          </div>
        </motion.div>
      </div>

      {/* ─── Copyright bar — ALL breakpoints ─── */}
      <div className='bg-lightGray/40 px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2'>
        <motion.p
          {...fadeUp(0.3)}
          className='text-lightOrange/40 text-xs text-center md:text-left'
        >
          © {new Date().getFullYear()} Company Name. All Rights Reserved.
        </motion.p>
        <motion.p
          {...fadeUp(0.35)}
          className='text-lightOrange/30 text-xs'
        >
          Designed with ☕ &amp; ❤️
        </motion.p>
      </div>

    </footer>
  )
}

export default Footer