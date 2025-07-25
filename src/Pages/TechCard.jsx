import React from "react";
import { Card } from "flowbite-react";
import { Progress } from "flowbite-react";

const TechCard = () => {
  return (
    <>
 
      <div
        className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mt-4"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
       
        <Card className="w-full lg:w-1/3 p-6 hover:bg-gray-200 transition duration-300">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
            <div className="w-full px-4">
              <div className="mb-4">
                <p>HTML</p>
                <Progress progress={90} className="mb-2" size="sm" />
              </div>
              <div className="mb-4">
                <p>CSS</p>
                <Progress progress={75} className="mb-2" size="sm" />
              </div>
              <div className="mb-4">
                <p>JavaScript</p>
                <Progress progress={45} className="mb-2" size="sm" />
              </div>
              <div className="mb-4">
                <p>PHP</p>
                <Progress progress={40} className="mb-2" size="sm" />
              </div>
              <div className="mb-4">
                <p>MySQL</p>
                <Progress progress={68} className="mb-2" size="sm" />
              </div>
            </div>
          </div>
        </Card>


        <Card className="w-full lg:w-1/3 p-6 hover:bg-gray-200 transition duration-300">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <div className="w-full px-4">
              <div className="mb-4">
                <p>Visual Studio Code</p>
                <Progress progress={80} className="mb-2" size="sm" />
              </div>
              <div className="mb-4">
                <p>Figma</p>
                <Progress progress={85} className="mb-2" size="sm" />
              </div>
              <div className="mb-4">
                <p>Github</p>
                <Progress progress={67} className="mb-2" size="sm" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="w-full lg:w-1/3 p-6 hover:bg-gray-200 transition duration-300">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Framework</h3>
            <div className="w-full px-4">
              <div className="mb-4">
                <p>Bootstrap</p>
                <Progress progress={55} className="mb-2" size="sm" />
              </div>
              <div className="mb-4">
                <p>Laravel</p>
                <Progress progress={20} className="mb-2" size="sm" />
              </div>
              <div className="mb-4">
                <p>React JS</p>
                <Progress progress={67} className="mb-2" size="sm" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default TechCard;
