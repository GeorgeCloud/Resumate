import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Home Route</div>
      <h1>Resumate</h1>
      <button>
        <Link to="/form/personal">Begin Form</Link>
      </button>
    </>
  )
}
