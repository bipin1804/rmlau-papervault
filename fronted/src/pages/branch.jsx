import { assert } from "../assets/assert";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ComputerIcon from '@mui/icons-material/Computer';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import HandymanIcon from '@mui/icons-material/Handyman';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useLocation, useNavigate } from "react-router-dom";

import apiclient from '../api/api.js'
import { useState } from "react";


export default function Branch() {
  const navigate = useNavigate();

  const [branchdata, setbranchdata] = useState([]);

  
const location = useLocation();
const { year } = location.state || {};



  const getyearbranch = async (Branch) => {


    try {
      console.log("Selected year:", year);
      console.log("Branch:", Branch);

      const response = await apiclient.get(
        `/papers/search/${year}/${Branch}`
      );

      console.log(response.data);

      navigate("/semester", {
        state: {
          year: year,
          Branch: Branch,
          papers: response.data.getbranch
        }
      });

    } catch (err) {
      console.log(err);
    }
  };





    return (
        
        <div className="bg-blue-100 w-[100%] h-[100%] md:h-[100vh] md:w-[100vw]">


<div className="ml-2 py-3 px-3" onClick={()=>navigate(-1)}>
    <p><KeyboardBackspaceIcon className="bg-blue-400 text-white rounded  text-4xl hover:bg-blue-600"/></p>
</div>



<div className="flex items-center justify-evenly  ">
<div >
<p className="font-bold md:text-3xl  md:w-[200px] w-[100px]">Choose Your <span className="text-blue-500">Branch</span></p>
<p className="md:w-[300px] w-[180px] text-gray-600">Select your Engineering branch to access subject wise question papers</p>
</div>

<div>
    <img src={assert.Degree} alt=""  className="md:h-[250px] h-[120px]"/>
</div>

    </div>      

<div className="flex md:grid md:grid-cols-2  md:mx-50  md:gap-8  flex-col  mt-4  mx-4 gap-4"  >
  

<div className="flex gap-2 md:gap-3 rounded md:h-[150px] md:w-[400px] h-[150px]  w-[350px] items-center px-2 border-white bg-white shadow-2xl  " onClick={()=> getyearbranch("Computer Science")}>  

<p className="px-1.5 py-1.5 bg-blue-300 text-blue-500 rounded-full"><ComputerIcon className="text-5xl"/></p>

<div>
    <p className="font-bold w-[180px] text-lg">Computer Science & Engineering</p>
    <p className="font-bold text-blue-600">CS</p>
    <p className="md:w-[280px] w-[240px]">Explore papers related Computer Science & Engineering</p>
</div>

<p className="px-1.5 py-1.5 bg-blue-500 text-white rounded-full font-bold"><KeyboardArrowRightIcon/></p>
</div>




<div className="flex gap-2 md:gap-3 bg-white rounded border border-white  md:h-[150px] md:w-[400px] h-[150px]  w-[350px] items-center px-2 shadow-2xl" onClick={()=> getyearbranch("Civil Engineering")}>  

<p className="px-1.5 py-1.5 bg-blue-300 text-blue-500 rounded-full"><HouseSidingIcon className="text-5xl"/></p>

<div>
    <p className="font-bold w-[180px] text-lg">Civil Engineering</p>
    <p className="font-bold text-green-600">Civil</p>
    <p className="md:w-[280px] w-[240px]">Explore papers related to civil Engineering</p>
</div>

<p className="px-1.5 py-1.5 bg-green-500 text-white rounded-full font-bold"><KeyboardArrowRightIcon/></p>
</div>




<div className="flex gap-2 md:gap-3 bg-white border border-white rounded md:h-[150px] md:w-[400px] h-[150px]  w-[350px] items-center px-2  shadow-2xl" onClick={()=> getyearbranch("Mechanical Engineering")}>  

<p className="px-1.5 py-1.5 bg-blue-300 text-blue-500 rounded-full"><HandymanIcon   className="text-5xl"/></p>

<div>
    <p className="font-bold w-[180px] text-lg">Mechanical Engineering</p>
    <p className="font-bold text-orange-600">Mechanical </p>
    <p className="md:w-[280px] w-[240px]">Explore papers related Mechanical Engineering</p>
</div>

<p className="px-1.5 py-1.5 bg-orange-500 text-white rounded-full font-bold"><KeyboardArrowRightIcon/></p>
</div>




<div className="flex gap-2 md:gap-3 border border-white rounded md:h-[150px] md:w-[400px] h-[150px]  w-[350px] items-center px-2  shadow-2xl bg-white" onClick={()=> getyearbranch("Information Technology")}>  

<p className="px-1.5 py-1.5 bg-blue-300 text-purple-500 rounded-full"><ComputerIcon className="text-5xl"/></p>

<div>
    <p className="font-bold w-[180px] text-lg">Information Technloogy</p>
    <p className="font-bold text-purple-600">IT</p>
    <p className="md:w-[280px] w-[240px]">Explore papers related Information Technology</p>
</div>

<p className="px-1.5 py-1.5 bg-purple-500 text-white rounded-full font-bold"><KeyboardArrowRightIcon/></p>
</div>




</div>






        </div>
    )


}

