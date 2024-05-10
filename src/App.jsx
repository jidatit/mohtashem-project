import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToHashElement from './components/ScrollToSection'
import LandingPage from './pages/LandingPage'
import RaidsPage from './pages/RaidsPage'
import CusLayout from './pages/CusLayout'

function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<CusLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="raids" element={<RaidsPage />} />
          </Route>

        </Routes>
        <ScrollToHashElement/>
      </Router>
    </>
  )
}

export default App
