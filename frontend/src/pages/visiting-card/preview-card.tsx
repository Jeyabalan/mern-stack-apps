import React from "react";
import { Profile } from "../../interfaces";

const PreviewCard = ({ profiles }: { profiles: Profile[] }) => {
  return (
    <div className="bg-gray-100 w-full border rounded shadow p-5 flex flex-wrap gap-4">
      {profiles.length === 0 && (
        <p className="bg-red-600 font-bold text-white p-4">
          No Visiting Card Found
        </p>
      )}
      {profiles.map((profile: Profile) => (
        <div className="bg-white p-4 flex gap-2 w-[450px] border rounded shadow">
          <img
            className="rounded shadow border"
            src="assets/avathar.png"
            alt="Avathar Image"
            width="100px"
          />
          <div className="flex flex-col">
            <p className="font-bold text-2xl mt-1">
              {profile.name.toUpperCase()}
            </p>
            <p className=" mt-1">Email: {profile.email}</p>
            <p className=" mt-1">Phone Number: +91-{profile.phoneNumber}</p>
            <div className="flex flex-row gap-1  mt-1">
              <p>Website:</p>
              <a
                href={profile.linkedInProfile}
                target="_blank"
                className="underline text-blue-600"
              >
                {profile.linkedInProfile}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviewCard;
