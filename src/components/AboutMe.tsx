import { Avatar } from "flowbite-react";
import avatar from "../../assets/pfp2.png";
import IUE from "../../assets/about-me/IUE.png";
import ChipsChallenge from "../../assets/about-me/ChipsChallenge.png";
import ChipsChallengeCalc from "../../assets/about-me/ChipsChallengeCalc.png";
import ChipsChallengeCalc2 from "../../assets/about-me/ChipsChallengeCalc2.png";
import minesweeper from "../../assets/about-me/minesweeper.png";
import GameOfLife from "../../assets/about-me/GameOfLife.png";
import StillwellBrain from "../../assets/about-me/StillwellBrain.png";
import SH7337 from "../../assets/about-me/sh7337.png";
import dreamy_beat from "../../assets/about-me/dreamy_beat.wav";

function AboutMe() {
  //TODO: Fix this messy html man!
  return (
    <div className="grid justify-items-center mt-5 dark:text-white">
      <div className="grid justify-items-center p-5 max-w-xl">
        <Avatar img={avatar} size="xl" rounded={true} className="mb-5" />
        <p className="mb-2 text-center">
          Hi, my name is Roan (thoricelli). <br></br> I'm a software developer
          from Belgium.
        </p>
        <hr className="h-px w-full my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p>
          What I enjoy the most is building open-source projects for the
          community, working with low-end systems and playing games with my
          friends!
        </p>
        <h1 className="my-2 font-extrabold leading-none tracking-tight text-gray-900 text-xl dark:text-white">
          What I work on currently
        </h1>
        <h2 className="my-2 font-extrabold leading-none tracking-tight text-gray-900 text-lg dark:text-white">
          SH7337 Emulator
        </h2>
        <p>
          I'm trying to recreate an emulator for my Casio Graph 35+ e, which
          uses the Renesas SH7337 CPU. This includes GDB support for debugging.
        </p>
        <p>
          I decided to create this emulator because I couldn't find a proper way
          to debug addins for the Casio Graph.
        </p>
        <p>
          This emulator is currently a work in progress, a lot has to still be
          done!
        </p>
        <img className="my-2 rounded-lg" src={SH7337}></img>
        <a
          className="my-2"
          href="https://github.com/thoricelli/SH7337-Emulator.git"
        >
          <img
            src="https://github-readme-stats.vercel.app/api/pin/?username=thoricelli&repo=SH7337-Emulator&theme=dark"
            alt="GitHub Stats"
          />
        </a>
        <h2 className="my-2 font-extrabold leading-none tracking-tight text-gray-900 text-lg dark:text-white">
          PICO 4 Pro
        </h2>
        <p>
          A VR headset I bought in 2024, it includes different features like
          face & eye tracking. Along with other undocumented API's and well I'm
          trying to document them!
        </p>
        <a
          className="my-2"
          href="https://github.com/thoricelli/PICO-documentation.git"
        >
          <img
            src="https://github-readme-stats.vercel.app/api/pin/?username=thoricelli&repo=PICO-documentation&theme=dark"
            alt="GitHub Stats"
          />
        </a>
        <h2 className="my-2 font-extrabold leading-none tracking-tight text-gray-900 text-lg dark:text-white">
          Innovation Uniform Editor
        </h2>
        <p>
          A Windows Forms based editor for the ROBLOX group Innovation Security.
        </p>
        <img className="my-2 rounded-lg" src={IUE}></img>
        <a
          className="my-2"
          href="https://github.com/thoricelli/Innovation-Uniform-Editor.git"
        >
          <img
            src="https://github-readme-stats.vercel.app/api/pin/?username=thoricelli&repo=Innovation-Uniform-Editor&theme=dark"
            alt="GitHub Stats"
          />
        </a>
        <h1 className="my-2 font-extrabold leading-none tracking-tight text-gray-900 text-xl dark:text-white">
          Past projects
        </h1>
        <h2 className="my-2 font-extrabold leading-none tracking-tight text-gray-900 text-lg dark:text-white">
          Chips challenge
        </h2>
        <p>
          A game I've been fascinated with in the past due to its simplicity.
          I've remade this game on the Monogame Engine for a school project.
        </p>
        <img className="my-2 rounded-lg" src={ChipsChallenge}></img>
        <a
          className="my-2"
          href="https://github.com/thoricelli/Chips-challenge-monogame.git"
        >
          <img
            src="https://github-readme-stats.vercel.app/api/pin/?username=thoricelli&repo=Chips-challenge-monogame&theme=dark"
            alt="GitHub Stats"
          />
        </a>
        <h2 className="my-2 font-extrabold leading-none tracking-tight text-gray-900 text-lg dark:text-white">
          Highschool
        </h2>
        <p>Miscellaneous projects</p>
        <p className="my-2">
          During COVID, I messed around with a few things here and there. During
          online lessons I would work on a version of Chip's Challenge but on my
          Casio Graph 35+E calculator. <br></br>I never ended up fully finishing
          it but trust me, that code is a mess!!
        </p>
        <div className="flex w-full">
          <img
            className="min-w-0 w-full my-2 rounded-lg"
            src={ChipsChallengeCalc}
          ></img>
          <img
            className="min-w-0 w-full my-2 rounded-lg"
            src={ChipsChallengeCalc2}
          ></img>
        </div>
        <p className="my-2">
          Apart from that, I used to help my friends get games on their
          calculators, and well the teachers weren't happy that I was on my
          calculator during something like geography lol...
        </p>
        <p>
          I loved the low-code aspect of the Casio Graph, figuring out how the
          system calls worked, figuring out the SH-4 instruction set. <br></br>
          And <i>ahem</i>, my apologies to the technician who got the calculator
          that I accidentally wiped the boot ROM from :)
        </p>
        <p className="my-2">Other showcases</p>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-center">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={GameOfLife}
              alt=""
            />
            <p>Game Of Life</p>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={StillwellBrain}
              alt=""
            />
            <p>Stillwell Brain</p>
          </div>
          <div className="flex justify-center col-span-2">
            <div className="w-72">
              <img className="rounded-lg" src={minesweeper} alt="" />
              <p>Minesweeper</p>
            </div>
          </div>
        </div>

        <h1 className="my-2 font-extrabold leading-none tracking-tight text-gray-900 text-xl dark:text-white">
          Hobbies
        </h1>
        <p className="my-2">
          My hobbies include music, drawing and honestly whatever else I feel
          like.
        </p>
        <p className="my-2">
          In 2024 with a friend I started experimenting around in FL Studio, we
          haven't really made a lot of progress but we're learning!
        </p>
        <div>
          <p className="mb-4 text-center">dreamy_beat.wav</p>
          <audio controls src={dreamy_beat}></audio>
        </div>
        <p className="my-4">
          I occasionally draw things on Clip Studio Paint with the help of an
          amazing friend.
        </p>
        <p>Anyways,</p>
        <h1 className="my-2 font-extrabold leading-none tracking-tight text-gray-900 text-xl dark:text-white">
          Thank <i>you</i> for taking the time to read this!
        </h1>
      </div>
    </div>
  );
}

export default AboutMe;
