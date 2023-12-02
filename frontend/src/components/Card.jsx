import { BsPersonFill, BsRobot } from "react-icons/bs";

const Card = ({ index, question, answer}) => {
  return (
    <>
      <div
        key={index}
        className="relative px-6 py-4 rounded-2xl m-6 shadow-2xl dark:shadow-md bg-gray-50 dark:bg-gray-800 dark:text-white sm:transition-all hover:sm:duration-500 sm:duration-500 sm:ease-out flex flex-col min-h-[4rem]"
      >
        <div className="flex items-center mb-2 text-gray-500 dark:text-gray-400">
          <BsPersonFill className="mr-2" />
          <span>You</span>
        </div>
        <p className="whitespace-pre">{question}</p>
        
          <div
            key={index}
            className="relative px-6 py-4 rounded-2xl m-6 shadow-2xl dark:shadow-md bg-gray-200 dark:bg-gray-700 dark:text-white sm:transition-all hover:sm:duration-500 sm:duration-500 sm:ease-out flex flex-col min-h-[4rem]"
          >
            <div className="flex items-center mb-2 text-gray-500 dark:text-gray-400">
              <BsRobot className="mr-2" />
              <span>AI</span>
            </div>
            <p className="whitespace-pre-wrap">{answer}</p>
          </div>
      </div>
    </>
  );
};

export default Card;
