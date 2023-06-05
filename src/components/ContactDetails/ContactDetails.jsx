import React from 'react';
import ConversationList from '../ConversationList/ConversationList';


export default function ContactDetails()  {
    const contact = {
      name: 'John Doe',
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      phoneNumber: '+1234567890',
      email: 'johndoe@example.com',
    };
  
    return (
      <div className="bg-white p-4">
        <div className="flex items-center mb-4">
          <div className="rounded-full h-12 w-12 bg-gray-300 mr-4"></div>
          <div>
            <h3 className="text-lg font-semibold">{contact.name}</h3>
            <p className="text-gray-500">{contact.phoneNumber}</p>
            <p className="text-gray-500">{contact.email}</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <div className="bg-gray-100 p-4">
              <ConversationList />
            </div>
          </div>
          {/* <div className="flex-2">
            <div className="flex flex-col h-screen">
              <SelectedConversation />
              <MessageInput />
            </div>
          </div> */}
        </div>
      </div>
    );
  };