import React from 'react';



export default function  SelectedConversation()  {
    const messages = [
      { id: 1, sender: 'John Doe', content: 'Hello there!', timestamp: '10:00 AM' },
      { id: 2, sender: 'You', content: 'Hi! How are you?', timestamp: '10:05 AM' },
      { id: 3, sender: 'John Doe', content: 'I\'m good, thanks!', timestamp: '10:10 AM' },
    ];
  
    return (
      <div className="bg-white flex-1 overflow-y-scroll" >
        <div className=" p-4 flex items-center">
          <div className="rounded-full h-12 w-12 bg-gray-300 mr-4"></div>
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-green-500">Online</p>
          </div>
        </div>
        <div className="px-1 py-2 m-10 ">
          {messages.map((message) => (
            <div key={message.id} className={`mb-20 ${message.sender === 'You' ? 'text-right ' : ''}`}>
              <div className={` rounded-lg p-4 ${message.sender === 'You' ? 'ml-auto bg-blue-500 text-white' : 'bg-gray-100'}`}>
                <p className="">{message.content}</p>
                <p className="text-gray-500 text-sm mt-2">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };