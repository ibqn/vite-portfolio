import { ReactNode } from 'react'

type Service = {
  name: string
  description: ReactNode
  link: string
}

const services: Service[] = [
  {
    name: 'UI/UX Design',
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet
        recusandae voluptates temporibus magnam, velit quam repellendus earum?
        A, quod?'
      </>
    ),
    link: 'Learn more',
  },
  {
    name: 'Development',
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet
        recusandae voluptates temporibus magnam, velit quam repellendus earum?
        A, quod?'
      </>
    ),
    link: 'Learn more',
  },
  {
    name: 'Digital Marketing',
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet
        recusandae voluptates temporibus magnam, velit quam repellendus earum?
        A, quod?'
      </>
    ),
    link: 'Learn more',
  },
  {
    name: 'Product Branding',
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet
        recusandae voluptates temporibus magnam, velit quam repellendus earum?
        A, quod?'
      </>
    ),
    link: 'Learn more',
  },
]

export const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-12 flex-1 bg-no-repeat mix-blend-lighten lg:mb-0 lg:bg-services lg:bg-bottom">
            <h2 className="h2 mb-6 text-accent">Services I offer</h2>
            <h3 className="h3 mx-w-[455px] mb-16">
              I'm a Freelance Frontend Developer with more than five years of
              experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </div>

          <div>
            <div>
              {services.map((service, index) => {
                return <div key={index}></div>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
