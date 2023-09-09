import { useState } from 'react';
import { UseUserAuth } from '../contexts/UserAuth';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { logIn, googleSignIn } = UseUserAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            router.push('/home');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
          await googleSignIn();
          router.push("/home");
        } catch (error) {
          console.log(error.message);
        }
    };
    
  return (
    <section>
        <div className='bg-gray-50 dark:bg-gray-900'>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login in to your account
                    </h1>
                    {error && <p className="text-sm font-medium text-red-500">{error}</p>}
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div className="px-6 sm:px-0 max-w-sm">
                            <button type="button" onClick={handleGoogleSignIn} className="text-white w-full  bg-[#2563eb] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:hover:bg-[#1d4ed8] dark:focus:ring-[#1e40af] mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign in with Google<div></div></button>
                        </div>
                        <h1 className="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-gray-400
                            after:inline-block after:relative after:align-middle after:w-1/3 
                            before:bg-gray-400 before:inline-block before:relative before:align-middle 
                            before:w-1/3 before:right-2 after:left-2 text-xl p-4">or
                        </h1>
                        <div>
                            <label htmlFor="email" className="font-semibold block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' name='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                        </div>
                        <div>
                            <label htmlFor="password" className="font-semibold block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' name='password' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                        </div>
                        <button type='submit' className='w-full text-white bg-[#2563eb] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#2563eb] dark:hover:bg-[#1d4ed8] dark:focus:ring-[#1e40af]'>Log in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="/signup" className="font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]">Sign up</a>
                        </p>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login