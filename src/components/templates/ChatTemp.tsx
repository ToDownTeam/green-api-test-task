import React from 'react';
import {ChatLayout} from "../organisms/chatLayout";
import * as child_process from "child_process";


interface ChatProps {
  className?: string;
  location?: Location;
  children?: React.ReactNode
}

const ChatTemp: React.FC<ChatProps> = ({children}) => {
  return (
    <ChatLayout>
      {children}
    </ChatLayout>

  );
};

export default ChatTemp;