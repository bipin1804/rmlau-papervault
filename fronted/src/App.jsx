import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Branch from './pages/branch'
import Paper from './pages/paper'
import Semester from './pages/semester'
import Year from './pages/year'
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Signup from "./auth/Signup";
import Viewpaper from "./pages/viewpaper";
import Edit from "./pages/edit";
import Delete from "./pages/delete";
import Subject from "./pages/subject";
import About from './pages/About'
// import {ContextproviderRoute} from "./context/Protectroute";
// import Contextprovider from "./context/context";

import ProtectRoute from "./auth/protectRoute";

function App() {

  return (
  

    <div className="flex flex-col min-h-screen">

 
    <BrowserRouter >

    <Navbar/>

    <main className="flex-1">
    <Routes>

        <Route path = "/signup" element={<Signup/>}/>
        <Route path="/" element={<Home/>} />
        <Route path="/branch" element={<Branch/>}/>

<Route element={<ProtectRoute />}>
        <Route path="/paper" element={<Paper/>}/>
</Route>

<Route  path="/edit" element ={<Edit/>}/>
<Route path="/delete" element={<Delete/>}/>

        <Route path="/semester" element={<Semester/>}/>
        <Route path="/year" element={<Year/>}/>
        <Route path ="subject" element={<Subject/>}/>
        <Route path="/viewpaper" element={<Viewpaper/>}/>
                <Route path="/About" element={<About/>}/>


    </Routes>
</main>
    <Footer/>
    
    </BrowserRouter>

     
</div>
  )
}

export default App
