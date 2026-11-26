
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import apiclient from "../api/api";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function Subject() {
  const navigate = useNavigate();
  const location = useLocation();

  const { year, Branch, semester } = location.state || {};

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const getSubjects = async () => {
      try {
        const response = await apiclient.get(
          `/papers/search/${year}/${Branch}/${semester}`
        );

        const papers = response.data.data || [];

        const uniqueSubjects = [
  ...new Map(
    papers
      .filter((item) => item.subject)
      .map((item) => [
        item.subject.trim().toLowerCase(),
        item.subject.trim()
      ])
  ).values()
];

setSubjects(uniqueSubjects);

      } catch (err) {
        console.log(err);
      }

    };

    if (year && Branch && semester) {
      getSubjects();
    }
  }, [year, Branch, semester]);

  const selectSubject = (subject) => {
    navigate("/viewpaper", {
      state: {
        year,
        Branch,
        semester,
        subject
      }
    });
  };
  

  return (
    <div>


    <div className="ml-2 py-3 px-3 absolute top-18 left-0.5 md:top-14" onClick={()=>navigate(-1)}>
        <p><KeyboardBackspaceIcon className="bg-blue-400 text-white rounded  text-4xl hover:bg-blue-600"/></p>
    </div>



<div className="flex flex-col content-center items-center mt-10 gap-5">

    <p className="bg-blue-300 text-blue-800 px-2 py-2 rounded-full inline s"><AutoStoriesIcon/></p>

      <h2 className="text-3xl font-bold">Select Subject</h2>
      <p className="text-[17px] mx-10 ">choose a subject to <span className="text-blue-600 underline underline-offset-3">explore </span> previous year paper</p>

<div className="md:grid md:grid-cols-2 gap-7 grid grid-cols-1 mt-8 mx-2">  

      {subjects.map((item) => ( 



        <div
          key={item} onClick={() => selectSubject(item)}className="cursor-pointer text-center  md:px-15 py-3 md:flex md:gap-16  md:px-20  flex gap-10 items-center  rounded  shadow-2xl  hover:bg-orange-400 hover:text-white   bg-white   md:text-xl overflow-hidden text-sm px-8">{item}
          
          <span className="relative right-1"> <ArrowRightAltIcon/> </span>   </div>
      ))}
      </div>

    </div>
    </div>


  );
}
