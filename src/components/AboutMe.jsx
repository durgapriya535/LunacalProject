import { useState } from "react";
import SideBar from "./SideBar";

const AboutMe = () => {
  const [message, setMessage] = useState(
    <><p className="mb-4">Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
    <p className="mb-4">I was born and raised in Albany, NY & have been living in Santa Clara for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...</p></>
  ); // State for message content

  const [activeButton, setActiveButton] = useState(""); // State to keep track of the active button

  function handleChoice(choice) {
    setActiveButton(choice); // Set the active button when a button is clicked

    if (choice === "About Me") {
      setMessage(
        <><p className="mb-4 text-#969696">Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
        <p className="mb-4">I was born and raised in Albany, NY & have been living in Santa Clara for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...</p></>
      );
    } else if (choice === "Experiences") {
      setMessage("Experience content goes here...");
    } else if (choice === "Recommended") {
      setMessage("Recommendations content goes here...");
    }
  }

  return (
    <div className="flex bg-[#363c43]  p-4 rounded-3xl shadow-widget-custom w-full">
      {/* Sidebar */}
      <div className="flex-shrink">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col">
        <div className="flex justify-center items-center space-x-4 mb-4 bg-black rounded-3xl p-4">
          <button
            className={`flex-1 px-4 py-2 text-center whitespace-nowrap rounded-3xl transform ${
              activeButton === "About Me" ? "bg-gray-600 text-white" : "text-gray-200 hover:text-gray-600"
            }`}
            onClick={() => handleChoice("About Me")}
          >
            About Me
          </button>
          <button
            className={`flex-1 px-4 py-2 text-center whitespace-nowrap rounded-3xl transform ${
              activeButton === "Experiences" ? "bg-gray-600 text-white" : "text-gray-200 hover:text-gray-600"
            }`}
            onClick={() => handleChoice("Experiences")}
          >
            Experiences
          </button>
          <button
            className={`flex-1 px-4 py-2 text-center whitespace-nowrap rounded-3xl transform ${
              activeButton === "Recommended" ? "bg-gray-600 text-white" : "text-gray-200 hover:text-gray-600"
            }`}
            onClick={() => handleChoice("Recommended")}
          >
            Recommended
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 rounded-md mt-4 max-h-40 overflow-y-scroll custom-scrollbar">
          <div className="text-[#969696]">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
