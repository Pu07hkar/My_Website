import Card from "./Cards";
import { Link } from "react-router-dom";
function Paid_Course() {
  return (
    <>
      <div className=" max-w-screen-2xl  container mx-auto md:px-20 px-4 pt-10">
        <div className="justify-center text-center items-center mt-28 space-y-5">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have{" "}
            <span className="text-pink-700">you here! :)</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint
            ullam ea molestias at. Omnis vitae nam rerum expedita quae est cum,
            sapiente illum. Ipsam quibusdam praesentium deserunt sunt
            culpa?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Sapiente aut, tempore, debitis nulla architecto ipsa corrupti
            dolorum nam deserunt, saepe cupiditate delectus voluptate maxime
            quos! Quibusdam molestias earum vero blanditiis.
          </p>
          <Link to={"/"}>
            <button className="bg-pink-600 mt-6 px-4 py-2 rounded-2xl font-bold text-white">
              BACK
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 mt-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
export default Paid_Course;
