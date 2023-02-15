import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import BlockCreate from "../pages/BlockCreate";
import SelfWork from "../pages/SelfWork";
import LabRab from "../pages/LabRab";
import HomeWork from "../pages/HomeWork";
import Main from "../pages/Main";
import PracticeWork1 from "../pages/PracticeWork1";
import LR3 from "../pages/LR3";
import Exam from "../pages/Exam";
import Question1 from "../pages/Question1";
import Question2 from "../pages/Question2";

const Routing = () => {
    return (
        <Routes>
            <Route path="/block" element={<BlockCreate/>}/>
            <Route path="/homework" element={<HomeWork/>}/>
            <Route path="/laboratory" element={<LabRab/>}/>
            <Route path="/selfwork" element={<SelfWork/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/practice" element={<PracticeWork1/>}/>
            <Route path='/LR3' element={<LR3/>}/>
            <Route path='/Exam' element={<Exam/>}/>
            <Route path='/Question1' element={<Question1/>}/>
            <Route path='/Question2' element={<Question2/>}/>
            <Route path="*" element={<Navigate replace to="/main"/>}/>
        </Routes>
    );
};

export default Routing;