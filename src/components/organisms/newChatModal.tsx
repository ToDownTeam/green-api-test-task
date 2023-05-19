import React from 'react';
import {Button} from "../atoms/button";
import {CreateChatForm} from "../molecoles/createChatForm";

const NewChatModal = () => {
  return (
    <div id="small-modal" className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative w-full absolute top-[30%] m-auto inset-0 max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-center items-center  p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
             Create Contact
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <CreateChatForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChatModal;