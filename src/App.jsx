import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToHashElement from './components/ScrollToSection'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<LandingPage />}>
            <Route index element={<LandingPage />} />
          </Route>

        </Routes>
        <ScrollToHashElement/>
      </Router>
    </>
  )
}

export default App
