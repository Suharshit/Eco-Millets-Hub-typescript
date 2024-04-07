import { useState } from "react"
import { Button } from "../ui/button"

const Calculate = () => {
    const [text,setText] = useState("");
    const [Result,setResult] = useState("");
    const handleInput = (e) => setText(e.Target.value)

    const handleResult = (e) => {
        if (e.Target.id=="jowar"){
            setResult(eval(text+"*0.5"))
        }
    }

  return (
    <>
        <div className="bg-[#163020] h-[390px] w-[400px] p-5 rounded my-5 text-[#EEF0E5]">
            <label htmlFor="quantity"> Quantity (In kg): </label>
            <input type="text" className="rounded h-8 text-[#304D30] px-1" value={text} onChange={handleInput}/>
            <div className="mx-5 my-5 space-y-5">
                <div className="space-x-5">
                    <Button variant="secondary" onClick={handleResult} id="jowar">Jowar</Button>
                    <Button variant="secondary">Bajra</Button>
                    <Button variant="secondary">Ragi</Button>
                </div>
                <div className="space-x-3">
                    <Button variant="secondary">Chena</Button>
                    <Button variant="secondary">Kakum</Button>
                    <Button variant="secondary">Korle</Button>
                </div>
                <div className="space-x-5">
                    <Button variant="secondary">Maraiyo</Button>
                    <Button variant="secondary">Kuttu</Button>
                    <Button variant="secondary">Rajgira</Button>
                </div>
                <div className="space-x-5">
                    <Button variant="secondary">Sanwa</Button>
                    <Button variant="secondary">Kodo</Button>
                </div>
            </div>
            <div className="w-[350px] flex justify-center mt-8">
                <Button variant="secondary" className="w-[200px]">Calculate</Button>
            </div>
        </div>
        <div>
            <h1>Result: </h1>
            <h2>{Result}</h2>
        </div>
    </>
  )
}

export default Calculate