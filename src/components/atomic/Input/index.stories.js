import React from 'react';
import { Input } from './';
import 'bootstrap/dist/css/bootstrap.css'


export default {
    component: Input,
    title: 'Atomic/Input'
}

export const Default = (args) => <Input { ...args }/>;

Default.args = {
    
}