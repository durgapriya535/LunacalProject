import AboutMe from "./AboutMe";
import Gallery from "./Gallery";

const EmptySpace = () => {
  return (
    <div className="flex h-screen w-screen p-8 mt-6 gap-16"> {/* Full width, height, and padding for spacing */}
      {/* First half with 3D border effect, hidden on medium and small screens */}
      <div className="hidden lg:flex lg:w-1/2 bg-[363c43] border-2 border-gray-700 shadow-lg rounded-lg transform hover:translate-x-1 hover:translate-y-1 transition-transform duration-300 p-4">
        {/* Empty space for visual effect */}
      </div>

      {/* Second half with 3D border effect */}
      <div className="w-full lg:w-1/2 flex bg-[363c43] flex-col gap-6 p-4 bg-custom-gradient  rounded-3xl transform hover:translate-x-1 hover:translate-y-1 transition-transform duration-300">
        <AboutMe />
        <div className="w-[100%] my-1 h-[8%] flex justify-center items-center flex-col">
        <div className="w-[85%] bg-[#363C43] h-[4px] rounded-full">

        </div>
        <div className ="w-[85%] h-[4px] bg-black rounded-full opacity-40 blur-[1px]">

        </div>
        </div>
        <Gallery />
        <div className="w-[100%] my-1 h-[8%] flex justify-center items-center flex-col"><div className="w-[85%] bg-[#363C43] h-[4px] rounded-full"></div><div className="w-[85%] h-[4px] bg-black rounded-full opacity-40 blur-[1px]"></div></div>
      </div>
    </div>
  );
};

export default EmptySpace;
