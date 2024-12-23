const info = [
    {
        id: 10,
        Pic:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
        title:"V60 Coffee",
        decs:"The V60 is a pour-over coffee brewing method that is known for producing a clean, flavorful cup of coffee. It uses a conical dripper with a spiral ridge design and a large hole at the bottom, which allows for greater control over the brewing process.",
        coffeeAmount: 15,
        waterAmount: 250,
        measurement: "g"
      },{
        id: 130,
        Pic:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
        title:"V60 Coffee",
        decs:"The V60 is a pour-over coffee brewing method that is known for producing a clean, flavorful cup of coffee. It uses a conical dripper with a spiral ridge design and a large hole at the bottom, which allows for greater control over the brewing process.",
        coffeeAmount: 15,
        waterAmount: 250,
        measurement: "g"
      },{
        id: 120,
        Pic:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
        title:"V60 Coffee",
        decs:"The V60 is a pour-over coffee brewing method that is known for producing a clean, flavorful cup of coffee. It uses a conical dripper with a spiral ridge design and a large hole at the bottom, which allows for greater control over the brewing process.",
        coffeeAmount: 15,
        waterAmount: 250,
        measurement: "g"
      },{
        id: 103,
        Pic:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
        title:"V60 Coffee",
        decs:"The V60 is a pour-over coffee brewing method that is known for producing a clean, flavorful cup of coffee. It uses a conical dripper with a spiral ridge design and a large hole at the bottom, which allows for greater control over the brewing process.",
        coffeeAmount: 15,
        waterAmount: 250,
        measurement: "g"
      },{
        id: 1,
        Pic:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
        title:"V60 Coffee",
        decs:"The V60 is a pour-over coffee brewing method that is known for producing a clean, flavorful cup of coffee. It uses a conical dripper with a spiral ridge design and a large hole at the bottom, which allows for greater control over the brewing process.",
        coffeeAmount: 15,
        waterAmount: 250,
        measurement: "g"
      }
]

import { NextResponse } from "next/server"


export async function GET() {
    return NextResponse.json(info);
}
