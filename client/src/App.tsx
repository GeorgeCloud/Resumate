import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Form from './components/Form'
import Personal from './routes/multiPageForm/Personal'
import Education from './routes/multiPageForm/Education'
import Professional from './routes/multiPageForm/Professional'
import Projects from './routes/multiPageForm/Projects'
import Summary from './routes/multiPageForm/Summary'


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form/:page" element={<Form />}>
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
