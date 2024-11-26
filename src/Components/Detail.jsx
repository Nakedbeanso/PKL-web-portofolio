import { Card } from 'flowbite-react';
import React from 'react';

const Detail = () => {
  return (
    <div className="w-full flex justify-center" data-aos="fade-up" data-aos-duration="1500">
      <Card className="w-full p-6 hover:bg-gray-200 transition duration-300">
        {/* Container responsif */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          {/* About Me */}
          <div className="w-full lg:w-1/3 text-center">
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="leading-relaxed">
              Profesional yang berdedikasi dan bersemangat dengan keahlian dalam pengembangan perangkat lunak. 
              Memiliki kemampuan yang kuat dalam komunikasi dan analisis data. 
              Berkomitmen untuk terus belajar dan berkontribusi pada kesuksesan tim maupun perusahaan.
            </p>
          </div>

          {/* Skills */}
          <div className="w-full lg:w-1/3 text-center">
            <h3 className="text-lg font-semibold mb-4">Skills</h3>
            <ul className="list-disc list-inside">
              <li>Teamwork</li>
              <li>Time Management</li>
              <li>Critical Thinking</li>
            </ul>
          </div>

          {/* Language */}
          <div className="w-full lg:w-1/3 text-center">
            <h3 className="text-lg font-semibold mb-4">Language</h3>
            <ul className="list-disc list-inside">
              <li>English</li>
              <li>Indonesian</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Detail;
