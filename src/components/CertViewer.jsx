import React from "react";
import { useParams } from "react-router-dom";

const CertViewer = () => {
  const { type } = useParams();

  // Replace with your real images inside /public/
  const certMap = {
  quality: "/quality-policy.jpg",
  iso45001: "/iso45001.png",
  ohs: "/ohs-policy.jpg",
  iso9001: "/iso9001.png",
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <img
        src={certSrc}
        alt="Certificate"
        className="max-w-full max-h-screen object-contain shadow-lg"
      />
    </div>
  );
};

export default CertViewer;
