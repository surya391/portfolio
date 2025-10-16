import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a Frontend Developer from Bangalore, India, with 1 year of
        experience at Pattem Digital.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-6">
        {workData.map((project, index) => (
          <Link
            key={index}
            href={project.link || ""}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group shadow-md hover:shadow-xl duration-300"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-3 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="text-sm text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
                <Image
                  src={assets.send_icon}
                  alt="send icon"
                  className="w-5 group-hover:translate-x-1 duration-300"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500">show more<Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4"/></a>
    </div>
  );
};

export default Work;
