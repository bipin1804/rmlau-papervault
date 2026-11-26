import { useState } from "react"
import apiclient from '../api/api.js';

import FileOpenIcon from '@mui/icons-material/FileOpen';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ImageIcon from '@mui/icons-material/Image';
import SendIcon from '@mui/icons-material/Send';
import { useLocation, useNavigate } from "react-router-dom";

export default function Paper(){

  const navigate= useNavigate();
    
    const [form,setform] = useState({paperyear:"",Branch:"",subject:"",semester:"", year:"" });
    const [msg,setmsg]=useState(true);
    const [file,setfile] =useState()

const handlechange= (e)=>{
    setform({...form,[e.target.name]:e.target.value
    })

}



const handlesubmit = async (e) => {
  e.preventDefault();

  try {
    if (!file) {
      setmsg("Please select a PDF file");
      return;
    }

    const formData = new FormData();

    formData.append("paperyear", form.paperyear);
    formData.append("Branch", form.Branch);
    formData.append("subject", form.subject);
    formData.append("semester", form.semester);
    formData.append("year", form.year);
    formData.append("pdf", file);

    const response = await apiclient.post(
      "/papers/test",
      formData,
      

    );


navigate("/", {
  state: {
    message: response.data.message || "Paper uploaded successfully",
  },
});

    console.log(response.data);
    setmsg(response.data.message);
  } catch (error) {
    console.log(error.response?.data || error.message);
    setmsg(error.response?.data?.message || error.message);
  }
};



    
    return(


        <div className="flex justify-center items-center  bg-blue-200 h-[100%]">

<p>{msg}</p>
            <form onSubmit={handlesubmit} className="md:w-[600px] w-[350px] md:h-[700px] md:gap-3 gap-10 bg-white rounded-2xl flex flex-col items-center  md:px-9 md:py-8 py-4 px-4 mt-5 mb-3" encType="multipart/form-data">





<p className="px-2 py-2 bg-blue-200 text-blue-500 rounded-full"><FileOpenIcon/></p> 

<p className="font-bold text-2xl">Add Previous Year Paper</p>
<p className="text-gray-400">Fill the details below to add a paper to papervault</p>

 
<div className="md:grid grid-cols-2 grid md:gap-10 gap-3">


<div >

<p className="mb-1 flex gap-1 font-bold "><SchoolIcon className="text-blue-500"/> College year</p>

    <select


  name="year"
  value={form.year}
  onChange={handlechange}
  required
  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
>
  <option value="">Select year</option>
  <option value="1">1st Year</option>
  <option value="2">2nd Year</option>
  <option value="3">3rd Year</option>
  <option value="4">4th Year</option>
</select>
</div>


<div>

<p className="mb-1 flex gap-1 font-bold "><AccountBalanceIcon   className="text-blue-500"/>Branch</p>


    <select name="Branch" 
    value={form.Branch}
    onChange={handlechange}
    required
    className="w-full rounded-xl border border-gray-200  bg-gray-50 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
    
    <option value="">Select branch</option>
    <option value="Computer Science">Computer science</option>
    <option value="Civil Engineering">Civil</option>
    <option value="Mechanical Engineering">Mechanical</option>
    <option value="Information Technology">Information technology</option>
    </select>
</div>


<div>




<div>
  <p className="mb-1 flex gap-1 font-bold">
    <MenuBookIcon className="text-blue-500" />
    Semester
  </p>

  <select
    name="semester"
    value={form.semester}
    required
    onChange={handlechange}
    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
  >
    <option value="">Select semester</option>

    {(form.year
      ? form.year === "1" ? [1, 2]
        : form.year === "2" ? [3, 4]
        : form.year === "3" ? [5, 6]
        : [7, 8]
      : []
    ).map((sem) => (
      <option key={sem} value={sem}>
        Semester {sem}
      </option>
    ))}
  </select>
</div>




</div>




<div >

    <p className="mb-1 flex gap-1 font-bold "><CalendarMonthIcon className="text-blue-500"/>paper year</p>
    
<input type="number" placeholder="Enter paper year"  name="paperyear" required   value={form.paperyear} onChange={handlechange} className="w-full rounded-xl border border-gray-200  bg-gray-50 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/>

</div>

 </div>



<div className="w-full">
    <p className="mb-1 flex gap-1 font-bold "><ImageIcon className="text-blue-500"/>Upload pdf</p>
<input type="file" placeholder="Enter paper pdf"
  name="pdf"
  accept="application/pdf"
  required
  onChange={(e) => setfile(e.target.files[0])} className="w-full rounded-xl border border-gray-200  bg-gray-50 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/>
</div>



<div className="w-full">
    <p className="mb-1 flex gap-1 font-bold "><MenuBookIcon className="text-blue-500"/>Enter suject</p>
<input type="text" placeholder="Enter subject"  name="subject" required  value={form.subject}  onChange={handlechange} className="w-full rounded-xl border border-gray-200  bg-gray-50 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/>

</div>

<button type="submit" onSubmit={handlesubmit} className="bg-blue-600 text-white items-center font-bold py-1 px-6 rounded mt-6"><SendIcon/> click to submit</button>

            </form>
        </div>

    )
}
