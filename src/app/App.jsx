// src/App.jsx
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import SelectPage from "../pages/SelectPage/index.jsx";
import CardSelect from "../pages/CardSelect/index.jsx";
import ReadingPage from "../pages/ReadingPage/index.jsx";
import '../shared/styles/App.css';
import {FortuneProvider} from "../features/model/FortuneContext.jsx";


export default function App() {

    return (
        <Router>
            <FortuneProvider>
                <Routes>
                    <Route path="/" element={<SelectPage/>}/>
                    <Route path="/select" element={<CardSelect/>}/>
                    <Route path="/reading" element={<ReadingPage/>}/>
                    <Route path="*" element={<Navigate to="/select" replace/>}/>
                </Routes>
            </FortuneProvider>
        </Router>
    );
}
