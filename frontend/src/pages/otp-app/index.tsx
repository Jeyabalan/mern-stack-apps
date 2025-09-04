import React from "react";

const otpChatLength = 4;

const OTPAppPage = () => {
  return (
    <div className="flex flex-col min-w-full min-h-screen">
      <header className="font-bold text-blue-500 text-2xl text-center">
        OTP PAGE
      </header>
      <div className="flex flex-row gap-4 justify-center">
        {new Array(otpChatLength).fill(undefined).map(() => (
          <input
            type="text"
            pattern="[0-9]*"
            maxLength={1}
            className="border rounded shadow p-2 w-[60px] h-[60px] mt-10 text-center font-bold text-2xl"
          />
        ))}
      </div>
      <div className="flex flex-row gap-2 justify-center mt-10">
        <button className="bg-gray-400 text-white font-bold rounded shadow border p-2 w-[100px] hover:bg-gray-500">
          Clear
        </button>
        <button className="bg-blue-500 text-white font-bold rounded border shadow p-2 w-[100px] hover:bg-blue-600">
          Validate
        </button>
      </div>
    </div>
  );
};

export default OTPAppPage;
