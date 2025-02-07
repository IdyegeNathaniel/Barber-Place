import { ChangeEvent, FormEvent, useState } from "react"


export interface UserData {
  name: string;
  mail: string;
  password: string; 
}

const LoginPage: React.FC = () => {

  const [state, setState] = useState("Sign Up");

  const [userData, setUserData] = useState<UserData>({
    name: '',
    mail: '',
    password: ''
  }) 


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {}

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className="bg-zinc-800 px-8 md:px-12 py-2">
      <form onSubmit={handleSubmit} className="min-h-[80vh] flex items-center my-10">
        <div className="flex flex-col gap-6 m-auto items-start p-8 border min-w-[340ox] sm:min-w-96 rounded-xl text-white text-sm shadow-lg">
          <p className="text-2xl font-semibold ">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </p>
          <p>
            Please {state === "Sign Up" ? "sign up" : "Log in"} to book
            appointment
          </p>
          {state === "Sign Up" && (
            <div className="w-full">
              <p>Full Name</p>
              <input
                type="text"
                onChange={handleInputChange}
                value={userData.name}
                name="name"
                className="w-full border border-zinc-300 mt-1 p-2 rounded"
                required
              />
            </div>
          )}
          <div className="w-full">
            <p>Email</p>
            <input
              type="email"
              onChange={handleInputChange}
              value={userData.mail}
              name="email"
              className="w-full border border-zinc-300 mt-1 p-2 rounded"
              required
            />
          </div>
          <div className="w-full">
            <p>Password</p>
            <input
              type="password"
              onChange={handleInputChange}
              value={userData.password}
              name="password"
              className="w-full border border-zinc-300 mt-1 p-2 rounded"
              required
            />
          </div>
          <button className="bg-amber-500 text-white py-2 text-base rounded-md w-full">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </button>

          {state === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span
                className="text-amber-500 underline cursor-pointer"
                onClick={() => setState("Login")}
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create a new account?{" "}
              <span
                className="text-amber-500 underline cursor-pointer"
                onClick={() => setState("Sign Up")}
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </section>
  )
}

export default LoginPage