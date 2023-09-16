import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { FadeDirection, fadeIn } from '@/util/variants'

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  })

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex h-screen flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <motion.div
            variants={fadeIn(FadeDirection.right, 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="h-[640px] flex-1 bg-about bg-contain bg-top bg-no-repeat mix-blend-lighten"
          ></motion.div>
          <motion.div
            variants={fadeIn(FadeDirection.left, 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              I'm a Freelancer Frontend Developer with over five years of
              experience.
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              eaque porro voluptatem illo quam eos sint magni voluptas eum hic.
            </p>

            <div className="mb-12 flex gap-x-6 lg:gap-x-10">
              <div>
                <div className="text-gradient font-tertiary text-[40px] leading-[1.2]">
                  {inView && <CountUp start={0} end={13} duration={3} />}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of
                  <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-gradient font-tertiary text-[40px] leading-[1.2]">
                  {inView && <CountUp start={0} end={13} duration={3} />}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of
                  <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-gradient font-tertiary text-[40px] leading-[1.2]">
                  {inView && <CountUp start={0} end={12} duration={3} />}k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied
                  <br />
                  Clients
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-8">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
