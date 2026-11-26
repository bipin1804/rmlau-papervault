
import { useContext, useEffect, useState } from 'react'
import apiclient from '../api/api.js'
import { useLocation, useNavigate } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Appcontext } from '../context/context.jsx';



export default function Viewpaper(){

const { auth } = useContext(Appcontext);

    const navigate= useNavigate();
    const location = useLocation();

        const { year, Branch,semester,subject } = location.state || {};

const [form,setform]= useState([]);

const setdata = async ()=>{

    try{

    const response = await apiclient.get
    
    (`/papers/search/${year}/${Branch}/${semester}/${subject}`);
console.log(response.data)
setform(response.data.data)
console.log(response.data.data[0])

    }catch(err){
        console.log(err)
    }

}

    useEffect(() => {
        if (year && Branch && semester && subject) {
            setdata();
        }
    }, [year, Branch, semester,subject]);

    return (

<div>



  <div className="min-h-screen w-full flex items-center justify-center">
    
    <div className="ml-2 py-3 px-3 absolute top-18 left-0.5 md:top-14" onClick={()=>navigate(-1)}>
        <p><KeyboardBackspaceIcon className="bg-blue-400 text-white rounded  text-4xl hover:bg-blue-600"/></p>
    </div>
    

<div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-4 content-center justify-items-center gap-4  mt-10"> 



{   form && form.length > 0 ? (
        form.map((paper) => (
            <div key={paper._id } className='bg-white md:h-[240px] h-[240px]  md:w-[300px] w-[250px] flex flex-col rounded shadow-2xl content-center items-center gap-4 mt-2 md:mt-1' >

<div className='mt-2'>
    <p className='bg-green-200 text-green-800 inline px-1.5 py-1.5 rounded '>< FileOpenIcon/></p>
</div>
                <h3 className=' flex gap-2'>Subject: <p className='font-medium'>{paper.subject}</p> </h3>


{paper.paperinfo.map((items) => (
  <div key={items._id} className='flex flex-col gap-4'>



<p className='flex gap-2 '> Paperyear: <span className='font-medium'>{items.paperyear}</span></p>


    <a
      href={items.pdf}
      target="_blank"
      rel="noopener noreferrer" className='px-3 py-1 rounded bg-purple-800 text-white gap-2'>
      View paper
      <RemoveRedEyeIcon/>

    </a>
{String(paper.owner?._id) === String(auth?._id) && (
    <div className="flex gap-4">
        <button onClick={() =>
            navigate("/edit", {
                state: { paper, info: items }
            })
        }>
            Edit
        </button>

        <button onClick={() =>
            navigate("/delete", {
                state: { paper }
            })
        }>
            Delete
        </button>
    </div>
)}

  </div>
))}




                          {/* by: {paper.owner?.name || "Unknown"} */}

            </div>
        ))
    ) : (
        <p>No papers found.</p>
    )}


    </div>


        </div>
</div>
    )
}