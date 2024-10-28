
import Link from "next/link"



export default function Home() {
  return (

<div>
      <ul className="text-white font-bold flex justify-center gap-20 text-4xl mt-10 ">
        <li>Find Used Cars in Pakistan</li>
      </ul>
      <ul className="text-white font-bold flex justify-center gap-20 ">
        <li>With thousands of cars, we have just the right one for you</li>
      </ul>
      <form className="flex flex-col w-3/3 justify-center items-center mt-5">
        <input type="text" className="flex flex-col w-2/5 text-black" />
      </form>
      <div className="flex flex-col items-center">
      <button className="flex border-1 p-2 rounded-xl bg-blue-500 m-10 justify-between">Advanced Filter</button>
      </div>      
      <h1 className="font-bold text-center text-2xl">Sell Your Car on PakWheels and Get the Best Price</h1>
      <div className="flex justify-center items-center gap-40 mt-10">
<div className="flex flex-col ">
      <ul className="flex flex-col items-left ">
        <li className="font-bold text-blue-500 text-2xl py-2">Post your Ad on PakWheels</li>
        <li className="py-2">Post your Ad for Free in 3 Easy Steps</li>
        <li className="py-2">Get Genuine offers from Verified Buyers</li>
        <li className="py-2">Sell your car Fast at the Best Price</li>
        <button className="bg-red-900 text-white boder-4 rounded-2xl py-2 mt-4 " >Post Your Ad</button>
      </ul></div>
      
      <div className="flex flex-row justify-end ">
      <ul className="flex flex-col justify-left">
        <li className="font-bold text-blue-500 text-2xl py-2">Try PakWheels Sell It For Me</li>
        <li className="py-2">Dedicated Sales Expert to Sell your Car</li>
        <li className="py-2">We Bargain for you and share the Best Offer</li>
        <li className="py-2">We ensure Safe & Secure Transaction</li>
        <button className="bg-blue-900 text-white boder-4 rounded-2xl py-2 mt-4 ">Register Your Car</button>
      </ul>
      </div></div>
      <p className="style-bold text-2xl my-10 mx-20">Managed by PakWheels</p>
      <div className="flex flex-row gap-60 px-20">
      <div className="">
      <ul >
        <li className="h-60 w-60 cursor-pointer"><img src="https://cache3.pakwheels.com/ad_pictures/1064/mercedes-benz-e-class-e-250-2011-106415955.webp" alt="Loading" /></li>
      </ul>
      <ul className="">
      <Link href="http://localhost:3000/form">Mercedes Benz E Class 2011</Link>
        <li className="text-green-500">PKR 13,200,000</li>
        <li>Karachi</li>
      </ul>
      </div>
      <div>
        <ul>
        <li className="h-60 w-60  cursor-pointer"><img src="https://cache4.pakwheels.com/ad_pictures/1102/honda-life-c-2014-110244082.webp" alt="Loading" /></li>
      </ul>
      <ul className="">
      <Link href="http://localhost:3000/form">Honda Life 2014</Link>
        <li className="text-green-500">PKR 2,150,000</li>
        <li>Lahore</li>
      </ul>
      </div>
      <div>
        <ul>
        <li className="h-60 w-60 cursor-pointer"><img src="https://cache4.pakwheels.com/ad_pictures/1073/honda-civic-vti-oriel-automatic-2000-107376631.webp" alt="Loading" /></li>
      </ul>
      <ul className="">
      <Link href="http://localhost:3000/form">Honda Civic 2000</Link>
        <li className="text-green-500">PKR 1,500,000</li>
        <li>Karachi</li>
      </ul>
      </div>
      <div>
        <ul>
        <li className="h-60 w-60 cursor-pointer"><img src="https://cache4.pakwheels.com/ad_pictures/1106/audi-e-tron-50-quattro-sportback-230kw-2023-110636921.webp" alt="Loading" /></li>
      </ul>
      <ul className="">
        <li>
        <Link href="http://localhost:3000/form">Audi e-tron 2023</Link></li>
        <li className="text-green-500">PKR 30,000,000</li>
        <li>Karachi</li>
      </ul>
      </div>
         </div>
         </div>
    
  )
};
