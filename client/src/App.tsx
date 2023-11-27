import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import
UserInformationForm
  from './components/userinformationform/UserInformationForm'
import Intake from './components/intake/Intake'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form/:page" element={<UserInformationForm />} />
        <Route path="/intake" element={<Intake />} />
      </Routes>
    </>
  )
}
