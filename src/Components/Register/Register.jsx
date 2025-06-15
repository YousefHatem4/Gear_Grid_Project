import axios from 'axios';
import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { userContext } from '../Context/UserContext';
import toast from 'react-hot-toast';


export default function Register() {
  let navigate = useNavigate();
  useEffect(() => {
    document.title = 'Sign Up'
  }, [])
  const [showPassword, setShowPassword] = useState(false);

  let { setUserToken } = useContext(userContext);

  async function register(values) {
    try {
      let { data } = await axios.post(
        'https://azmycarsapi.runasp.net/api/Identity/register',
        values
      );
      toast.success('Account created successfully!');
      navigate('/login');
      setUserToken(data.token);
      localStorage.setItem('userToken', data.token);
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Registration failed. Please try again.');
    }
  }



  const validationSchema = Yup.object({
    FirstName: Yup.string()
      .min(2, 'First name must be at least 2 characters')
      .required('First name is required'),

    LastName: Yup.string()
      .min(2, 'Last name must be at least 2 characters')
      .required('Last name is required'),

    Email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),

    PhoneNumber: Yup.string()
      .matches(/^[0-9\s-]{10,}$/, 'Phone number must be at least 10 digits and contain only numbers, spaces or dashes')
      .required('Phone number is required'),


    Password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[\W_]/, 'Password must contain at least one special character')
      .required('Password is required'),
  });


  const formik = useFormik({
    initialValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      PhoneNumber: '',
    },
    onSubmit: register,
    validationSchema
  });

  return (
    <div className="min-h-screen w-full bg-[url('/car-about.jpg')]  bg-cover bg-center bg-no-repeat flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 px-4 py-15">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
        <div className="bg-black py-4 px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
            Join <span className="text-yellow-300">GearGrid</span> Today
          </h2>
          <p className="text-center text-blue-100 mt-1">Start your automotive journey</p>
        </div>

        <div className="p-6 sm:p-8">
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">First Name*</label>
                <input
                  name="FirstName"
                  value={formik.values.FirstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder="John"
                  className={`w-full px-4 py-3 border ${formik.touched.FirstName && formik.errors.FirstName ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                />
                {formik.touched.FirstName && formik.errors.FirstName && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.FirstName}</p>
                )}
              </div>

              <div className="w-full md:w-1/2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name*</label>
                <input
                  name="LastName"
                  value={formik.values.LastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder="Doe"
                  className={`w-full px-4 py-3 border ${formik.touched.LastName && formik.errors.LastName ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                />
                {formik.touched.LastName && formik.errors.LastName && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.LastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email*</label>
              <input
                name="Email"
                value={formik.values.Email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                placeholder="you@example.com"
                className={`w-full px-4 py-3 border ${formik.touched.Email && formik.errors.Email ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
              />
              {formik.touched.Email && formik.errors.Email && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.Email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number*</label>
              <input
                name="PhoneNumber"
                value={formik.values.PhoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="tel"
                placeholder="+1234567890"
                className={`w-full px-4 py-3 border ${formik.touched.PhoneNumber && formik.errors.PhoneNumber ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
              />
              {formik.touched.PhoneNumber && formik.errors.PhoneNumber && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.PhoneNumber}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Password*</label>
              <div className="relative">
                <input
                  name="Password"
                  value={formik.values.Password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type={showPassword ? "text" : "password"}
                  placeholder="123456yY"
                  className={`w-full px-4 py-3 border ${formik.touched.Password && formik.errors.Password ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {showPassword ? (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </>
                    ) : (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
              {formik.touched.Password && formik.errors.Password ? (
                <p className="text-red-500 text-xs mt-1">{formik.errors.Password}</p>
              ) : (
                <p className="mt-1 text-xs text-gray-500">
                  Password must be at least 8 characters with 1 uppercase letter and 1 number
                </p>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-yellow-500 hover:underline">Terms of Service</a> and <a href="#" className="text-yellow-500 hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full bg-gradient-to-r from-black/100 to-yellow-300 text-white py-3 px-4 rounded-lg hover:from-yellow-300 hover:to-black/100 transition duration-300 shadow-md flex items-center justify-center mt-4 disabled:opacity-70"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              {formik.isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-yellow-500 hover:text-yellow-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}