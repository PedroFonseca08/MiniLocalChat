import { IoSend } from "react-icons/io5";

const QuestionBar = ({ question, handleInputChange, handleKeyDown, handleAskQuestion }) => {
  return (
    <div className="mt-4 flex items-center fixed bottom-10 lg:left-[25vw] lg:w-[70vw] w-[95vw] left-[2.5vw]">
      <textarea
        placeholder="Make a question"
        value={question}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="dark:bg-gray-950 p-4 rounded-3xl resize-none dark:text-gray-200 w-full h-14 pl-6 bg-gray-200 text-gray-900"
      />
      <IoSend
        className="text-2xl text-blue-400 ml-2 cursor-pointer transition-all duration-500 hover:bg-blue-400 hover:text-white rounded-full h-12 w-12 p-2"
        onClick={handleAskQuestion}
      />
    </div>
  );
};

export default QuestionBar;
