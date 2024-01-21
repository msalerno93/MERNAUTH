import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4 ">
        <input type="text" placeholder="Username" id="username" className="bg-slate-100 p-3 rounded-lg" />
        <input type="email" placeholder="Email" id="email" className="bg-slate-100 p-3 rounded-lg" />
        <input type="password" placeholder="Password" id="password" className="bg-slate-100 p-3 rounded-lg" />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase font-bold hover:opacity-90 disabled:opacity-70 text-xl">Sign Up</button>
      </form>
      <div className="flex gap-3 pt-4">
        <p>Have an account? </p>
        <Link to='/signin'>
        <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp