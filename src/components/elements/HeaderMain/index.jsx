import React from 'react';
import { useHistory } from "react-router-dom";

import { Button } from '../../atomic/Button'

export const HeaderMain = ({ email }) => {

    let history = useHistory();

    return (
        <header className='bg-primary d-flex p-3 text-white'>
            <div className='flex-grow-1 overflow-hidden mr-3'>
                <div>Conectado como</div>
                <div className='font-weight-bold'>{email}</div>
            </div>
            <Button color='light' onClick={() => history.push('/')}>Sair</Button>
        </header>
    )
}