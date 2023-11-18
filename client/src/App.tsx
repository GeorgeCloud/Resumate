import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MultiPageForm from './components/MultiPageForm'
import Personal from './components/Personal'
import Education from './components/Education'
import Professional from './components/Professional'
import Projects from './components/Projects'
import Summary from './components/Summary'


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form/:page" element={<MultiPageForm />}>
          <Route path="personal" element={<Personal />} />
          <Route path="education" element={<Education />} />
          <Route path="professional" element={<Professional />} />
          <Route path="projects" element={<Projects />} />
          <Route path="summary" element={<Summary />} />
        </Route>
      </Routes>
    </>
  )
}
