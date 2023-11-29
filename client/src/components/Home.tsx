import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="border-2 border-black flex flex-col justify-start items-center w-screen h-screen mx-auto">
      <div className="p-8 text-center underline underline-offset-4 decoration-2 text-xl/6 md:text-2xl/7 lg:text-3xl/8 tracking-tighter font-semibold subpixel-antialiased">
        Resumate
      </div>

      <div className="w-full h-96 p-4 mx-auto max-w-3xl flex flex-col justify-between items-center">
        <p className="my-4 text-center text-base/4 sm:text-lg/5 md:text-xl/6 lg:text-2xl/7 tracking-tighter font-light subpixel-antialiased">Welcome to Resumate!</p>
        <p className="my-4 p-4 text-base/4 sm:text-lg/5 md:text-xl/6 lg:text-2xl/7 tracking-tighter font-light subpixel-antialiased">Generate content that is customized for the role to which you are applying.</p>
        <p className="max-w-xl w-full mx-auto text-sm/4 sm:text-base/5 md:text-lg/6 lg:text-xl/7 tracking-tighter font-light subpixel-antialiased">The button below will take you to a form where you will enter information. Resumate will generate the content based on your personal information.</p>
      </div>
      <button>
        <Link to="/form/personal" className="">Go to Form</Link>
      </button>
    </div>
  );
}
