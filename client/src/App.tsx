import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MultiPageForm from './components/MultiPageForm'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form/:page" element={<MultiPageForm />}>
        </Route>
      </Routes>
    </>
  )
}
