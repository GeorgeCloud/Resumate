import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import UserInfoForm from './components/userinfo/UserInfoForm'
import Intake from './components/intake/Intake'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form/:page" element={<UserInfoForm />} />
        <Route path="/intake" element={<Intake />} />
      </Routes>
    </>
  )
}
