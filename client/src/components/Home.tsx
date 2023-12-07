import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-2xl border-2 border-black flex flex-col justify-start items-center w-screen mx-auto p-8 m-8 shadow-sm">

      <div className="pt-8 pb-2 text-center underline underline-offset-4 decoration-2 text-3xl/9 font-light tracking-tighter subpixel-antialiased">Resumate</div>

      <p className="italic text-center text-base/5 tracking-tighter font-light subpixel-antialiased">Generate content that is customized for the role to which you are applying.</p>

      <div className="mt-6 w-full h-96 mx-auto flex flex-col justify-start items-center px-10">
        <p className="my-8 text-center text-xl/7 tracking-tighter subpixel-antialiased font-normal">Welcome to Resumate!</p>

        <p className="text-center text-lg/6 tracking-tighter font-light subpixel-antialiased mb-4">The &apos;Enter Form&apos; button below will take you to a form for you to enter information. Resumate will generate content based on your information.</p>

      </div>

      <div className="">
        <button className="m-6">
          <Link to="/form/personal">Enter Form</Link>
        </button>

        <button className="m-6">
          <Link to="/intake">Paste Job</Link>
        </button>
      </div>
    </div>
  );
}
