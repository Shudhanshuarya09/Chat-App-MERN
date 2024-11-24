import GenderCheckbox from "./GenderCheckBox";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-1lg shadow-md Blbg-gray-40@ bg-clip-padding backdrop-filter
  backdrop-blur-1g bg-opacity-0">
        <h1 className="text-3x1 font-semibold text-center Mltext-gray-3e0">
          Sign Up <span className="Mtext-blue-568"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Shudhanshu Arya"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label class="label">Email</label>
            <input
              type="text"
              placeholder="arya@example.com"
              class="full input input-bordered"
            />
          </div>
          <div>
            <label class="label">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              class="full input input-bordered"
            />
          </div>

          <div>
            <label class="label">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              class="full input input-bordered"
            />
          </div>
          <GenderCheckbox />
          <Link to={'/login'}
            className="tecxt-sm hover:underline hover:text-blue-600 mt-2 inline-block "
            >
            Already have an account ?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Sign UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
