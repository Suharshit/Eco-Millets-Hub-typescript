import { Link } from "react-router-dom"
import Benefits from "../../components/elements/Benefits"
import ProductionVideo from "@/components/elements/ProductionVideo"
import Footer from "@/components/elements/Footer"

const Home = () => {
  return (
    <>
      <div className="snap-y snap-mandatory">
        <section className="h-screen snap-normal snap-center">
          <div className="bg-[url('/public/assets/homepage/website-bg.png')] bg-no-repeat bg-cover h-[600px] rounded-lg">
            <div className="items-center px-6 mt-3">
              <div className="w-1/2 pt-5">
                <h1 className="text-8xl font-bold font-poppins mt-[20px] text-[#EEF0E5]">Measure your millet munching!</h1>
                <h2 className="text-5xl font-semibold text-[#EEF0E5] mt-[30px] mb-8">Calculate your carbon footprint for millets with our new tool.
                </h2>
                <Link to="/production" className="px-8 py-3 rounded-lg bg-[#EEF0E5]">Calculator</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="h-screen snap-normal snap-center">
          <Benefits/>
        </section>
        <section className="h-auto snap-normal snap-center">
          <ProductionVideo/>
        </section>
        <section className="h-[250px] mt-24 bg-[#163020] text-[#EEF0E5] rounded-xl mb-2 px-4 py-2">
          <Footer/>
        </section>
      </div>
    </>
  )
}

export default Home