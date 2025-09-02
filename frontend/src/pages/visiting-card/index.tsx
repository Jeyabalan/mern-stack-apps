import React, { useEffect, useRef, useState } from "react";
import PreviewCard from "./preview-card";
import api from "../../axios-config";
import { Profile } from "../../interfaces";

const VisitingCard = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const getvisitingCard = async () => {
    await api.get("/profile").then((res) => setProfiles([...res.data]));
  };

  useEffect(() => {
    getvisitingCard();
  }, []);

  const clearForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    formRef.current?.reset();
  };

  const createVisitingCard = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const params = Object.fromEntries(formData.entries());
    await api.post("/profile", params);
    formRef.current?.reset();
    getvisitingCard();
  };

  return (
    <div className="flex flex-col gap-2">
      <header className="text-blue-600 font-bold text-2xl text-center">
        Visiting Card
      </header>
      <main className="flex flex-col gap-4">
        <form
          name="visitingcard-form"
          className="max-w-lg mx-auto mt-4 p-4 border rounded shadow"
          onSubmit={createVisitingCard}
          ref={formRef}
        >
          <div className="block mb-4">
            <label
              htmlFor="name"
              className="block text-md font-bold text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="mt-2 w-full block border-2 shadow rounded p-1.5 border-gray-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="block mb-4">
            <label htmlFor="email" className="block font-bold text-gray-700">
              Email:
            </label>
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="block w-full mt-2 border-2 rounded shadow p-1.5 border-gray-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="block mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-bold"
            >
              Phone Number:
            </label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Your Phone Number"
              className="mt-2 w-full border-2 rounded shadow p-1.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>
          {/* <div className="block mb-4">
            <label htmlFor="message" className="block font-bold text-gray-700">
              Message:
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              className="block w-full p-1.5 mt-2 border-2 rounded shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            ></textarea>
          </div> */}
          <div className="block mb-4">
            <label
              htmlFor="linkedInProfile"
              className="block font-bold text-gray-700"
            >
              Linked In Profile:
            </label>
            <input
              type="text"
              name="linkedInProfile"
              className="block w-full border-2 rounded shadow p-1.5 mt-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="block mb-4">
            <label htmlFor="image" className="block font-bold text-gray-700">
              Upload Your Image:
            </label>
            <input
              name="image"
              type="file"
              accept="image/*"
              className="mt-2 w-full border-2 rounded shadow p-1.5"
            ></input>
          </div>
          <div className="flex flex-row gap-2 justify-end">
            <button
              onClick={clearForm}
              className="border rounded shadow p-2 w-28 bg-gray-500 text-white font-bold hover:bg-gray-600"
            >
              Clear
            </button>
            <button
              type="submit"
              className="border rounded shadow p-2 w-28 bg-blue-500 text-white font-bold hover:bg-blue-600"
            >
              Create
            </button>
          </div>
        </form>
        <PreviewCard profiles={profiles} />
      </main>
    </div>
  );
};

export default VisitingCard;
