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
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
