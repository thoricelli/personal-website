import "./App.css";
import { Avatar } from "flowbite-react";
import avatar from "./assets/pfp.png";
import { Github, Youtube } from "flowbite-react-icons/solid";

function App() {
  return (
    <>
      <div className="grid justify-items-center mt-5">
        <Avatar img={avatar} size="xl" />
        <h1 className="dark:text-white">
          I'm thoricelli. A Belgian software developer.
        </h1>
        <h1 className="dark:text-white">This website is a work in progress.</h1>
        <div className="flex">
          <a href="https://github.com/thoricelli">
            <Github size={48} color="white"></Github>
          </a>
          <a href="https://www.youtube.com/thoricelli">
            <Youtube href="" size={48} color="white"></Youtube>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
