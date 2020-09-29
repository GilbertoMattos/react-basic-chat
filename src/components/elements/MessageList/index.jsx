import React, { useRef, useEffect } from 'react';
import { MessageItem } from '../MessageItem'

export const MessageList = ({ messages }) => {

    const messageContainerRef = useRef(null);

    const scrollToBottom = () => {
        messageContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages])

    return (
        <div className='flex-grow-1 p-3 overflow-auto'>

            {messages.map((obj, index) => {

                let type = 'info';

                switch (obj.tipo) {
                    case 'sistemas':
                        type = 'secondary';
                        break;
                    case 'privada':
                        type = 'warning';
                        break;
                    default:
                        type = 'info';
                        break;
                }

                return (
                    <MessageItem
                        message={obj.msg}
                        type={type}
                        key={index}
                    />
                )
            })}

            <div ref={messageContainerRef} />
        </div>
    )
}