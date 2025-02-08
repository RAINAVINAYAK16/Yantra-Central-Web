import { useEffect } from "react";
import { icons } from "../constants/images";

const socials = [
  { src: icons.facebook, href: "https://www.facebook.com/mfcvit/" },
  { src: icons.instagram, href: "https://www.instagram.com/mfc_vit/" },
  { src: icons.youtube, href: "https://www.youtube.com/c/MozillaFirefoxClubVIT" },
  { src: icons.github, href: "https://github.com/MFC-VIT" },
  { src: icons.linkedin, href: "https://www.linkedin.com/company/mfcvit/mycompany/" },
  { src: icons.twitter, href: "https://x.com/mfc_vit" },
  { src: icons.medium, href: "https://medium.com/mozilla-firefox-club/tagged/mfcvit" },
];

const useDynamicText = (id) => {
  useEffect(() => {
    const textElement = document.getElementById(id);

    const handleMouseMove = (e) => {
      const { offsetX, target } = e;
      const width = target.offsetWidth;

      const percentage = (offsetX / width) * 100;
      textElement.style.background = `linear-gradient(to right, #b2d885 ${percentage}%, #e8ded5 ${percentage}%)`;
      textElement.style.backgroundClip = "text";
      textElement.style.color = "transparent";
    };

    const handleMouseLeave = () => {
      textElement.style.background = "none";
      textElement.style.backgroundClip = "unset";
      textElement.style.color = "#e8ded5";
    };

    textElement.addEventListener("mousemove", handleMouseMove);
    textElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      textElement.removeEventListener("mousemove", handleMouseMove);
      textElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [id]);
};

export const Footer = () => {
  useDynamicText("firefox");
  return (
    <div
      className="relative w-full h-full"
      style={{
        background:
          "radial-gradient(circle, #d3eafd 0%, #e4f0f6 40%, #e7e9f3 100%)",
      }}
    >
      <div className="flex justify-center space-x-2 py-4 absolute -top-2 max-lg:-top-8 max-sm:-top-10 left-0 right-0 mt-2">
        {socials.map((social, index) => (
          <a href={social.href} target="_blank" className="h-fit" key={index}>
            <img
              src={social.src}
              className="md:size-8 size-6 transition-all duration-200 hover:scale-150 max-md:hover:scale-125 hover:mx-2 max-md:hover:mx-1 active:scale-100"
            />
          </a>
        ))}
      </div>
      <div
        className="text-center text-[22vw] p-0 m-0 leading-none font-apex text-[#e8ded5]"
        id="firefox"
      >
        AQUATWIN
      </div>
      <div className="flex justify-around px-4 text-sm text-[#e8ded5] py-2">
        <p className="max-sm:text-[1vh] text-[1.75vh] md:text-[2vh] hover:underline hover:underline-offset-2">
          © 2024 Mozilla Firefox Club. All Rights Reserved
        </p>
        <p className="max-sm:text-[1vh] text-[1.75vh] md:text-[2vh] cursor-pointer hover:underline hover:underline-offset-2">
          Privacy Policy
        </p>
        <p className="max-sm:text-[1vh] text-[1.75vh] md:text-[2vh] hover:underline hover:underline-offset-2">
          Mozilla Foundation
        </p>
      </div>
    </div>
  );
};
