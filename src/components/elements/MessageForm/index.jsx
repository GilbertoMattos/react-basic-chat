import React, { useState } from 'react';

import { Input } from '../../atomic/Input';
import { Button } from '../../atomic/Button';
import { Select, Option } from '../../atomic/Select';

export const MessageForm = ({ users, email, socket }) => {

    const [to, setTo] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        socket.emit('sendMessage', {msg: message, usu: to}, () => {
            setMessage('');
        });

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='bg-primary d-flex p-3'>
                <div className='flex-grow-1 mr-3'>
                    <Input
                        style={{ marginBottom: '.25rem' }}
                        size='lg'
                        placeholder='Mensagem'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Select size='sm' value={to} onChange={(e) => { setTo(e.target.value) }}>
                        <Option>Enviar para todos</Option>
                        {users.filter((obj) => obj !== email).map((obj, index) => (
                            <Option
                                value={obj}
                                key={index}>
                                {obj}
                            </Option>
                        ))}
                    </Select>
                </div>
                <Button type='submit' color='light'>Enviar</Button>
            </div>
        </form>
    )
}