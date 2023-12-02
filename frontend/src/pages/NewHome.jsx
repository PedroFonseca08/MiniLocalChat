import { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import SideChats from "../components/SideChats";
import QuestionBar from "../components/QuestionBar";
import Card from "../components/Card";
import { ChatContext } from "../contexts/ChatContext";

const NewHome = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [lastQuestion, setLastQuestion] = useState("");
  const [lastAnswer, setLastAnswer] = useState("");
  
  const [messages, setMessages] = useState([]);

  const [historic, setHistoric] = useState([]);

  const { chatId } = useContext(ChatContext);

  useEffect(() => {
    if (lastQuestion != "") {
      let objeto = {
        idConversa: chatId,
        data: new Date().toISOString(),
        idUsuario: 1,
        pergunta: historic[historic.length - 1].pergunta,
        resposta: historic[historic.length - 1].resposta,
      };
  
      console.log(objeto);
  
      fetch("http://localhost:8080/conversa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objeto),
      });
    }
  }, [lastAnswer]);

  useEffect(() => {
    console.log("http://localhost:8080/conversa/1/" + chatId);
    fetch("http://localhost:8080/conversa/1/" + chatId)
      .then((res) => res.json())
      .then((json) => {
        setHistoric(json);
      });
  }, [chatId]);

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (question === "") return;
      //handleAskQuestion();
      setAnswer("Resposta: " + question);
    }
  };

  const handleAskQuestion = () => {
    setAnswer("Resposta: " + question);
  };

  useEffect(() => {
    if (historic.length > 0 && answer !== "") {
      setHistoric([
        ...historic,
        {
          pergunta: question,
          resposta: answer,
        },
      ]);
      setLastQuestion(question);
      setLastAnswer(answer);

      setQuestion("");
      setAnswer("");
    }
  }, [answer]);

  return (
    <>
      <Header />
      <SideChats />
      <div className="flex justify-center flex-col items-center lg:ml-[20vw] mt-20">
        <div className="max-w-[1250px] flex flex-col justify-center relative w-full">
          <div className="flex flex-col relative">
            <div className="relative mb-36">
              {/* {historic.map((message, index) => 
                {index < historic.length - 1 ? 
                (<Card
                  key={index}
                  index={index}
                  question={message.pergunta}
                  answer={message.resposta}
                />)
                :
                (<Card
                  key={index}
                  index={index}
                  question={lastQuestion}
                  answer={lastAnswer}
                />)
              }
              )} */}
              {historic.map((message, index) => 
                (<Card
                  key={index}
                  index={index}
                  question={message.pergunta}
                  answer={message.resposta}
                />)
              )}
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

export default NewHome;
