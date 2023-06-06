import React from 'react';


export default function ContactDetails()  {
    const contact = {
      name: 'John Doe',
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      phoneNumber: '+1234567890',
      email: 'johndoe@example.com',
    };
    const conversations = [
      { id: 1, name: 'John Doe', lastMessage: 'Hello there!' },
      { id: 2, name: 'Jane Smith', lastMessage: 'How are you?' },
      { id: 3, name: 'John Doe', lastMessage: 'Hello there!' },
      { id: 4, name: 'Jane Smith', lastMessage: 'How are you?' },
      { id: 5, name: 'Mike Johnson', lastMessage: 'Did you watch the game?' },
      { id: 3, name: 'John Doe', lastMessage: 'Hello there!' },
      { id: 4, name: 'Jane Smith', lastMessage: 'How are you?' },
      { id: 5, name: 'Mike Johnson', lastMessage: 'Did you watch the game?' },
      { id: 3, name: 'John Doe', lastMessage: 'Hello there!' },
      { id: 4, name: 'Jane Smith', lastMessage: 'How are you?' },
      { id: 5, name: 'Mike Johnson', lastMessage: 'Did you watch the game?' },
    ];
  
    return (
      <div className="p-4 bg-gray-100 bg-opacity-30  overflow-y-scroll " style={{height:'77.3%'}} >
        <div className="flex items-center mb-4">
          <div className="rounded-full h-12 w-12 bg-gray-300 mr-4"></div>
          <div>
            <h3 className="text-lg font-semibold">{contact.name}</h3>
            <p className="text-gray-500">{contact.phoneNumber}</p>
            <p className="text-gray-500">{contact.email}</p>
          </div>
        </div>
              <div className=" ">
                <div className="p-4 bg-white border-b border-blue-300">
                  <h2 className="text-lg font-bold">Conversations</h2>
                </div>
                <div className="flex-1 p-4">
                  {conversations.map((conversation) => (
                    <div key={conversation.id} className="flex items-center mb-4">
                      <div className="rounded-full h-12 w-12 bg-gray-300 mr-4"></div>
                      <div>
                        <h3 className="text-lg font-semibold">{conversation.name}</h3>
                        <p className="text-gray-500">{conversation.lastMessage}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
    );
  };