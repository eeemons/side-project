import { useState } from "react";
import Tab from "./Components/Tab";
import Tab1 from "./Components/Tab1";
import Tab2 from "./Components/Tab2";
import Tab3 from "./Components/Tab3";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="md:mx-20 pb-4 ">
      <h1 className="md:text-2xl text-xl font-bold text-center mt-2">
        Provision/Destruction
      </h1>
      <br />
      <div className="flex flex-col p-4 md:w-[400px] w-fit gap-2 mx-auto  md:p-8 md:rounded-lg">
        <div className="flex overflow-auto border-2 border-black rounded-2xl">
          <Tab
            className="text-sm md:text-md"
            label="Tab-1"
            isSelected={activeTab === 0}
            onClick={() => handleTabClick(0)}
          />
          <Tab
            className="text-sm md:text-md"
            label="Tab-2"
            isSelected={activeTab === 1}
            onClick={() => handleTabClick(1)}
          />
          <Tab
            className="text-sm md:text-md"
            label="Tab-3"
            isSelected={activeTab === 2}
            onClick={() => handleTabClick(2)}
          />
          {/* <Tab
            className="text-sm md:text-md"
            label="Tab-4"
            isSelected={activeTab === 3}
            onClick={() => handleTabClick(3)}
          />
          <Tab
            className="text-sm md:text-md"
            label="Tab-5"
            isSelected={activeTab === 4}
            onClick={() => handleTabClick(4)}
          /> */}
        </div>

        <div className="">
          {activeTab === 0 && (
            <div>
              <Tab1 />
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <Tab2 />
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <Tab3 />
            </div>
          )}
          {/* {activeTab === 3 && (
            <div>
              <Tab4 />
            </div>
          )}
          {activeTab === 4 && (
            <div>
              <Tab5 />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default App;
