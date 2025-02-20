import { Link } from "react-router-dom";
import Login from "./Login";

function SignUp() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]  ">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            </form>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Sign Up</h3>
              <div>
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 border rounded-md outline-none my-2"
                />
              </div>
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
                <button className="btn btn-secondary btn-sm">Sign Up</button>
                <p>
                  Have account?{" "}
                  <button
                
                    className="underline text-blue-500 cursor-pointer"
                    onClick={()=>document.getElementById("my_modal_3").showModal()}
                  >
                    Login!
                  </button>
                  <Login/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
