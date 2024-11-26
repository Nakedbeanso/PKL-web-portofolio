import { Card } from "flowbite-react";
import pp from "../assets/pp.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  return (
    <>
      <Card
        className="max-w-full m-3 hover:bg-gray-200 transition duration-300"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        
          <div className="flex flex-col items-center pb-6 lg:pb-10 lg:ml-80 mt-4">
            <img
              alt="image"
              height="200"
              src={pp}
              width="200"
              className="mb-3 rounded-full shadow-lg"
            />
          </div>


          <div className="flex flex-col items-center lg:items-end text-center lg:text-right px-4 lg:pt-4 lg:mr-80 lg:mt-14">
            <h3 className="text-lg font-semibold">Rizal Suhari Ardi</h3>
            <h4>+62 879 9665 2341</h4>
            <h5>
              Github:{" "}
              <a
                href="https://github.com/Nakedbeanso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Nakedbeanso
              </a>
            </h5>
            <h5>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                soon
              </a>
            </h5>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Profile;
