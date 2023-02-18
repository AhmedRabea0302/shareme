import React from "react";
import { urlFor } from "../client";

const Pin = ({ pin: { postedBy, image, _id, destination } }) => {
  return (
    <div className="">
      <img
        alt="user-post"
        src={urlFor(image).width(250).url()}
        className="rounded-lg w-full"
      />
    </div>
  );
};

export default Pin;
