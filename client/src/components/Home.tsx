import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="border-2 border-black flex flex-col justify-center items-center w-screen h-screen mx-auto">
      <h1>Resumate</h1>
      <p>Welcome to Resumate! Generate content that is customized for the role to which you are applying.</p>
      <button>
        <Link to="/form/personal">Begin Form</Link>
      </button>
    </div>
  );
}
