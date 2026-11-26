import { assert } from "../assets/assert";
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import ForwardIcon from '@mui/icons-material/Forward';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import VerifiedIcon from '@mui/icons-material/Verified';
import BackupIcon from '@mui/icons-material/Backup';

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";





export default function Home(){

    const navigate = useNavigate();

    const location = useLocation();


    const [msg, setMsg] = useState((location.state && location.state.message) || "");

useEffect(() => {
  if (!msg) return;

  const timer = setTimeout(() => {
    setMsg("");
    navigate(location.pathname, {
      replace: true,
      state: null,
    });
  }, 2000);

  return () => clearTimeout(timer);
}, [msg, navigate, location.pathname]);

    return (

        <div >

<div className="flex items-center justify-center width-[100%]">

<p className="flex items-center text-green-300 text-bold text-2xl">{msg}</p>

</div>

<div className=" md:flex  bg-blue-100  md:justify-evenly  flex-row items-center justify-center gap-5 ">

<div className="flex flex-col gap-3 ml-6 ">

<p className="text-2xl font-bold  mt-4">Find Explore</p>
<p  className="text-blue-500 font-bold text-2xl">Download</p>
<p className="w-1/2">Easily find and download previous year question paper organized by course year branch and subject</p>

<div onClick={()=>{navigate("/year");scrollTo(0,0)}}>
    <button className="md:py-2 md:px-2 bg-gray-100 mb-4 py-3 px-8 flex gap-4 rounded font-medium hover:bg-amber-300 hover:text-white"  ><PlagiarismIcon className="text-blue-400 hover:text-white"/> Explore Paper <ForwardIcon className="text-blue-500 hover:text-white"/></button>

</div>


</div> 




<div>
    <img src={assert.RMLAUIMG} alt="" className=" md:h-[350px]  md:w-[500px]" />
</div>

</div>




<div className=" md:flex  gap-5  grid grid-cols-2 mx-2 md:justify-evenly md:mx-4 md:relative bottom-6 mt-3">

<div className="flex md:px-6  md:py-4 py-4 px-3 md:bg-white bg-gray-200 rounded gap-5 " >
<button><PlagiarismIcon className="text-blue-400 text-[15px]"/></button>
<div>
    <p className="font-bold text-2xl">100+</p>
    <p className="text:sm text-gray-400">papers Uploaded</p>
</div>
</div>



<div className="flex  md:px-6  md:py-4 py-4 px-3  md:bg-white bg-gray-200 rounded gap-5 " >
<button><MenuBookIcon className="text-blue-400 text-[15px]"/></button>
<div>
    <p className="font-bold text-2xl">50+</p>
    <p className="text:sm text-gray-400"> College Subject</p>
</div>
</div>



<div className="flex md:px-6  md:py-4 py-4 px-3 md:bg-white bg-gray-200 rounded gap-5  " >
<button><SchoolIcon className="text-blue-400 text-[15px]"/></button>
<div>
    <p className="font-bold text-2xl">10+</p>
    <p className="text:sm text-gray-400"> College Branchs</p>
</div>
</div>


<div className="flex  md:px-6  md:py-4 py-4 px-3 md:bg-white bg-gray-200 rounded gap-5 " >
<button><GroupIcon className="text-blue-400 text-[15px]"/></button>
<div>
    <p className="font-bold text-2xl">1000+</p>
    <p className="text:sm text-gray-400">College Students</p>
</div>
</div>

</div>








{/* paper vault  */}

<div>

<div className="flex items-center justify-center mt-3 mb-3">
    <p className="text-2xl">Why  <span className="underline decoration-cyan-500 font-bold text-2xl underline-offset-8">Paper</span> Vault</p>
</div>



<div className="md:flex gap-5 md:items-center md:justify-between  mx-7 mt-3 grid grid-cols-2">

    
<div>
    <button className="py-3 px-3 bg-blue-100 rounded-full"><FolderOpenIcon className="text-blue-500"/></button>
    <p className="font-bold text-lg">Organized</p>
    <p className=" md:w-[190px] w-[150px]">paper are organized by course year and subject</p>
</div>



<div>
    <button className="py-3 px-3 bg-blue-100 rounded-full"><VerifiedIcon className="text-blue-500"/></button>
    <p className="font-bold text-lg">Reliable</p>
    <p className="md:w-[190px] w-[150px]">Verified and authenticate papers uplods by student</p>
</div>




<div>
    <button className="py-3 px-3 bg-blue-100 rounded-full"><ElectricBoltIcon className="text-blue-500"/></button>
    <p className="font-bold text-lg">Easy Access</p>
    <p className="md:w-[190px] w-[150px]">paper are organized by course year and subject</p>
</div>



<div onClick={()=> navigate("/paper")}>
    <button className="py-3 px-3 bg-blue-100 rounded-full"><BackupIcon className="text-blue-500"/></button>
    <p className="font-bold text-lg">Contribute</p>
    <p className="md:w-[190px] w-[150px]">Uploads papers and helps other in their purpose</p>
</div>


</div>










</div>










    </div>

    )
}