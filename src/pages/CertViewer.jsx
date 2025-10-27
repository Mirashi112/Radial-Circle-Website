import React from "react";
import { useParams } from "react-router-dom";

const CertViewer = () => {
  const { type } = useParams();

  // Map certificate types to their image paths
  const certMap = {
    quality: "/quality-policy.jpg",
    iso45001: "/iso45001.png",
    ohs: "/ohs-policy.jpg",
    iso9001: "/iso9001.png",
    environment: "/environment-policy.jpg",
    energy: "/energy-policy.jpg",
    safety: "/safety-policy.jpg",
  };

  // Get the image based on the route param
  const certSrc = certMap[type] || "/not-found.png"; // fallback image if type doesn't exist

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <img
        src={certSrc}
        alt={`${type} certificate`}
        className="max-w-full max-h-screen object-contain shadow-lg rounded-lg"
      />
    </div>
  );
};

export default CertViewer;
