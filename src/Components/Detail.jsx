import { Card } from 'flowbite-react';
import { Progress } from "flowbite-react";
import React from 'react';

const Detail = () => {
  return (
    <div className="flex space-x-4">
      <Card className="w-1/2 p-6 hover:bg-gray-200 transition duration-300">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">About Me</h3>
          <p className="text-center leading-relaxed mb-9">
            Profesional yang berdedikasi dan bersemangat dengan keahlian dalam pengembangan perangkat lunak. 
            Memiliki kemampuan yang kuat dalam komunikasi dan analisis data. 
            Berkomitmen untuk terus belajar dan berkontribusi pada kesuksesan tim maupun perusahaan.
          </p>
        </div>
      </Card>
      
      <Card className="w-1/2 p-6 hover:bg-gray-200 transition duration-300">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
          <div className="w-full px-4">
            <div className="mb-4">
              <p>HTML</p>
              <Progress progress={45} className="mb-2" />
            </div>
            <div className="mb-4">
              <p>CSS</p>
              <Progress progress={45} className="mb-2" />
            </div>
            <div className="mb-4">
              <p>JavaScript</p>
              <Progress progress={45} className="mb-2" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Detail;
