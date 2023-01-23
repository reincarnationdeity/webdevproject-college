import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import BlockCreate from "../pages/BlockCreate";
import SelfWork from "../pages/SelfWork";
import LabRab from "../pages/LabRab";
import HomeWork from "../pages/HomeWork";
import Main from "../pages/Main";
import PracticeWork1 from "../pages/PracticeWork1";

const Routing = () => {
    return (
        <Routes>
            <Route path="/block" element={<BlockCreate/>}/>
            <Route path="/homework" element={<HomeWork/>}/>
            <Route path="/laboratory" element={<LabRab/>}/>
            <Route path="/selfwork" element={<SelfWork/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/practice" element={<PracticeWork1/>}/>
            <Route path="*" element={<Navigate replace to="/main"/>} />
        </Routes>
    );
};

export default Routing;