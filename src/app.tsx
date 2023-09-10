import {
  About,
  Banner,
  Contact,
  Header,
  Nav,
  Services,
  Work,
} from '@/components'

export function App() {
  return (
    <div className="bg-site overflow-hidden bg-cover bg-no-repeat">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}
