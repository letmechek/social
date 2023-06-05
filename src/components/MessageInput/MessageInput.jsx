import React from 'react';


export default function  MessageInput()  {
    return (
      <div className="bg-white p-4">
        <div className="flex">
          <input type="text" placeholder="Type a message..." className="flex-1 border border-gray-300 rounded-lg px-4 py-2 mr-2" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
        </div>
      </div>
    );
  };