import Avatar from '@/assets/avatar.svg'
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn, FadeDirection } from '@/util/variants'

export const Banner = () => {
  return (
    <section id="home" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn(FadeDirection.up, 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              BEN <span>AIDEN</span>
            </motion.h1>

            <motion.div
              variants={fadeIn(FadeDirection.up, 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="mb-6 font-secondary text-[36px] font-semibold uppercase leading-[1] lg:text-[60px]"
            >
              <span className="text-white">I am a</span>{' '}
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                  'Youtuber',
                  2000,
                ]}
                speed={50}
                wrapper="span"
                className="text-accent"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn(FadeDirection.up, 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="mx-auto mb-8 max-w-lg lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              saepe, molestiae voluptates repellendus nulla consectetur
              doloremque nobis quia beatae magnam.
            </motion.p>

            <motion.div
              variants={fadeIn(FadeDirection.up, 0.8)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="mx-auto mb-12 flex max-w-max items-center gap-x-6 lg:mx-0"
            >
              <button className="btn btn-lg">Contact me</button>

              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn(FadeDirection.up, 0.8)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="mx-auto flex max-w-max gap-x-6 text-[20px] lg:mx-0"
            >
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn(FadeDirection.down, 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="hidden max-w-[320px] flex-1 lg:flex lg:max-w-[482px]"
          >
            <img src={Avatar} alt="Avatar" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
