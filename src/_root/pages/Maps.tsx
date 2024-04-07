import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, } from "react-chartjs-2";
import ChartData from "../../Data/ChartData.json";
import StateProduction from "@/components/pageComp/StateProduction";

ChartJS.register(ArcElement, Tooltip, Legend);

const Maps = () => {
  return (
    <>
      <div>
        <h1 className="text-[#163020] text-5xl font-bold pt-8">Millets Production 2019-24</h1> 
      </div>
      <div className="flex items-center gap-x-60 py-10">
        <div>
          <img src="/dist/assets/maps/indian-map-millets-production.png" alt="" className="h-[40rem]"/>
        </div>
        <div className="h-[450px] w-[400px] py-10">
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
      <div>
        <StateProduction/>
      </div>
      <div className="bg-[#163020] w-fit px-10 py-5 text-[#EEF0E5] rounded mt-10 mb-10">
        <h2 className="text-lg">State Wise Total Millets Production: </h2>
        <a href="/public/assets/pdf/Statewise_Millet_Production.pdf" className="hover:text-[#FF9800]">👉 State wise production Last five years 👈</a>
      </div>
    </>
  )
}

export default Maps