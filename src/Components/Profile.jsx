import { Card, Dropdown } from "flowbite-react";
import pp from "../assets/pp.jpeg";

const Profile = () => {
  return (
    <>
      <Card className="max-w-full m-3 hover:bg-gray-200 transition duration-300">
        <div className="flex justify-between">
          <div className="flex flex-col justify-start pb-10 ml-80 mt-4 items-center">
            <img
              alt="image"
              height="200"
              src={pp}
              width="200"
              className="mb-3 rounded-full shadow-lg"
            />
          </div>

          <div className="flex flex-col items-end px-4 pt-4 mr-80 mt-14 items-center">
            <h3 className="text-lg font-semibold">Rizal Suhari Ardi</h3>
            <h4>+62 879 9665 2341</h4>
            <h5>
              Github: <a href="https://github.com" target="_blank" rel="noopener noreferrer">https://github.com</a>
            </h5>
            <h5>
              Linkedin: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">https://linkedin.com</a>
            </h5>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Profile;
