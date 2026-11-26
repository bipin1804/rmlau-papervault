import paper from '../models/paper.js';
import paperinfo  from '../models/paperinfo.js';
import multer from 'multer'
import path from 'path'
import { storage } from "../cloudconfig.js";
import user from '../models/user.js'



export const upload = multer({ storage });
const papertest = async (req, res) => {
    try {
        // Data Thunder Client se milega

        const { Branch, year, subject, semester,paperyear } = req.body;

const pdf = req.file.path;
console.log(pdf)

console.log(req.body)
        
const ownerId = req.user && req.user._id;
        console.log(ownerId)

        // Step 1: Save paper information
        const test = await paperinfo.create({
            paperyear,
            pdf
        });

        // Step 2: Save paper details with paperinfo ID
        const papers = await paper.create({
            Branch,
            year,
            subject,
            semester,
            paperinfo: [test._id],
            owner: ownerId

        });

console.log(papers)

        //         console.log(req.file);
        // console.log(req.body);


        return res.status(201).json({
            message: 'Paper data saved successfully',
            paperinfo: test,
            papers
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: err.message
        });
    }
};

export default papertest;






const filterPapers = (req, res) => {
  const { year, Branch } = req.params;

  try {
    let semesters = [];

    if (Number(year) === 1) {
      semesters = [1, 2];
    } else if (Number(year) === 2) {
      semesters = [3, 4];
    } else if (Number(year) === 3) {
      semesters = [5, 6];
    } else if (Number(year) === 4) {
      semesters = [7, 8];
    } else {
      return res.status(400).json({
        message: "Invalid year"
      });
    }

    res.json({
      year: Number(year),
      Branch,
      semesters
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export { filterPapers };






 const getyear = async(req,res)=>{
    const {year} = req.params;
try{
    const getyears = await  paper.find({
        year:year
    })
    console.log(getyears);
    
        res.json({ getyears, year:year });

}catch(err){
    console.log(err)
}
}

export {getyear};


const printpaper = async(req,res)=>{
let {year,Branch,semester} = req.params;

try{
    let data = await paper.find({
          year: Number(year),
    Branch: Branch,
    semester: Number(semester),
    
}).populate("paperinfo").populate("owner");
    console.log(data)
    res.status(200).json({ data,year,Branch,semester});


}catch(err){
    console.log(err);
    res.status(400).json({message:"message not foud"});
}
}

export {printpaper}






// const printpaper = async (req, res) => {

//     let { year, Branch, semester, subject } = req.params;

//     try {

//         let data = await paper.find({
//             year: year,
//             Branch: Branch,
//             semester: Number(semester),
//             subject: subject
//         })
//         .populate("paperinfo")
//         .populate("owner");

//         console.log(data);

//         res.status(200).json({
//             data,
//             year,
//             Branch,
//             semester
//         });

//     } catch (err) {
//         console.log(err);
//         res.status(400).json({ message: "Message not found" });
//     }
// };

// export { printpaper };


// update route 

// const updateroute=  async(req,res)=>{
//   const {id} = req.params;
//   try{
//     const update = await paper.findByIdAndUpdate(id,req.body, { returnDocument: "after" })
//     console.log(update)

//         if (!update) {
//       return res.status(404).json({
//         message: "Paper not found"
//       });
//     }


//     res.status(200).json({message:"Data update successfully"});

//   }catch(err){
//     console.log(err);
//     return res.status(400).json({message:"somethin went wrong"})
//   }
// }


// export {updateroute}



export const updateroute = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await paper.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Paper not found" });
    }

    res.status(200).json({
      message: "Paper updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update paper year and PDF
export const updatePaperInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = {};

    if (req.body.paperyear !== undefined) {
      data.paperyear = Number(req.body.paperyear);
    }

    if (req.file) {
      if (req.file.mimetype !== "application/pdf") {
        return res.status(400).json({
          message: "Only PDF allowed",
        });
      }

      data.pdf = req.file.path;
    }

    if (Object.keys(data).length === 0) {
      return res.status(400).json({
        message: "No data provided",
      });
    }

    const updated = await paperinfo.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({
        message: "Paper info not found",
      });
    }

    res.status(200).json({
      message: "Paper info updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// delete route 

export const  deleteroute = async(req,res)=>{
  try{
  const {id} = req.params;
  const del = await paper.findByIdAndDelete(id);
  console.log(del)

  res.status(200).json({message :"Data deleted successfully"});

  }catch(err){

    res.status(200).josn({message:"something went wrong"});
    console.log(err)
  }
}




// export const FilterSubject = async (req, res) => {
//   try {
//     const { year, Branch, semester, subject } = req.params;

//     const filsub = await paper.find({
//       year: Number(year),
//       Branch,
//       semester: Number(semester),
//       subject
//     });

//     res.status(200).json({
//       message: "Subject filtered successfully",
//       data: filsub
//     });

//   } catch (err) {
//     console.log(err);

//     res.status(500).json({
//       message: "Something went wrong"
//     });
//   }
// };



export const FilterSubject = async (req, res) => {
  try {
    const { year, Branch, semester, subject } = req.params;

    const filsub = await paper.find({
      year: Number(year),
      Branch,
      semester: Number(semester),
      subject
    })
    .populate("paperinfo")
    .populate("owner");

    console.log(filsub);

    res.status(200).json({
      message: "Subject filtered successfully",
      data: filsub
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Something went wrong"
    });
  }
};




export const getCurrentUser = async (req, res) => {
    res.status(200).json({
        user: {
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email
        }
    });
};