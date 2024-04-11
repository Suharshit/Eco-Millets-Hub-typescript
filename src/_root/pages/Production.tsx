import Calculator from "@/components/elements/Calculator"
import InfoCard from "@/components/elements/InfoCard"

const Production = () => {
  return (
    <>
      <div className="h-screen">
        <h1 className="text-5xl font-bold mt-8 text-[#163020]">Calculate Carbon Footprint for all your Millets</h1>
        <Calculator/>
      </div>
      <div className="h-screen">
        <InfoCard/>
      </div>
    </>
  )
}

export default Production