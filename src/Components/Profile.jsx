import { Card, Dropdown } from "flowbite-react";
import pp from "../assets/pp.jpeg"

const Profile = () => {
  return (
    <>
         <Card className="max-w-full m-3">
      <div className="flex flex-col items-center pb-10">
        <img
        alt="image"
        height="96"
        src={pp}
        width="96"
        className="mb-3 rounded-full shadow-lg"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Rizal Suhari Ardi</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Iron Man</span>
      </div>
      <div className="flex justify-center px-4 pt-4">
        <div inline label="column">
            <h3>Rizal Suhari Ardi</h3>
            <h4>+62 879 9665 2341</h4>
            <h5>Github : https://github.com</h5>
            <h5>Linkedin : https://linkedin.com</h5>
        </div>
      </div>
    </Card>
    </>
  )
}

export default Profile