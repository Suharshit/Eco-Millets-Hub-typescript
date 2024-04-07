import { Button } from "@/components/ui/button"
import { useState } from "react"
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow } from "@/components/ui/table"

const Calculator = () => {
    const [text,setText] = useState<string>();
    const [Jowar,setJowar] = useState<string>('0');
    const [Ragi,setRagi] = useState<string>('0');
    const [Chena,setChena] = useState<string>('0');
    const [Kakum,setKakum] = useState<string>('0');
    const [Korle,setKorle] = useState<string>('0');
    const [Maraiyo,setMaraiyo] = useState<string>('0');
    const [Kuttu,setKuttu] = useState<string>('0');
    const [Rajgira,setRajgira] = useState<string>('0');
    const [Sanwa,setSanwa] = useState<string>('0');
    const [Kodo,setKodo] = useState<string>('0');
    const [Other,setOther] = useState<string>('0');
    const [Bajra,setBajra] = useState<string>('0');
    const [total,setTotal] = useState<string>('0');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)

    const handleResult = (e: React.MouseEvent<HTMLButtonElement>) => {
        // setResult(eval(text+"*0.5").toString())
        if (e.currentTarget.id=="jowar"){
            setJowar(eval(text+"*0.25").toFixed(2))
        }
        else if(e.currentTarget.id=="Bajra"){
            setBajra(eval(text+"*0.6").toFixed(2))
        }
        else if(e.currentTarget.id=="Ragi"){
            setRagi(eval(text+"*0.67").toFixed(2))
        }
        else if(e.currentTarget.id=="Chena"){
            setChena(eval(text+"*0.8").toFixed(2))
        }
        else if(e.currentTarget.id=="Kakum"){
            setKakum(eval(text+"*0.18").toFixed(2))
        }
        else if(e.currentTarget.id=="Korle"){
            setKorle(eval(text+"*0.58").toFixed(2))
        }
        else if(e.currentTarget.id=="Maraiyo"){
            setMaraiyo(eval(text+"*1.2").toFixed(2))
        }
        else if(e.currentTarget.id=="Kuttu"){
            setKuttu(eval(text+"*0.36").toFixed(2))
        }
        else if(e.currentTarget.id=="Rajgira"){
            setRajgira(eval(text+"*0.14").toFixed(2))
        }
        else if(e.currentTarget.id=="Sanwa"){
            setSanwa(eval(text+"*0.2").toFixed(2))
        }
        else if(e.currentTarget.id=="Kodo"){
            setKodo(eval(text+"*0.68").toFixed(2))
        }
        else if(e.currentTarget.id=="Other"){
            setOther(eval(text+"*0.5").toString())
        }
    }

    const TotalResult = () => {
        const newtotal = (Number(Bajra)+Number(Jowar)+Number(Ragi)+Number(Chena)+Number(Kakum)+Number(Korle)+Number(Maraiyo)+Number(Kuttu)+Number(Rajgira)+Number(Sanwa)+Number(Kodo))
        setTotal(String(newtotal.toFixed(2)))
    }

    const clearinput = () => {
        setText(" ")
        setBajra("0")
        setRagi("0")
        setJowar("0")
        setKakum("0")
        setKodo("0")
        setKorle("0")
        setKuttu("0")
        setRajgira("0")
        setMaraiyo("0")
        setSanwa("0")
        setChena("0")
        setOther("0")
        setTotal("0")
    }

  return (
    <>
        <div className="flex gap-x-16 mt-10">
            <div className="bg-[#163020] h-[390px] w-[400px] p-5 rounded my-5 text-[#EEF0E5]">
                <label htmlFor="quantity"> Quantity (In kg): </label>
                <input type="text" className="rounded h-8 w-[220px] text-[#304D30] px-1" value={text} onChange={handleInput}/>
                <div className="mx-3 my-5 space-y-5 mt-8">
                    <div className="space-x-3">
                        <Button variant="secondary" onClick={handleResult} id="jowar" className="w-[100px]">Jowar</Button>
                        <Button variant="secondary" onClick={handleResult} id="Bajra" className="w-[100px]">Bajra</Button>
                        <Button variant="secondary" onClick={handleResult} id="Ragi" className="w-[100px]">Ragi</Button>
                    </div>
                    <div className="space-x-3">
                        <Button variant="secondary" onClick={handleResult} id="Chena" className="w-[100px]">Chena</Button>
                        <Button variant="secondary" onClick={handleResult} id="Kakum" className="w-[100px]">Kakum</Button>
                        <Button variant="secondary" onClick={handleResult} id="Korle" className="w-[100px]">Korle</Button>
                    </div>
                    <div className="space-x-3">
                        <Button variant="secondary" onClick={handleResult} id="Maraiyo" className="w-[100px]">Maraiyo</Button>
                        <Button variant="secondary" onClick={handleResult} id="Kuttu" className="w-[100px]">Kuttu</Button>
                        <Button variant="secondary" onClick={handleResult} id="Rajgira" className="w-[100px]">Rajgira</Button>
                    </div>
                    <div className="space-x-3">
                        <Button variant="secondary" onClick={handleResult} id="Sanwa" className="w-[100px]">Sanwa</Button>
                        <Button variant="secondary" onClick={handleResult} id="Kodo" className="w-[100px]">Kodo</Button>
                        <Button variant="secondary" onClick={handleResult} id="Other" className="w-[100px]">Other</Button>
                    </div>
                </div>
                <div className="w-[280px] flex mx-6 mt-8 gap-5">
                    <Button variant="secondary" className="w-[200px]" onClick={TotalResult}>Total</Button>
                    <Button variant="secondary" className="w-[200px]" onClick={clearinput}>Clear</Button>
                </div>
            </div>
            <div className="mt-5 text-lg font-bold flex">

                <Table className="w-[300px]">
                    {/* <TableCaption>Carbon Emission from production of Millets (In kg CO₂e/kg)</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Millets</TableHead>
                            <TableHead>Carbon Emission</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Jowar</TableCell>
                            <TableCell>{Jowar} kg CO₂e</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Bajra</TableCell>
                            <TableCell>{Bajra} kg CO₂e</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Ragi</TableCell>
                            <TableCell>{Ragi} kg CO₂e</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Chena</TableCell>
                            <TableCell>{Chena} kg CO₂e</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Kakum</TableCell>
                            <TableCell>{Kakum} kg CO₂e</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Korle</TableCell>
                            <TableCell>{Korle} kg CO₂e</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-large text-lg">Total</TableCell>
                            <TableCell className="font-large text-lg">{total} kg CO₂e</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table className="w-[300px]">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Millets</TableHead>
                            <TableHead>Carbon Emission</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Maraiyo</TableCell>
                            <TableCell>{Maraiyo} kg CO₂e</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Kuttu</TableCell>
                            <TableCell>{Kuttu} kg CO₂e</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Rajgira</TableCell>
                            <TableCell>{Rajgira} kg CO₂e</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Sanwa</TableCell>
                            <TableCell>{Sanwa} kg CO₂e</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Kodo</TableCell>
                            <TableCell>{Kodo} kg CO₂e</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">Other</TableCell>
                            <TableCell>{Other} kg CO₂e</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
    </>
  )
}

export default Calculator