import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link >
          </form>
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Login</h3>
            <div>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md outline-none my-2"
              />
            </div>
            <div>
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter you password"
                className="w-80 px-3 border rounded-md outline-none my-2"
              />
            </div>
            <div className="flex justify-between">
                <button className="btn btn-secondary btn-sm">Login</button>
                <p>Not registered?{" "} <Link to={"/sign"} className="underline text-blue-500 cursor-pointer"  >SignUp!</Link ></p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Login;
