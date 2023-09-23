import { motion } from 'framer-motion'

import PortfolioImageOne from '@/assets/portfolio-img1.png'
import PortfolioImageTwo from '@/assets/portfolio-img2.png'
import PortfolioImageThree from '@/assets/portfolio-img3.png'
import { FadeDirection, fadeIn } from '@/util/variants'

export const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-10 lg:flex-row">
          <motion.div
            variants={fadeIn(FadeDirection.right, 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="mb-10 flex flex-1 flex-col gap-y-12 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest
                <br />
                Work
              </h2>

              <p className="mb-16 max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate quia provident omnis recusandae nisi ea dicta
                similique alias nulla nam.
              </p>

              <button className="btn btn-sm">View all Projects</button>
            </div>

            <div className="group relative overflow-hidden rounded-xl border-2 border-white/50">
              <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>

              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={PortfolioImageOne}
                alt="Portfolio Example One"
              />
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
                <span className="text-3xl text-white">Project Portfolio</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn(FadeDirection.left, 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="flex flex-1 flex-col gap-y-10"
          >
            <div className="group relative overflow-hidden rounded-xl border-2 border-white/50">
              <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>

              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={PortfolioImageTwo}
                alt="Portfolio Example One"
              />
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
                <span className="text-3xl text-white">Project Portfolio</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border-2 border-white/50">
              <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>

              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={PortfolioImageThree}
                alt="Portfolio Example One"
              />
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
                <span className="text-3xl text-white">Project Portfolio</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
