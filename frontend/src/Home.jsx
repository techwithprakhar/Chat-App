import React from "react";
import { FaSearch, FaUserCircle ,FaUserFriends} from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex h-screen">
  
      <div className="w-1/3 bg-gray-900 text-white p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Chats</h2>
        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search or start a new chat"
            className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto">
          {["CSE-2023 Group","Ajit Yadav", "Prakhar Gupta", "Rishi Beniwal", "Harshit Yadav"].map((name, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer"
            >
              {name =="CSE-2023 Group" ? <FaUserFriends className="text-2xl" /> : <FaUserCircle className="text-2xl" />}
              <div>
                <p className="text-white font-medium">{name}</p>
                <p className="text-gray-400 text-sm">Last message...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-2/3 bg-gray-700 flex flex-col">
        <div className="p-4 bg-gray-800 text-white font-bold">Select a chat to start messaging</div>
        <div className="flex-1 flex items-center justify-center text-gray-400">
          No messages yet
        </div>
      </div>
    </div>
  );
};

export default Home;
