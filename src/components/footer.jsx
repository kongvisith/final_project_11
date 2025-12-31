import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-900 text-white font-sans">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between py-12 px-4 gap-10 items-center lg:items-start">
          <div className="flex flex-col justify-start items-center lg:items-start space-y-8 w-full lg:w-[1080px]">
            <a href="/">
              <div className="flex items-center space-x-3 w-full">
                <img src={logo} alt="" width={40} height={40} />
                <p className="text-[26px] font-bold text-white">P-Service</p>
              </div>
            </a>

            <div className="flex items-center space-x-4">
              <p className="text-[16px] text-gray-400">Follow us on</p>

              <a href="https://www.facebook.com" aria-label="Facebook page">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.75 10C18.75 5.16701 14.833 1.25 10 1.25C5.16701 1.25 1.25 5.16701 1.25 10C1.25 14.3682 4.44922 17.9878 8.63281 18.6441V12.5293H6.41111V10H8.63281V8.07227C8.63281 5.87962 9.93849 4.66797 11.938 4.66797C12.895 4.66797 13.8965 4.83887 13.8965 4.83887V6.99219H12.7925C11.7056 6.99219 11.3672 7.66725 11.3672 8.35938V10H13.7939L13.406 12.5293H11.3672V18.6441C15.5508 17.9878 18.75 14.3682 18.75 10Z"
                    fill="#0866FF"
                  />
                  <path
                    d="M13.406 12.5293L13.7939 10H11.3672V8.35938C11.3672 7.66725 11.7056 6.99219 12.7925 6.99219H13.8965V4.83887C13.8965 4.83887 12.895 4.66797 11.938 4.66797C9.93851 4.66797 8.63283 5.87962 8.63283 8.07227V10H6.41113V12.5293H8.63283V18.6441C9.07886 18.7141 9.53517 18.75 10 18.75C10.4649 18.75 10.9212 18.7141 11.3672 18.6441V12.5293H13.406Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a href="https://whatsapp.com" aria-label="WhatsApp">
                <img
                  src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
                  width="24"
                  height="24"
                  alt="whatsapp"
                />
              </a>

              <a href="https://www.linkedin.com/company" aria-label="LinkedIn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                      fill="#0B66C2"
                    />
                  </g>
                  <defs>
                    <clipPath id="">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start space-y-3 lg:w-[200px]">
            <div className="flex flex-row lg:flex-col items-center lg:items-start lg:space-y-3 gap-3 lg:gap-0">
              <a href="#">
                <p className="text-sm text-gray-400">Home</p>
              </a>
              <a href="#">
                <p className="text-sm text-gray-400">Products</p>
              </a>
              <a href="#">
                <p className="text-sm text-gray-400">About Us</p>
              </a>
              <a href="#">
                <p className="text-sm text-gray-400">Contact Us</p>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700">
          <div className="py-6 px-4 max-w-7xl mx-auto">
            <p className="text-sm text-gray-400 text-center">
              © <span id="year"></span>P-Service. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
