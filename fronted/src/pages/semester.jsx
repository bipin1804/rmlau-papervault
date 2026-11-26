
import { useState, useEffect } from "react";
import apiclient from "../api/api.js";
import { useLocation, useNavigate } from "react-router-dom";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EastIcon from '@mui/icons-material/East';
import SchoolIcon from '@mui/icons-material/School';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


export default function Semester() {
    const location = useLocation();
    const navigate = useNavigate();

    const { year, Branch } = location.state || {};

    const [sem, setsem] = useState([]);

    useEffect(() => {
        const getSemester = async () => {
            try {
                const response = await apiclient.get(
                    `/papers/search/${year}/${Branch}`
                );

                setsem(response.data.semesters);
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        if (year && Branch) {
            getSemester();
        }
    }, [year, Branch]);

    const selectsem = (semester) => {
        navigate("/subject", {
            state: {
                year,
                Branch,
                semester
            }
        });
    };

    return (



<div className="bg-blue-200 min-h-screen  w-full flex flex-col items-center justify-center gap-5">



<div className="ml-2 py-3 px-3 absolute top-15 left-2" onClick={() => navigate(-1)}>
    <p><KeyboardBackspaceIcon className="bg-blue-400 text-white rounded  text-4xl hover:bg-blue-600"/></p>
</div>



<div className="flex flex-col gap-4 mt-2 items-center">


            <p className="bg-blue-400 py-3  px-3 rounded-full inline"><SchoolIcon className="text-blue-800"/></p>

            <p className=" text:sm">Choose a semester to view papers</p>


            <h2 className="font-bold text-2xl ">Select Semester</h2>

            <h2 className="font-bold text-2xl text-blue-500 py-2 px-2  bg-blue-300 rounded">{Branch}</h2>

    </div>


<div className=" md:flex md:gap-5 grid grid-cols-1 gap-10 ">




            {sem.map((semester,index) => (

<div className="flex ">

<div onClick={() => selectsem(semester)}  key={index+1} className="flex flex-col items-center border bg-white shadow-2xl border-white py-5 px-10 rounded gap-2">

<p className="bg-green-200 py-3  px-3 rounded-full inline"><MenuBookIcon className="text-green-500"/></p>

    <p className="font-bold text-2xl "> Semester  {semester}</p>

    <p className="text-green-600">Previous year papers</p>

    <div className="flex justify-between items-center gap-15 ">
        <p className="text-green-500">View papers </p>
        <p className="text-green-500 border border-green-500 py-1.5 px-1.5 rounded-full"><EastIcon/></p>
    </div>

</div>
</div>

            ))}
        </div>

    </div>
    );



}
