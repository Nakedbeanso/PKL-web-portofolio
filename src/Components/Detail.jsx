import { Card } from 'flowbite-react';
import { Progress } from "flowbite-react";
import React from 'react';

const Detail = () => {
  return (
    <div className="flex space-x-4">
      <Card className="w-1/2">
      <div>
      <div className="justify-center flex">
        <h3>About Me</h3>
      </div>
        <div className="justify-start flex">
        <h3 className="ml-8 mt-6">
            Profesional yang berdedikasi dan bersemangat dengan keahlian dalam pengembangan perangkat lunak. 
            Memiliki kemampuan yang kuat dalam komunikasi, analisis data. 
            Berkomitmen untuk terus belajar dan berkontribusi pada kesuksesan tim maupun perusahaan.</h3>
        </div>
        </div>
      </Card>
      
      <Card className="w-1/2">
        <div className="justify-center flex">
          <h3>Tech Stack</h3>
        </div>
        <div>
        <p>HTML</p>
        <Progress progress={45} className="mb-4" />
        <p>CSS</p>
        <Progress progress={45} className="mb-4" />
        <p>Java Script</p>
        <Progress progress={45} className="mb-4"/>
        </div>
      </Card>
    </div>
  );
};

export default Detail;
