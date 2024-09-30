'use client';
import { useChat } from 'ai/react';
import { IoIosSend } from "react-icons/io";
import Image from 'next/image'


export default function Home() {
  const { messages, input,
     handleSubmit, 
     handleInputChange,
      isLoading } =
  useChat({
  });

  return (
    <div className="flex flex-col 
    h-screen bg-gray-100">
    <header className="bg-white 
    shadow">
      <div className="max-w-7xl 
      mx-auto 
      py-6 px-4 sm:px-6 lg:px-8 ">
      <Image 
       width={100}
       height={100}
         alt=''
         src='/yoda.png' 
          />
        <h1 className="text-3xl 
        font-bold text-gray-900">
          Yoda Bot</h1>
      </div>
    </header>

    <main className="flex-1 
    overflow-y-auto p-4">
      <div className="max-w-3xl
       mx-auto space-y-4">
        {messages.map((message, 
        index) => (
<div key={index} className={`flex 
${message.role == 'assistant' ? 
'justify-start' : 'justify-end'}`}
          >
  <div className={`max-w-sm 
  rounded-lg p-4 ${
     message.role == 
     'assistant' ? 
     'bg-white text-gray-800' :
      'bg-[#75934E] text-white'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
    </main>
    
  <div className="bg-white border-t 
  border-gray-200 px-4 py-4 sm:px-6">
      <div className="max-w-3xl 
      mx-auto flex items-center">
    <input
          type="text"
           value={input}
          onChange={handleInputChange}
          placeholder="Talk to Yoda..."
          disabled={isLoading}
          className="flex-1 
          appearance-none border 
          rounded-l-md w-full py-2
          px-4 bg-white text-gray-700 
          placeholder-gray-400 
          shadow-sm text-base 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-600 
          focus:border-transparent"
        />
        <button
           onClick={handleSubmit}
          className="flex-shrink-0
           bg-[#75934E] text-white
            font-bold py-2 px-4 
          rounded-r-md 
          hover:bg-[#75934E] 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500 
          focus:ring-offset-2"
        >
          <IoIosSend size={22}/>
          {/* <Send className="h-5 w-5" /> */}
          <span className="sr-only">
            Send message</span>
        </button>
      </div>
    </div>
  </div>
  );
}
