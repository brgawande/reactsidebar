import { useEffect, useState } from "react";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";

function App() {
  const [sidebarActive, setSidebarActive] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarActive(false);
      } else {
        setSidebarActive(true);
      }
    };

    // Call handleResize initially to set the state based on the current window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bb relative">
      <button
        className={`${
          sidebarActive ? "left-[195px]" : "left-[35px] top-[45px]"
        } w-8 h-8 rounded-full bg-green-600 absolute top-[15px] dflex z-50`}
      >
        {sidebarActive ? (
          <ImCross
            onClick={() => setSidebarActive(false)}
            className="text-md text-white"
          />
        ) : (
          <IoMdMenu
            onClick={() => setSidebarActive(true)}
            className="text-xl text-white"
          />
        )}
      </button>
      {/* <div className="absolute bb top-0 bottom-0 left-0 w-[210px] z-10"> */}
      <div
        className={`${
          sidebarActive ? "w-[210px]" : "w-[50px]"
        } absolute bb top-0 bottom-0 left-0 z-10`}
      >
        <Sidebar sidebarActive={sidebarActive} />
      </div>
      <div className={`${sidebarActive ? "ml-[210px]" : "ml-[60px]"} z-0 px-5`}>
        <Home />
      </div>
    </div>
  );
}

export default App;
