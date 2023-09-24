import { FadeDirection, fadeIn } from '@/util/variants'
import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <section id="contact" className="lg:section py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn(FadeDirection.right, 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="flex flex-1 items-center justify-start"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">Get in touch</h2>
              <h1 className="mb-12 text-[45px] leading-none lg:text-[90px]">
                Let's work
                <br />
                together
              </h1>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn(FadeDirection.left, 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="flex flex-1 flex-col items-start gap-y-6 rounded-xl border p-6"
            action=""
          >
            <input
              className="w-full border-b bg-transparent py-3 outline-none transition-all placeholder:text-white focus:border-accent"
              type="text"
              placeholder="Your name"
            />
            <input
              className="w-full border-b bg-transparent py-3 outline-none transition-all placeholder:text-white focus:border-accent"
              type="text"
              placeholder="Your email"
            />

            <textarea
              className="mb-12 w-full resize-none border-b bg-transparent py-3 outline-none transition-all placeholder:text-white focus:border-accent"
              cols={30}
              rows={10}
              placeholder="Your message"
            ></textarea>

            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
