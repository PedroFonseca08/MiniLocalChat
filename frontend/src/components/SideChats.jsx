import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { useRef } from "react";
import { UserContext } from "../contexts/UserContext";
import { RiRobot2Fill } from "react-icons/ri";


const SideChats = () => {
  const [chats, setChats] = useState(["Chat 1", "Chat 2", "Chat 3"]);
  const [lastID, setLastID] = useState(-1);

  const { chatId, changeChat } = useContext(ChatContext);
  const { userId } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:8080/conversa/" + userId)
      .then((res) => res.json())
      .then((json) => {
        setChats(json);
      });
  }, [chatId]);

  useEffect(() => {
    fetch("http://localhost:8080/conversa/proximoId/" + userId)
      .then((res) => res.json())
      .then((json) => {
        setLastID(json);
      });
  }, [chatId]);

  return (
    <div className="left-0 top-0 lg:w-[20vw] h-full fixed bg-gray-950 z-[100] flex flex-col rounded-tr-3xl rounded-br-3xl lg:visible invisible">
      <button
        className={"dark:text-gray-200 h-14 text-gray-900  hover:bg-blue-400 hover:dark:bg-blue-400 hover:text-gray-200 flex items-center pl-8 mx-4 rounded-3xl mt-4 lg:transition-all lg:duration-500 hover:border-blue-400 group font-bold text-l" + (chatId === lastID ? " bg-blue-400 dark:bg-blue-400 text-gray-200 dark:text-gray-200" : "  dark:bg-gray-900 bg-gray-300 ")}
            onClick={() => changeChat(lastID)}
      >
        <RiRobot2Fill  className="mr-2" />
        New Chat
      </button>

      <span className="text-gray-200 dark:text-gray-200 font-bold text-2xl pl-8 mt-8">
        Chats
      </span>

      <div className="overflow-y-auto flex flex-col">
        {chats.map((chat, index) => (
          <button
            key={index}
            className={"dark:text-gray-200 h-14 text-gray-200  hover:bg-blue-400 hover:dark:bg-blue-400 hover:text-gray-200 flex items-center pl-8 mx-4 rounded-3xl mt-4 lg:transition-all lg:duration-500 hover:border-blue-400  overflow-hidden" + (chatId === index + 1 ? " bg-blue-400 dark:bg-blue-400 text-gray-200 dark:text-gray-200" : "")} 
            onClick={() => changeChat(index + 1)}
          >
            {chat.primeiraPergunta}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideChats;
