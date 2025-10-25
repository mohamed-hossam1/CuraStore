"use client"

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function AuthForm() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
    setApiError('');
    formik.resetForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const signUpValidationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .required('Password is required')
  });

  const signInValidationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
  });

  const onSubmit = async (values) => {
    setIsPending(true);
    setApiError('');

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
          options: {
            data: {
              full_name: values.name,
            }
          }
        });

        if (error) throw error;

        router.push('/');
        router.refresh();

      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });

        if (error) throw error;
        console.log(data)

        router.push('/');
        router.refresh();
      }

    } catch (error) {
      console.error('Auth error:', error);
      setApiError(error.message || 'An error occurred');
    } finally {
      setIsPending(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: isSignUp ? signUpValidationSchema : signInValidationSchema,
    onSubmit
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-6xl h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        <div 
          className={`absolute top-0 left-0 w-2/3 h-full p-12 pr-0 flex flex-col justify-center transition-all duration-1000 ${
            isSignUp ? 'translate-x-[50%]' : 'translate-x-0'
          }`}
        >
          <form onSubmit={formik.handleSubmit} className="space-y-4 flex justify-center flex-col items-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 transition-all duration-1000 text-center">
              {isSignUp ? "Create Account" : "Sign in to Website"}
            </h2>

            {apiError && (
              <div className="w-2/3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {apiError}
              </div>
            )}

            <input 
              name="name"
              id="name"
              value={formik.values.name} 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
              type="text" 
              placeholder="Name" 
              className={`w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 transition-colors ${!isSignUp && "hidden"}`}
            />
            {formik.touched.name && formik.errors.name && isSignUp && (
              <p className="text-red-500 text-sm self-start ml-[16.666%]">{formik.errors.name}</p>
            )}

            <input 
              id="email"
              value={formik.values.email} 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
              name='email'
              type="email" 
              placeholder="Email" 
              className="w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 transition-colors"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm self-start ml-[16.666%]">{formik.errors.email}</p>
            )}

            <div className="relative w-2/3">
              <input 
                id="password"
                name='password'
                value={formik.values.password} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                type={showPassword ? "text" : "password"}
                placeholder="Password" 
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 transition-colors"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm self-start ml-[16.666%]">{formik.errors.password}</p>
            )}

            <a 
              href="#" 
              className={`block text-sm text-gray-600 hover:text-sky-500 transition-colors ${isSignUp && "hidden"}`}
            >
              Forgot your password?
            </a>

            <button 
              type="submit"
              disabled={isPending}
              className={`w-2/3 py-3 text-white rounded-lg font-bold transition-colors mt-6 ${
                isPending ? "bg-gray-400 cursor-not-allowed" : "bg-sky-500 hover:bg-sky-700"
              }`}
            >
              {isPending ? (
                <div role="status" className="flex items-center justify-center gap-2">
                  <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span>Loading...</span>
                </div>
              ) : (
                isSignUp ? "SIGN UP" : "SIGN IN"
              )}
            </button>
          </form>
        </div>
          
        <div 
          className={`absolute top-0 h-full w-1/3 bg-gradient-to-br from-sky-600 to-sky-500 transition-all duration-1000 ${
            isSignUp ? '' : 'translate-x-[200%]'
          } z-30`}
        >
          <div className="h-full flex flex-col items-center justify-center p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              {isSignUp ? "Welcome Back!" : "Hello Friend!"}
            </h2>
            <p className="text-center mb-8 opacity-90">
              {isSignUp 
                ? "To keep connected with us please login with your personal info!" 
                : "Enter your personal details and start journey with us!"}
            </p>
            <button 
              onClick={handleSwitch}
              className="px-8 py-3 border-2 border-white rounded-full font-bold hover:bg-white hover:text-sky-600 transition-all"
            >
              {isSignUp ? "SIGN IN" : "SIGN UP"}
            </button>
          </div>

          <div className={`absolute w-96 h-96 bg-white opacity-10 rounded-full transition-all duration-1000 -bottom-48 -right-48 ${
            isSignUp ? '-translate-x-100' : 'translate-x-0'
          }`} />
          <div className={`absolute w-64 h-64 bg-white opacity-5 rounded-full transition-all duration-1000 -top-32 -right-32 ${
            isSignUp ? 'translate-x-0' : '-translate-x-100'
          }`} />
        </div>
      </motion.div>
    </div>
  );
}