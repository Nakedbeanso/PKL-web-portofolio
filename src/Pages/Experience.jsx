import React from 'react';
import { Card } from 'flowbite-react';

const Experience = () => {
  return (
    <>
      <Card className="p-6 mt-3">
        <div>
        <h3 className="text-lg font-semibold mb-4">Experience</h3>
        <div className="flex flex-col">
          <div className="flex items-center space-x-4">
            <h4 className="text-lg font-semibold">2007-2012</h4>
            <div className="flex-grow border-b border-gray-300">
            </div>
          </div>
          <h5 className="mt-2 text-base text-gray-600">First Got Memory</h5>
        </div>
        </div>

              <div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-4">
                  <h4 className="text-lg font-semibold">2012-2010</h4>
                  <div className="flex-grow border-b border-gray-300">
                  </div>
                </div>
                <h5 className="mt-2 text-base text-gray-600">Being Adults</h5>
              </div>
              </div>
      </Card>
    </>
  );
};

export default Experience;
