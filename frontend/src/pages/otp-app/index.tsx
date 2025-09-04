import React, { useEffect, useRef, useState } from "react";

const otpChatLength = 4;

const OTPAppPage = () => {
  const [otpText, setOtpText] = useState<string[]>(
    Array(otpChatLength).fill("")
  );
  const [otpScreenVisible, setOtpScreenVisible] = useState<boolean>(false);
  const [isOtpValid, setIsOtpValid] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState<number>(1);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const onOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.currentTarget.value;
    if ((+value >= 0 && +value <= 9) || value === "") {
      const newOtpText = [...otpText];
      newOtpText[index] = value;
      setOtpText(newOtpText);
      setTabIndex(tabIndex < 4 ? tabIndex + 1 : 4);
    } else return;
  };

  useEffect(() => {
    console.log(tabIndex);
    inputRefs.current[tabIndex]?.focus();
  }, [tabIndex]);

  const validateOTP = () => {
    console.log("otp validate");
  };

  const clearOTPFields = () => {
    setOtpText(Array(4).fill(""));
    setTabIndex(1);
  };

  return (
    <div className="flex flex-col min-w-full min-h-screen">
      <header className="font-bold text-blue-500 text-2xl text-center">
        OTP PAGE
      </header>
      {otpScreenVisible ? (
        <div className="border shadow rounded max-w-full mx-auto p-12 m-10">
          <div className="flex flex-row gap-4 justify-center">
            {otpText.map((_, index: number) => (
              <input
                ref={(el) => {
                  inputRefs.current[index + 1] = el;
                }}
                key={index}
                type="text"
                maxLength={1}
                autoFocus={index === 0}
                tabIndex={index + 1}
                onChange={(e) => onOtpChange(e, index)}
                value={otpText[index]}
                className="border rounded shadow p-2 w-[60px] h-[60px] text-center font-bold text-2xl"
              />
            ))}
          </div>
          <div className="flex flex-row gap-2 justify-center mt-5">
            <button
              onClick={() => clearOTPFields()}
              className="bg-gray-400 text-white font-bold rounded shadow border p-2 w-[100px] hover:bg-gray-500"
            >
              Clear
            </button>
            <button
              onClick={() => validateOTP()}
              className="bg-blue-500 text-white font-bold rounded border shadow p-2 w-[100px] hover:bg-blue-600"
            >
              Validate
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOtpScreenVisible(true)}
          className="text-white font-bold border rounded shadow w-[200px] p-2 bg-blue-500 hover:bg-blue-600"
        >
          Send OTP
        </button>
      )}
    </div>
  );
};

export default OTPAppPage;
