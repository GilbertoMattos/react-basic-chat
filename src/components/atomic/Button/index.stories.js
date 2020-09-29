import React from 'react';
import { Button} from './';
import 'bootstrap/dist/css/bootstrap.css'


export default {
    component: Button,
    title: 'Atomic/Button'
}

export const Default = (args) => <Button { ...args }>{ args.children }</Button>;

Default.args = {
    children: 'Texto do button',
}