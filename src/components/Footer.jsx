import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-16 font-sans tracking-wide mt-20">
      <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p className="text-[15px] leading-loose">© 2024<a target='_blank'
          className="hover:underline mx-1">RepLookup</a>All Rights Reserved.</p>

        <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
          <li><a href="javascript:void(0)" className="text-[15px] hover:text-white">Terms of Service</a></li>
          <li><a href="javascript:void(0)" className="text-[15px] hover:text-white">Privacy Policy</a></li>
          <li><a href="javascript:void(0)" className="text-[15px] hover:text-white">Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer