import React, { useState, useContext, useEffect, useRef } from "react";
import { BsPersonFill, BsRobot } from "react-icons/bs";
import Header from "../../components/Header";
import SideChats from "../../components/SideChats";
import QuestionBar from "../../components/QuestionBar";
import { ChatContext } from "../../contexts/ChatContext";

const Home = () => {
  const [question, setQuestion] = useState("");
  const [userQuestion, setUserQuestion] = useState([]);
  const [aiAnswer, setAiAnswer] = useState([]);
  const [aiAnswerStop, setAiAnswerStop] = useState(false);
  const [aiAnswers, setAiAnswers] = useState([]);
  const lastQuestionRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [historic, setHistoric] = useState([]);

  const [lastQuestion, setLastQuestion] = useState("");
  const [lastAnswer, setLastAnswer] = useState("");

  const { chatId } = useContext(ChatContext);

  useEffect(() => {
    setUserQuestion([]);
    setAiAnswers([]);
    console.log("http://localhost:8080/conversa/1/" + chatId);
    fetch(`http://localhost:8080/conversa/1/${chatId}`)
      .then((res) => res.json())
      .then((json) => {
        setIsLoaded(true);
        setHistoric(json);
        setUserQuestion(json.map((item) => item.pergunta));
        setAiAnswers(json.map((item) => item.resposta));
      });
  }, [chatId]);

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAskQuestion();
    }
  };

  const saveInBD = async () => {
    let objeto = {
      idConversa: chatId,
      data: new Date().toISOString(),
      idUsuario: 1,
      pergunta: userQuestion[userQuestion.length - 1],
      resposta: aiAnswers[aiAnswers.length - 1],
    };

    await fetch("http://localhost:8080/conversa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objeto),
    });
  };

  useEffect(() => {
    saveInBD();
  }, [lastAnswer]);

  const postQuestion = async (userQuestion) => {
    try {
      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mistral",
          prompt: userQuestion,
          stream: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar a pergunta para a API");
      }

      const reader = response.body.getReader();
      let aiAnswerText = "";

      setAiAnswerStop(true);

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        const text = new TextDecoder().decode(value);
        const responseData = JSON.parse(text);

        aiAnswerText += responseData.response;

        setAiAnswer([aiAnswerText]);
      }
      setAiAnswerStop(false);
      setAiAnswers([...aiAnswers, aiAnswerText]);

      setLastQuestion(userQuestion);
      setLastAnswer(aiAnswerText);

      // Save the question and answer to the database
      //await saveInBD();
    } catch (error) {
      console.error("Erro durante a chamada POST:", error);
    }
  };

  const handleAskQuestion = async () => {
    if (question === "") return;
    setUserQuestion([...userQuestion, question]);
    setAiAnswer([""]);
    setQuestion("");
    await postQuestion(question);
  };

  useEffect(() => {
    if (lastQuestionRef.current) {
      lastQuestionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [userQuestion]);

  return (
    <>
      <Header />
      <SideChats />
      <div className="flex justify-center flex-col items-center lg:ml-[20vw] mt-20">
        <div className="max-w-[1250px] flex flex-col justify-center relative w-full">
          <div className="flex flex-col relative">
            <div className="relative mb-36">
              {userQuestion.map((question, index) => (
                <div
                  key={index}
                  className="relative px-6 py-4 rounded-2xl m-6 shadow-2xl dark:shadow-md bg-gray-50 dark:bg-gray-800 dark:text-white sm:transition-all hover:sm:duration-500 sm:duration-500 sm:ease-out flex flex-col min-h-[4rem]"
                  ref={
                    index === userQuestion.length - 1 ? lastQuestionRef : null
                  }
                >
                  <div className="flex items-center mb-2 text-gray-500 dark:text-gray-400">
                    <BsPersonFill className="mr-2" />
                    <span>You</span>
                  </div>
                  <p className="whitespace-pre">{question}</p>
                  <div className="relative px-6 py-4 rounded-2xl m-6 shadow-2xl dark:shadow-md bg-gray-200 dark:bg-gray-700 dark:text-white sm:transition-all hover:sm:duration-500 sm:duration-500 sm:ease-out flex flex-col min-h-[4rem]">
                    <div className="flex items-center mb-2 text-gray-500 dark:text-gray-400">
                      <BsRobot className="mr-2" />
                      <span>AI</span>
                    </div>
                    <p className="whitespace-pre-wrap">
                      {/* {index === userQuestion.length - 1 ? aiAnswer[0] : aiAnswers[index]} */}
                      {aiAnswers[index]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <QuestionBar
              question={question}
              handleInputChange={handleInputChange}
              handleKeyDown={handleKeyDown}
              handleAskQuestion={handleAskQuestion}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
