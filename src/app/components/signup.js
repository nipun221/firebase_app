import { useState } from "react";
import { UseUserAuth } from "../contexts/UserAuth";
import { useRouter } from "next/navigation";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { signUp } = UseUserAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signUp(email, password);
            router.push('/');
        } catch (error) {
            setError(error.message);
        }
    };
    return (
      <section>
          <div className='bg-gray-50 dark:bg-gray-900'>
              <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Sign up as a new user
                      </h1>
                      {error && <p className="text-sm font-medium text-red-500">{error}</p>}
                      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                          <div>
                              <label htmlFor="email" className="font-semibold block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                              <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' name='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                          </div>
                          <div>
                              <label htmlFor="password" className="font-semibold block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                              <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' name='password' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                          </div>
                          <button type='submit' className='w-full text-white bg-[#2563eb] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#2563eb] dark:hover:bg-[#1d4ed8] dark:focus:ring-[#1e40af]'>Sign up</button>
                          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                              Already have an account? <a href="/" className="font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]">Login</a>
                          </p>
                      </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
  
  export default Signup