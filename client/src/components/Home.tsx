import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-2xl border-2 border-black flex flex-col justify-start items-center w-screen h-screen mx-auto p-8">
      <div className="py-8 text-center underline underline-offset-4 decoration-2 text-5xl/8 font-light tracking-tighter subpixel-antialiased">
        Resumate
      </div>

      <div className="w-full h-96 mx-auto flex flex-col justify-between items-center px-10">
        <p className="my-4 text-center text-base/4 sm:text-lg/5 md:text-xl/6 lg:text-2xl/7 tracking-tighter font-light subpixel-antialiased">Welcome to Resumate!</p>
        <p className="text-center text-base/4 sm:text-lg/5 md:text-xl/6 lg:text-2xl/7 tracking-tighter font-light subpixel-antialiased">Generate content that is customized for the role to which you are applying.</p>
        <p className="text-center text-base/4 sm:text-lg/5 md:text-xl/6 lg:text-2xl/7 tracking-tighter font-light subpixel-antialiased">The button below will take you to a form where you will enter information. Resumate will generate the content based on your personal information.</p>
      </div>
      <button className="my-6">
        <Link to="/form/personal">Enter Form</Link>
      </button>

      <button className="my-6">
        <Link to="/intake">Paste Job</Link>
      </button>
    </div>
  );
}
