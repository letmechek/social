
import React from 'react';
import Toolbar from '../../Toolbar/Toolbar';
import ContactDetails from '../ContactDetails/ContactDetails';
import SelectedConversation from '../SelectedConversation/SelectedConversation';
import MessageInput from '../MessageInput/MessageInput';


export default function Message()  {
    return (
      <div className='bg-red-200 '>
      <div className="">
        {/* <Toolbar /> */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex">
            <div className="w-1/4">
              <ContactDetails />
            </div>
            <div className="w-3/4">
              <div className="bg-white flex flex-col h-screen">
                <SelectedConversation />
                <MessageInput />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
  

  