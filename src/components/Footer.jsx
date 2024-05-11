import React, { useState } from "react";
import validator from "validator";


function Footer() {
  
    const [message, setMessage] = useState("");
    const validateEmail = (e) => {
      const email = e.target.value;
  
      if (!validator.isEmail(email)) {
        setMessage("Enter a v-alid email");
      }
      else{
        setMessage("")
      }
    };
  return (
    <div className="flex flex-col gap-6">
      <span className="text-2xl font-extrabold text-center text-white p-14 md:p-5">
        Get notified when we launch
      </span>
      <div className="  flex flex-col gap-6 md:flex-row md:items-center md:justify-center ">
      <div className="relative">
                    <input
                        className="rounded-full bg-secondary p-3 pl-10 pr-16 outline-none focus:ring-2 focus:ring-green-500 md:max-w-80 md:w-full"
                        placeholder="Email address"
                        
                        onChange={(e) => validateEmail(e)}
                    />
                    {message && (
                        <p className="absolute text-red-500 text-sm top-0 left-1/4 -mt-8 mr-3">{message}</p>
                    )}
                </div>

        <button className="border-2 border-primary rounded-full bg-primary text-background font-extrabold p-3 cursor-pointer hover:bg-transparent hover:text-white">
          Get notified
        </button>
      </div>
    </div>
  );
}

export default Footer;
