import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"


const InfoCard = () => {
  return (
    <>
        <div className="w-auto mx-5 my-3">
            <div>
                <h1 className="text-4xl mb-14 pt-10 font-bold text-[#163020]">Different types of Millets.</h1>
            </div>
            <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                    {/* item 1 */}
                    <CarouselItem className="pl-1 basis-1/3 ">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex justify-center border-2 pt-4 border-zinc-800 rounded-lg">
                                <div className="space-y-2">
                                    <div>
                                        <img src="/public/assets/millets/sogrum-millets(jowar).jpg" alt="bajra" className="h-[350px] rounded-lg w-[405px]"/>
                                        <h1 className="text-xl pl-[80px] font-bold">Sorghum Millet (Jowar)</h1>
                                    </div>
                                    <div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Nutrients: </h2>
                                            <p>Protein, Fiber, Iron, Magnesium</p>
                                            <Separator />
                                        </div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Potential Benefits: </h2>
                                            <p>May aid digestion, regular blood, sugar, support, bone health, aid digestion</p>
                                            <Separator />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>

                    {/* item 2 */}
                    <CarouselItem className="pl-1 basis-1/3 ">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex justify-center border-2 pt-4 border-zinc-800 rounded-lg">
                                <div className="space-y-2">
                                    <div>
                                        <img src="/public/assets/millets/Pearl-millet(Bajra).jpg" alt="bajra" className="h-[350px] rounded-lg w-[405px]"/>
                                        <h1 className="text-xl pl-[105px] font-bold">Pearl Millet (Bajra)</h1>
                                    </div>
                                    <div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Nutrients: </h2>
                                            <p>Protein, Fiber, Iron, calcium</p>
                                            <Separator />
                                        </div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Potential Benefits: </h2>
                                            <p>May improve heart health, support, bone health, regulate blood sugar</p>
                                            <Separator />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>

                    {/* item 3 */}
                    <CarouselItem className="pl-1 basis-1/3 ">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex justify-center border-2 pt-4 border-zinc-800 rounded-lg">
                                <div className="space-y-2">
                                    <div>
                                        <img src="/public/assets/millets/Foxtail-millet.jpg" alt="bajra" className="h-[350px] rounded-lg w-[405px]"/>
                                        <h1 className="text-xl pl-[95px] font-bold">Foxtail Millet (Kangni)</h1>
                                    </div>
                                    <div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Nutrients: </h2>
                                            <p>Protein, Fiber, Iron, Calcium</p>
                                            <Separator />
                                        </div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Potential Benefits: </h2>
                                            <p>May promote gut health, support, bone health, regulate blood sugar</p>
                                            <Separator />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>

                    {/* item 4 */}
                    <CarouselItem className="pl-1 basis-1/3 ">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex justify-center border-2 pt-4 border-zinc-800 rounded-lg">
                                <div className="space-y-2">
                                    <div>
                                        <img src="/public/assets/millets/Finger-millet(ragi).jpg" alt="bajra" className="h-[350px] rounded-lg w-[405px]"/>
                                        <h1 className="text-xl pl-[100px] font-bold">Finger Millet (Ragi)</h1>
                                    </div>
                                    <div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Nutrients: </h2>
                                            <p>Calcium, Protein, Amino Acid</p>
                                            <Separator />
                                        </div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Potential Benefits: </h2>
                                            <p>May support bone health, muscle development, improve digestion</p>
                                            <Separator />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>

                    {/* item 5 */}
                    <CarouselItem className="pl-1 basis-1/3 ">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex justify-center border-2 pt-4 border-zinc-800 rounded-lg">
                                <div className="space-y-2">
                                    <div>
                                        <img src="/public/assets/millets/fonio-millet.jpg" alt="bajra" className="h-[350px] rounded-lg w-[405px]"/>
                                        <h1 className="text-xl pl-[140px] font-bold">Fonio Millet</h1>
                                    </div>
                                    <div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Nutrients: </h2>
                                            <p>Protein, Iron, Calcium</p>
                                            <Separator />
                                        </div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Potential Benefits: </h2>
                                            <p>May be a good source of iron for plant-based diets, support bone health</p>
                                            <Separator />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>

                    {/* item 6 */}
                    <CarouselItem className="pl-1 basis-1/3 ">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex justify-center border-2 pt-4 border-zinc-800 rounded-lg">
                                <div className="space-y-2">
                                    <div>
                                        <img src="/public/assets/millets/barnyard-millet.jpg" alt="bajra" className="h-[350px] rounded-lg w-[405px]"/>
                                        <h1 className="text-xl pl-[130px] font-bold">Barnyard Millet</h1>
                                    </div>
                                    <div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Nutrients: </h2>
                                            <p>Protein, Fiber, Iron</p>
                                            <Separator />
                                        </div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Potential Benefits: </h2>
                                            <p>May promote gut health, support healthy blood sugar levels</p>
                                            <Separator />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>

                    {/* item 7 */}
                    <CarouselItem className="pl-1 basis-1/3 ">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex justify-center border-2 pt-4 border-zinc-800 rounded-lg">
                                <div className="space-y-2">
                                    <div>
                                        <img src="/public/assets/millets/little-millets(kutki).jpg" alt="bajra" className="h-[350px] rounded-lg w-[405px]"/>
                                        <h1 className="text-xl pl-[100px] font-bold">Little Millet (Kutki)</h1>
                                    </div>
                                    <div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Nutrients: </h2>
                                            <p>Protein, Fiber, Iron</p>
                                            <Separator />
                                        </div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Potential Benefits: </h2>
                                            <p>May be a good source of dietary fiber, support heart health</p>
                                            <Separator />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>

                    {/* item 8 */}
                    <CarouselItem className="pl-1 basis-1/3 ">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex justify-center border-2 pt-4 border-zinc-800 rounded-lg">
                                <div className="space-y-2">
                                    <div>
                                        <img src="/public/assets/millets/buckwheat-millet.jpeg" alt="bajra" className="h-[350px] rounded-lg w-[405px]"/>
                                        <h1 className="text-xl pl-[80px] font-bold">Buckwheat Millet (Kuttu)</h1>
                                    </div>
                                    <div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Nutrients: </h2>
                                            <p>Protein, Fiber, Magnesium</p>
                                            <Separator />
                                        </div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Potential Benefits: </h2>
                                            <p>May help manage blood sugar, support heart health, gluten-free, option</p>
                                            <Separator />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>

                    {/* item 9 */}
                    <CarouselItem className="pl-1 basis-1/3 ">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex justify-center border-2 pt-4 border-zinc-800 rounded-lg">
                                <div className="space-y-2">
                                    <div>
                                        <img src="/public/assets/millets/amaranth-millet.jpeg" alt="bajra" className="h-[350px] rounded-lg w-[405px]"/>
                                        <h1 className="text-xl pl-[80px] font-bold">Amarnath Millet (Rajgira)</h1>
                                    </div>
                                    <div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Nutrients: </h2>
                                            <p>Protein, Fiber, Calcium</p>
                                            <Separator />
                                        </div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Potential Benefits: </h2>
                                            <p>May be a complete protein source for plat-based diets, support bone health</p>
                                            <Separator />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    
                    {/* item 10 */}
                    <CarouselItem className="pl-1 basis-1/3 ">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex justify-center border-2 pt-4 border-zinc-800 rounded-lg">
                                <div className="space-y-2">
                                    <div>
                                        <img src="/public/assets/millets/kodo-millet.jpeg" alt="bajra" className="h-[350px] rounded-lg w-[405px]"/>
                                        <h1 className="text-xl pl-[140px] font-bold">Kodo Millet</h1>
                                    </div>
                                    <div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Nutrients: </h2>
                                            <p>Protein, Fiber, Iron</p>
                                            <Separator />
                                        </div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-semibold">Potential Benefits: </h2>
                                            <p>May be beneficial for gut health, support healthy blood sugar levels</p>
                                            <Separator />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </>
  )
}

export default InfoCard