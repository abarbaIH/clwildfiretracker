import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";

const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<h1>Error 404</h1>} />

            </Routes>
        </Router>
    )
}

export default AppRoutes;