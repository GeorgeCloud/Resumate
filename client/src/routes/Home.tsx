import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Resumate</h1>
      <button>
        <Link to="/form/personal">Begin Form</Link>
      </button>
    </>
  )
}
