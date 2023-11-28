import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="border-2 border-black flex flex-col justify-start items-center w-screen h-screen mx-auto">
      <div className="m-12 p-12 text-center underline underline-offset-4 decoration-2 text-xl/6 md:text-2xl/7 lg:text-3xl/8 tracking-tighter font-semibold subpixel-antialiased">
        Resumate
      </div>
      <div className="w-full mx-auto max-w-xs md:max-w-sm lg:max-w-md text-sm/4 sm:text-base/5 md:text-lg/6 lg:text-xl/7 tracking-tighter font-light subpixel-antialiased">
        Welcome to Resumate! Generate content that is customized for the role to which you are applying.
      </div>
      <span className="w-full mx-auto max-w-xs md:max-w-sm lg:max-w-md text-sm/4 sm:text-base/5 md:text-lg/6 lg:text-xl/7 tracking-tighter font-light subpixel-antialiased">The button below will take you to a form where you will enter your academic and professional information as well as any projects that you have participated on in the past and any tools that are part of your stack. All of this information will help Resumate to more closely generate content that is relevant to your personal information.</span>
      <button className="">
        <Link to="/form/personal" className="">Go to Form</Link>
      </button>
    </div>
  );
}
