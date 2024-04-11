import { useState } from "react"
import { Doughnut } from "react-chartjs-2";
import { Option } from 'react-select';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from "chart.js"

ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const DropdownMenu = () => {
    const [ selected, setSelected ] = useState<string>("yes");
    const [ dounutdata, setDounutdata ] = useState<number[]>([0,0,0,0,0]);
    const [ jowardata, setJowardata ] = useState<number[]>([0,0,0,0,0]);
    const [ bajradata, setBajradata ] = useState<number[]>([0,0,0,0,0]);
    const [ ragidata, setRagidata ] = useState<number[]>([0,0,0,0,0]);
    const [ smallmilletdata, setSmallmilletdata ] = useState<number[]>([0,0,0,0,0]);


    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if(event.target.value as Option['id'] == 'Select any State'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([])
            setJowardata([])
            setBajradata([])
            setRagidata([])
            setSmallmilletdata([])
        } else if(event.target.value as Option['id'] == 'Rajasthan'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([51.47,51.56,42.80,56.74,48.09])
            setJowardata([4.56,5.90,5.36,5.67,5.27])
            setBajradata([46.86,45.61,37.40,51.05,42.81])
            setRagidata([0.00,0.00,0.00,0.00,0.00])
            setSmallmilletdata([0.05,0.04,0.04,0.01,0.03])
        } else if(event.target.value as Option['id'] == 'Uttar Pardesh'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([21.72,22.98,22.26,23.69,26.98])
            setJowardata([2.27,2.75,2.70,3.15,4.62])
            setBajradata([19.39,20.14,19.51,20.46,21.95])
            setRagidata([0.00,0.00,0.00,0.00,0.00])
            setSmallmilletdata([0.06,0.09,0.05,0.08,0.41])
        } else if(event.target.value as Option['id'] == 'Karnataka'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([25.69,25.69,20.54,20.33,17.49])
            setJowardata([9.87,9.04,7.31,6.82,7.06])
            setBajradata([3.67,2.76,1.71,1.77,1.56])
            setRagidata([11.64,13.70,11.27,11.48,8.65])
            setSmallmilletdata([0.37,0.20,0.24,0.25,0.23])
        } else if(event.target.value as Option['id'] == 'Maharashtra'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([24.29,25.14,23.05,18.99,17.15])
            setJowardata([18.08,17.47,15.58,13.12,14.04])
            setBajradata([5.12,6.57,6.19,4.68,2.01])
            setRagidata([0.87,0.94,1.03,0.91,0.88])
            setSmallmilletdata([0.22,0.17,0.26,0.27,0.22])
        } else if(event.target.value as Option['id'] == 'Madhya Pradesh'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([8.96,10.24,11.81,12.54,12.68])
            setJowardata([1.65,2.17,2.36,1.69,1.63])
            setBajradata([6.57,7.38,8.69,9.43,9.58])
            setRagidata([0.00,0.00,0.00,0.00,0.00])
            setSmallmilletdata([0.00,0.00,0.00,0.00,0.00])
        } else if(event.target.value as Option['id'] == 'Haryana'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([10.35,13.67,11.32,12.14,11.94])
            setJowardata([0.16,0.16,0.12,0.14,0.25])
            setBajradata([10.19,13.50,11.20,12.00,11.69])
            setRagidata([0.00,0.00,0.00,0.00,0.00])
            setSmallmilletdata([0.00,0.00,0.00,0.00,0.00])
        } else if(event.target.value as Option['id'] == 'Tamil Nadu'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([10.17,9.05,7.65,6.30,6.23])
            setJowardata([5.20,4.27,3.62,2.93,2.82])
            setBajradata([1.85,1.59,1.46,1.13,1.19])
            setRagidata([2.75,2.89,2.27,2.07,1.89])
            setSmallmilletdata([0.37,0.31,0.30,0.18,0.33])
        } else if(event.target.value as Option['id'] == 'Gujarat'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([9.90,10.92,11.79,13.64,4.51])
            setJowardata([0.67,0.57,0.58,0.46,0.56])
            setBajradata([9.13,10.90,10.90,12.94,3.63])
            setRagidata([0.10,0.13,0.09,0.08,0.08])
            setSmallmilletdata([0.00,0.13,0.23,0.16,0.24])
        } else if(event.target.value as Option['id'] == 'Andhra Pradesh'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([5.14,5.41,3.59,3.76,3.90])
            setJowardata([3.89,4.11,2.60,2.84,2.93])
            setBajradata([0.58,0.71,0.55,0.51,0.54])
            setRagidata([0.45,0.40,0.31,0.32,0.33])
            setSmallmilletdata([0.22,0.19,0.13,0.09,0.10])
        } else if(event.target.value as Option['id'] == 'Uttarakhand'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([1.91,2.01,2.00,1.76,1.61])
            setJowardata([0.00,0.00,0.00,0.00,0.00])
            setBajradata([0.00,0.00,0.00,0.00,0.00])
            setRagidata([1.20,1.30,1.27,1.14,1.01])
            setSmallmilletdata([0.71,0.71,0.73,0.62,0.60])
        } else if(event.target.value as Option['id'] == 'Telangana'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([1.39,1.66,1.23,1.32,1.15])
            setJowardata([1.24,1.56,1.17,1.20,1.04])
            setBajradata([0.00,0.09,0.04,0.19,0.09])
            setRagidata([])
            setSmallmilletdata([0.00,0.00,0.00,0.00,0.00])
        } else if(event.target.value as Option['id'] == 'Odisha'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([0.48,0.55,0.68,0.76,0.72])
            setJowardata([0.04,0.03,0.04,0.06,0.05])
            setBajradata([0.10,0.09,0.04,0.12,0.11])
            setRagidata([0.56,0.90,0.40,0.34,0.02])
            setSmallmilletdata([0.17,0.18,0.20,0.32,0.27])
        } else if(event.target.value as Option['id'] == 'Jharkhand'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([0.14,0.18,0.18,0.14,0.30])
            setJowardata([0.01,0.01,0.01,0.01,0.01])
            setBajradata([0.00,0.00,0.00,0.00,0.00])
            setRagidata([0.00,0.00,0.00,0.00,0.00])
            setSmallmilletdata([0.00,0.00,0.00,0.00,0.00])
        } else if(event.target.value as Option['id'] == 'Chhattisgarh'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([45.7,78.90])
            setJowardata([0.04,0.03,0.01,0.01,0.01])
            setBajradata([0.00,0.00,0.00,0.00,0.00])
            setRagidata([0.00,0.00,0.00,0.00,0.00])
            setSmallmilletdata([0.19,0.22,0.26,0.22,0.19])
        } else if(event.target.value as Option['id'] == 'Bihar'){
            setSelected(event.target.value as Option['id'])
            setDounutdata([45.7,78.90])
            setJowardata([0.01,0.01,0.02,0.01,0.01])
            setBajradata([0.04,0.05,0.03,0.03,0.05])
            setRagidata([0.00,0.00,0.00,0.00,0.00])
            setSmallmilletdata([0.02,0.03,0.04,0.07,0.01])
        }
    }; 


  return (
    <>
        <div className="">
            <section>
                <div className="flex">
                    <h2 className="pr-5 text-xl font-semibold">select state: </h2>
                    <select name="StateProduction" value={selected} onChange={handleChange} className="h-8 p-1 border-2 border-[#163020] rounded-lg w-[200px]">
                        <option id="select a state">Select any State</option>
                        <option id="rajasthan">Rajasthan</option>
                        <option id="uttarpardesh">Uttar Pardesh</option>
                        <option id="karnatka">Karnataka</option>
                        <option id="karnatka">Maharashtra</option>
                        <option id="karnatka">Madhya Pradesh</option>
                        <option id="karnatka">Haryana</option>
                        <option id="karnatka">Tamil Nadu</option>
                        <option id="karnatka">Gujarat</option>
                        <option id="karnatka">Andhra Pradesh</option>
                        <option id="karnatka">Uttarakhand</option>
                        <option id="karnatka">Telangana</option>
                        <option id="karnatka">Odisha</option>
                        <option id="karnatka">Jharkhand</option>
                        <option id="karnatka">Chhattisgarh</option>
                        <option id="karnatka">Bihar</option>
                    </select>
                </div>
            </section>
            <section className="flex justify-between mt-5 pb-8">
                <div className="h-[470px] w-[500px]">
                    <h2 className="text-xl font-semibold text-center">Total Millets Production of {selected}</h2>
                    <h2 className="text-center font-semibold">Total Millets production from 2019-24</h2>
                    <Doughnut data={{
                        labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                        datasets: [
                            {
                            label: "count",
                            data: dounutdata,
                            borderRadius: 5,
                            backgroundColor: [
                                "rgb(217, 237, 191)",
                                "rgb(255, 152, 0)",
                                "rgb(44, 120, 101)",
                                "rgb(144, 210, 109)",
                                "rgba(220,220,220,220)",
                            ],
                            },
                        ],
                        }}/>
                </div>
                <div className="h-[470px] w-[650px] flex justify-center mt-8">
                    <div className="h-[650px] w-[700px] space-y-5">
                        <h2 className="text-xl font-semibold text-center">Mostly Grown Millets in {selected}</h2>
                        <Line data={{
                            labels: ["2019-20","2020-21","2021-22","2022-23","2023-24"],
                            datasets: [
                                {
                                    label: "Jowar",
                                    data: jowardata,
                                    fill: true,
                                    backgroundColor: "rgba(75,192,192,0.2)",
                                    borderColor: "#90D26D"
                                },
                                {
                                    label: "Bajra",
                                    data: bajradata,
                                    fill: false,
                                    borderColor: "#D9EDBF"
                                },
                                {
                                    label: "Ragi",
                                    data: ragidata,
                                    fill: false,
                                    borderColor: "#FF9800"
                                },
                                {
                                    label: "Small Millets",
                                    data: smallmilletdata,
                                    fill: false,
                                    borderColor: "#2C7865"
                                },
                            ],
                        }}/>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default DropdownMenu