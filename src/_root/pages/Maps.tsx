import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, } from "react-chartjs-2";
import ChartData from "../../Data/ChartData.json";
// import StateProduction from "@/components/pageComp/StateProduction";
import DropdownMenu from "@/components/elements/DropdownMenu";


ChartJS.register(ArcElement, Tooltip, Legend);

const Maps = () => {
  return (
    <>
      <section className="h-full">
        <div>
          <h1 className="text-[#163020] text-5xl font-bold pt-3">Millets Production in India</h1> 
        </div>
        <div className="flex gap-x-60 py-5">
          <div>
            <img src="/dist/assets/maps/indian-map-millets-production.png" alt="" className="h-[40rem]"/>
          </div>
          <div className="h-[500px] w-[420px]">
            <p className="text-2xl mb-8 font-semibold">India is the world's largest producer of millets, contributing around<h2 className="text-[#FF9800] font-bold text-4xl">38%</h2> of global production.</p>
            <Doughnut data={{
              labels: ChartData.map((data) => data.label),
              datasets: [
                {
                  label: "count",
                  data: ChartData.map((data) => data.value),
                  borderRadius: 5,
                  backgroundColor: [
                    "rgba(92,138,66,255)",
                    "rgba(215,255,194,255)",
                    "rgba(162,185,102,255)",
                    "rgba(220,220,220,220)",
                  ],
                },
              ],
            }}/>
          </div>
        </div>
      </section>
      <section className="h-full">
        <div>
          <h2 className="text-[#163020] text-5xl font-bold pt-8">Check Millets Production For Every state</h2>
          <div className="pt-10 px-8 h-">
            <DropdownMenu/>
          </div>
        </div>
        <div className="bg-[#163020] w-fit px-10 py-5 text-[#EEF0E5] rounded mt-10 mb-10">
          <h2 className="text-lg">State Wise Total Millets Production: </h2>
          <a href="/public/assets/pdf/Statewise_Millet_Production.pdf" className="hover:text-[#FF9800]">👉 State wise production Last five years 👈</a>
        </div>
      </section>
    </>
  )
}

export default Maps