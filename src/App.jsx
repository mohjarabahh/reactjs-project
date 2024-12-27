// React Router DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Bootstrap
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

// Components
import Navbar from "./Componenets/Navbar"

// Pages
import Enterprise from "./Pages/Enterprise"
import Features from "./Pages/Features"
import Support from "./Pages/Support"
import Pricing from "./Pages/Pricing"

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route index element={<Pricing />} />
                <Route path="features" element={<Features />} />
                <Route path="support" element={<Support />} />
                <Route path="enterprise" element={<Enterprise />} />
            </Routes>

        </Router>
    )
}

export default App
