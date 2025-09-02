import React from "react";

const PreviewCard = () => {
  return (
    <div className="bg-gray-100 w-full block border rounded shadow p-5">
      <div className="bg-white p-4 flex flex-row gap-2">
        <img src="assets/avathar.png" alt="Avathar Image" width="10%" />
        <div className="flex flex-col">
          <p className="font-bold text-2xl mt-1">JEYABALAN THAVAMANI</p>
          <p className=" mt-1">Email: giribala14@gmail.com</p>
          <p className=" mt-1">Phone Number: +91-9629622960</p>
          <div className="flex flex-row gap-1  mt-1">
            <p>Website:</p>
            <a
              href="http://linkedin.com/jeyabalant"
              
              className="underline text-blue-600"
            >
              http://linkedin.com/jeyabalant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
