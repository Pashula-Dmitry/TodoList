import React,{ useRef } from 'react';


interface TodoFromProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFromProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null);
    const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
        }
    }
    return (
        <div className='input-field mt2'>
            <input type="text"
                   id='title'
                   placeholder='Введите задачу'
                   ref={ref}
                   onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className='active'>Введите задачу</label>
        </div>
    )
}