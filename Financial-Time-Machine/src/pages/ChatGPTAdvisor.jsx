import { useState } from "react";

const ChatGPTAdvisor = () => {
  const [chatPrompt, setChatPrompt] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  const handleChatGPT = async () => {
    const response = await fetch("/api/chat/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: chatPrompt }),
    });
    const data = await response.json();
    setChatResponse(data.reply);
  };

  return (
    <div className="mt-16 bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-teal-400">
        Get Financial Advice from ChatGPT
      </h2>
      <textarea
        placeholder="Ask ChatGPT about your financial queries"
        value={chatPrompt}
        onChange={(e) => setChatPrompt(e.target.value)}
        className="w-full p-3 rounded-lg text-white"
      />
      <button
        onClick={handleChatGPT}
        className="bg-teal-600 text-white font-semibold py-3 px-6 rounded-full w-full mt-4"
      >
        Ask ChatGPT
      </button>
      {chatResponse && (
        <div className="text-white mt-4">
          <h3 className="font-bold">ChatGPT Response:</h3>
          <p>{chatResponse}</p>
        </div>
      )}
    </div>
  );
};

export default ChatGPTAdvisor;
