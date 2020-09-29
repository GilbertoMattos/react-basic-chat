import React from 'react';
import { Select, Option } from './';
import 'bootstrap/dist/css/bootstrap.css';


export default {
    component: Select,
    title: 'Atomic/Select',
};

export const Default = (args) => (
    <Select { ...args }>
        <Option>Selecione...</Option>
        <Option value='M'>Masculino</Option>
        <Option value='F'>Feminino</Option>
    </Select>
);

Default.args = {
    defaultValue='F',
    size: 'lg'
};