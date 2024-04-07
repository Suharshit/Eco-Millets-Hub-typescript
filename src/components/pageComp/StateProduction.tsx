import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, } from "react-chartjs-2";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

ChartJS.register(ArcElement, Tooltip, Legend);

const StateProduction = () => {
  return (
    <>
      <div>
        <div  className="text-3xl font-bold pt-10 pb-5">
          Top 10 Millets Producing States from 2019-14 (Production in Lakh Tonnes)
        </div>
        <Table className="font-semibold">
          <TableCaption>Top 10 millets producer in india</TableCaption>

          {/* header */}
          <Accordion type="single" collapsible>
            <TableHeader>
              <TableRow>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="gap-x-[69.5px]">
                    <TableHead className="text-right">States</TableHead>
                    <TableHead>2019-20</TableHead>
                    <TableHead>2020-21</TableHead>
                    <TableHead>2021-22</TableHead>
                    <TableHead>2022-23</TableHead>
                    <TableHead>2023-24</TableHead>
                  </AccordionTrigger>
                </AccordionItem>
              </TableRow>
            </TableHeader>
          </Accordion>

          {/* body */}
          <TableBody>

            {/* row 1 */}
          <Accordion type="single" collapsible>
            <TableRow>
              <AccordionItem value="item-1">
                <AccordionTrigger className="gap-x-20">
                  <TableCell className="text-right">Rajasthan</TableCell>
                    <TableCell>51.47</TableCell>
                    <TableCell>51.56</TableCell>
                    <TableCell>42.80</TableCell>
                    <TableCell>56.74</TableCell>
                    <TableCell>48.09</TableCell>
                </AccordionTrigger>
                <AccordionContent className="h-[280px] flex">
                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Jowar: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Bajra: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [20.84,20.81,16.63,22.70,19.04],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Ragi: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Other small millets: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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
                </AccordionContent>
              </AccordionItem>
            </TableRow>
          </Accordion>

          {/* row 2 */}
          <Accordion type="single" collapsible>
            <TableRow>
              <AccordionItem value="item-1">
                <AccordionTrigger className="gap-x-[75.5px]">
                  <TableCell className="text-right">Uttar Pradesh</TableCell>
                  <TableCell>21.72</TableCell>
                  <TableCell>22.98</TableCell>
                  <TableCell>22.26</TableCell>
                  <TableCell>23.69</TableCell>
                  <TableCell>26.98</TableCell>
                </AccordionTrigger>
                <AccordionContent className="h-[280px] flex">
                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Jowar: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Bajra: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [20.84,20.81,16.63,22.70,19.04],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Ragi: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Other small millets: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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
                </AccordionContent>
              </AccordionItem>
            </TableRow>
          </Accordion>

          {/* row 3 */}
          <Accordion type="single" collapsible>
            <TableRow>
              <AccordionItem value="item-1">
                <AccordionTrigger className="gap-x-[79.5px]">
                  <TableCell className="text-right">Karanatka</TableCell>
                  <TableCell>25.56</TableCell>
                  <TableCell>25.69</TableCell>
                  <TableCell>20.54</TableCell>
                  <TableCell>20.33</TableCell>
                  <TableCell>17.49</TableCell>
                </AccordionTrigger>
                <AccordionContent className="h-[280px] flex">
                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Jowar: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Bajra: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [20.84,20.81,16.63,22.70,19.04],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Ragi: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Other small millets: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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
                </AccordionContent>
              </AccordionItem>
            </TableRow>
          </Accordion>

          {/* row 4 */}
          <Accordion type="single" collapsible>
            <TableRow>
              <AccordionItem value="item-1">
                <AccordionTrigger className="gap-x-[78px]">
                  <TableCell className="text-right">Maharashtra</TableCell>
                  <TableCell>24.29</TableCell>
                  <TableCell>25.14</TableCell>
                  <TableCell>23.05</TableCell>
                  <TableCell>18.99</TableCell>
                  <TableCell>17.15</TableCell>
                </AccordionTrigger>
                <AccordionContent className="h-[280px] flex">
                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Jowar: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Bajra: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [20.84,20.81,16.63,22.70,19.04],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Ragi: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Other small millets: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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
                </AccordionContent>
              </AccordionItem>
            </TableRow>
          </Accordion>

          {/* row 5 */}
          <Accordion type="single" collapsible>
            <TableRow>
              <AccordionItem value="item-1">
                <AccordionTrigger className="gap-x-[75.5px]">
                  <TableCell className="text-right">Madhya Pardesh</TableCell>
                  <TableCell>8.96</TableCell>
                  <TableCell>10.24</TableCell>
                  <TableCell>11.81</TableCell>
                  <TableCell>12.54</TableCell>
                  <TableCell>12.68</TableCell>
                </AccordionTrigger>
                <AccordionContent className="h-[280px] flex">
                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Jowar: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Bajra: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [20.84,20.81,16.63,22.70,19.04],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Ragi: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Other small millets: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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
                </AccordionContent>
              </AccordionItem>
            </TableRow>
          </Accordion>

          {/* row 6 */}
          <Accordion type="single" collapsible>
            <TableRow>
              <AccordionItem value="item-1">
                <AccordionTrigger className="gap-x-[83.5px]">
                  <TableCell className="text-right">Haryana</TableCell>
                  <TableCell>10.35</TableCell>
                  <TableCell>13.61</TableCell>
                  <TableCell>11.32</TableCell>
                  <TableCell>12.14</TableCell>
                  <TableCell>11.94</TableCell>
                </AccordionTrigger>
                <AccordionContent className="h-[280px] flex">
                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Jowar: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Bajra: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [20.84,20.81,16.63,22.70,19.04],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Ragi: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Other small millets: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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
                </AccordionContent>
              </AccordionItem>
            </TableRow>
          </Accordion>

          {/* row 7 */}
          <Accordion type="single" collapsible>
            <TableRow>
              <AccordionItem value="item-1">
                <AccordionTrigger className="gap-x-[83px]">
                  <TableCell className="text-right">Tamil Nadu</TableCell>
                  <TableCell>10.17</TableCell>
                  <TableCell>9.05</TableCell>
                  <TableCell>7.65</TableCell>
                  <TableCell>6.30</TableCell>
                  <TableCell>6.23</TableCell>
                </AccordionTrigger>
                <AccordionContent className="h-[280px] flex">
                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Jowar: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Bajra: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [20.84,20.81,16.63,22.70,19.04],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Ragi: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Other small millets: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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
                </AccordionContent>
              </AccordionItem>
            </TableRow>
          </Accordion>

          {/* row 8 */}
          <Accordion type="single" collapsible>
            <TableRow>
              <AccordionItem value="item-1">
                <AccordionTrigger className="gap-x-[85.5px]">
                  <TableCell className="text-right">Gujarat</TableCell>
                  <TableCell>9.90</TableCell>
                  <TableCell>10.92</TableCell>
                  <TableCell>11.72</TableCell>
                  <TableCell>13.64</TableCell>
                  <TableCell>4.51</TableCell>
                </AccordionTrigger>
                <AccordionContent className="h-[280px] flex">
                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Jowar: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Bajra: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [20.84,20.81,16.63,22.70,19.04],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Ragi: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Other small millets: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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
                </AccordionContent>
              </AccordionItem>
            </TableRow>
          </Accordion>

          {/* row 9 */}
          <Accordion type="single" collapsible>
            <TableRow>
              <AccordionItem value="item-1">
                <AccordionTrigger className="gap-x-[82px]">
                  <TableCell className="text-right">Andra Prdesh</TableCell>
                  <TableCell>5.14</TableCell>
                  <TableCell>5.41</TableCell>
                  <TableCell>3.59</TableCell>
                  <TableCell>3.76</TableCell>
                  <TableCell>3.90</TableCell>
                </AccordionTrigger>
                <AccordionContent className="h-[280px] flex">
                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Jowar: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Bajra: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [20.84,20.81,16.63,22.70,19.04],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Ragi: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Other small millets: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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
                </AccordionContent>
              </AccordionItem>
            </TableRow>
          </Accordion>

          {/* row 10 */}
          <Accordion type="single" collapsible>
            <TableRow>
              <AccordionItem value="item-1">
                <AccordionTrigger className="gap-x-[86px]">
                  <TableCell className="text-right">Uttrakhand</TableCell>
                  <TableCell>1.91</TableCell>
                  <TableCell>2.01</TableCell>
                  <TableCell>2.00</TableCell>
                  <TableCell>1.76</TableCell>
                  <TableCell>1.61</TableCell>
                </AccordionTrigger>
                <AccordionContent className="h-[280px] flex">
                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Jowar: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Bajra: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [20.84,20.81,16.63,22.70,19.04],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Ragi: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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

                  <div className="h-60">
                    <h3 className="font-bold text-lg pl-7">Other small millets: </h3>
                    <Doughnut data={{
                      labels: ['2019-20','2020-21','2021-22','2022-23','2023-24'],
                      datasets: [
                        {
                          label: "count",
                          data: [17.04,22.04,20.02,21.18,19.69],
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
                </AccordionContent>
              </AccordionItem>
            </TableRow>
          </Accordion>

          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default StateProduction