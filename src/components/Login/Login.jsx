import React from 'react'

function Login() {
  return (
    <div className=' container lg:w-[60rem] h-full ml-[2.5%]'>
      <div className="container mx-auto -300 p-4">
        <form className="space-y-4">
            <label className="block text-sm font-bold mb-2" htmlFor="firstName">
             Name<span className='text-red-500'>*</span>
            </label>
          <div className='flex w-full '>
            <div className='w-[50%]'>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="mr-2 shadow border rounded w-[95%]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="block text-sm  mb-2" htmlFor="firstName">
              First Name
            </label>
            </div>
          <div className='w-[50%]'>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="block text-sm  mb-2" htmlFor="lastName">
              Last Name 
            </label>
          </div>
          </div >
          <div >
            <label className="block text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number<span className='text-red-500'>*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email<span className='text-red-500'>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="email">
            Address/State
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="email">
            Message/Comment<span className='text-red-500'>*</span>
            </label>
            <textarea
              type="email"
              id="email"
              name="email"
              required
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        <div className='w-full flex '>    
          <button
            type="submit"
            className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
            Send Message
          </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login

  