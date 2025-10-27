// media.js


import pictureslide1 from "../assets/pictureslide1.jpg";  
import pictureslide2 from "../assets/pictureslide2.jpg";


const media = {
  video: {
    src: "/companyHighlights.mp4",
    title: "Our Showcase Video",
    description:
      "This video plays seamlessly on the page, highlighting our services. Use controls to play/pause or adjust volume.",
  },
  images: [
    {
      src: [pictureslide1],
      title: "Gallery Image 1",
      description: "full GMDSS console installation with a GPs and a navtex system Installed Succesfully by our Engineers.",
    },
    {
      src: [pictureslide2],
      title: "Gallery Image 2",
      description: "Capturing the essence of our work in a single frame.",
    },
    {
      src: [pictureslide1],
      title: "Gallery Image 3",
      description: "A snapshot representing innovation and dedication.",
    },
  ],
};

export default media;
