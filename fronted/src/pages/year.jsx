import { assert } from "../assets/assert";
import EastIcon from '@mui/icons-material/East';
import GrassIcon from '@mui/icons-material/Grass';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import apiclient from '../api/api.js'
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { useState } from "react";


export default function Year(){


    const navigate= useNavigate();





  const handleYear = async (year) => {
    try {
      const  response  = await apiclient.get( `/papers/search/${year}`
      );
      console.log(response.data.data)
      navigate("/branch", {
        state: { year: year }
    
      });
    } catch (error) {
      console.log(error);
    }
  };

 

  

    return(
        <div className="bg-blue-100 w-[100%] h-[100%] md:h-[100vh] md:w-[100vw] ">
            

<div className="ml-2 py-3 px-3" onClick={()=>navigate("/")}>
    <p><KeyboardBackspaceIcon className="bg-blue-400 text-white rounded  text-4xl hover:bg-blue-600"/></p>
</div>



            <div className="flex w-full items-center justify-evenly mx-2 my "  >
                
                <div className="flex flex-col gap-2 my-4">
<p className="md:text-4xl font-bold">Choose Your <span className="text-blue-400 font-bold">College Year</span></p>
<p className=" md:w-[400px] text-gray-400 text:sm w-[200px]">select your academic year to explore subject and previous year question paper</p>
                </div>

                <div>
                    <img src={assert.Degree} alt="" className="md:h-[200px] h-[100px] my-4" />
                </div>
            </div>



{/* year section */}


<div className="md:flex md:flex-row  justify-between items-center mx-20 mt-4  flex flex-col gap-4">
  

<div className="md:w-[200px] md:h-[300px] h-[220px] w-[250px] bg-white flex flex-col gap-3 px-4 rounded-2xl" onClick={()=> handleYear(1)} >

<div className="relative" >
<button className="bg-blue-200 md:px-1 md:py-1 rounded text-blue-500   font-bold absolute top-2 right-2 ">O1</button>
</div>

<div >
    <button className="bg-blue-400   md:px-4 md:py-4  rounded text-blue-200  md:mt-2"><GrassIcon/></button>
</div>
 
<div>
    <p className="text-cyan-400 font-bold md:text-3xl md:mt-2">1st<span className="font-bold text-black md:text-3xl" > Year</span></p>
<p className="w-[200px] text-gray-400 text:sm md:mt-2">Build your strong foundation with Core concept</p>
</div>


<div className="relative">
    <button className="bg-blue-500 px-1 py-1 rounded-full text-white font-bold absolute md:top-8 md:right-3 top-2 right-0.5"><EastIcon/></button>

</div>
</div>







<div className="md:w-[200px] md:h-[300px]   h-[220px] w-[250px] bg-white flex flex-col gap-3 px-4 rounded-2xl"  onClick={()=> handleYear(2)}>

<div className="relative">
<button className="bg-green-100 md:px-1 md:py-1 rounded text-green-400 font-bold absolute top-2 right-2 ">O2</button>
</div>

<div >
    <button className="bg-green-100   md:px-4 md:py-4  rounded text-green-500  mt-2"><MenuBookIcon/></button>
</div>
 
<div>
    <p className="text-green-400 font-bold md:text-3xl mt-2">2nd<span className="font-bold text-black md:text-3xl"> Year</span></p>
<p className="w-[200px] text-gray-400 text:sm mt-2">Strength your basic and explore new concept</p>
</div>


<div className="relative">
    <button className="bg-green-500 px-1 py-1 rounded-full text-white font-bold absolute md:top-8 md:right-3 top-2 right-0.5"><EastIcon/></button>

</div>
</div>





<div className="md:w-[200px] md:h-[300px]  h-[220px] w-[250px] bg-white flex flex-col gap-3 px-4 rounded-2xl"  onClick={()=> handleYear(3)}>

<div className="relative">
<button className="bg-orange-100 md:px-1 md:py-1 rounded text-orange-400 font-bold absolute top-2 right-2 ">O3</button>
</div>

<div >
    <button className="bg-orange-200   md:px-4 md:py-4  rounded text-orange-400  mt-2"><SchoolIcon/></button>
</div>
 
<div>
    <p className="text-orange-400 font-bold md:text-3xl mt-2">3rd <span className="font-bold text-black md:text-3xl"> Year</span></p>
<p className="w-[200px] text-gray-400 text:sm  mt-2"> Dive deeper into subject and real world applictaion</p>
</div>


<div className="relative">
    <button className="bg-orange-500 px-1 py-1 rounded-full text-white font-bold absolute md:top-8 md:right-3 top-2 right-0.5"><EastIcon/></button>

</div>
</div>




<div className="md:w-[200px] md:h-[300px] h-[220px] w-[250px] bg-white flex flex-col gap-3 px-4 rounded-2xl mb-4"  onClick={()=> handleYear(4)}>

<div className="relative">
<button className="bg-violet-300 md:px-1 md:py-1  rounded text-violet-600 font-bold absolute top-2 right-2 ">04</button>
</div>

<div >
    <button className="bg-violet-300  md:px-4 md:py-4   rounded text-violet-600 mt-2"><WorkspacePremiumIcon/></button>
</div>
 
<div>
    <p className="text-violet-600 font-bold md:text-3xl mt-2">4th<span className="font-bold text-black md:text-3xl"> Year</span></p>
<p className="w-[200px] text-gray-400 text:sm mt-2">master your skill and prepare for your future</p>
</div>



<div className="relative">
    <button className="bg-violet-500 px-1 py-1 rounded-full text-white font-bold absolute md:top-8 md:right-3 top-2 right-0.5"><EastIcon/></button>

</div>
</div>
 





</div>




        </div>
    )
}