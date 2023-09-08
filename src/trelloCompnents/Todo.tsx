import React, { useState } from 'react';
import { Column, Todo } from './types';
import Member from './Member';

interface Props {
    columnIndex: number;
    cardIndex: number;
    columns: Column[];
    setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
}

const TodoComp: React.FC<Props> = ({ columnIndex, cardIndex, columns, setColumns }) => {
    const todoList: Todo[] = columns[columnIndex].cards[cardIndex].todos;
    const [memberPopUp, setMemberPopUp] = useState(false);

    const closeMemberPopup = () => {
        setMemberPopUp(false);
    }

    const addNewToDoHandler = () => {
        const newColumns = [...columns];
        newColumns[columnIndex].cards[cardIndex].todos.push({
            label: 'TaskToDo',
            checked: false,
            edit: false,
        });
        setColumns(newColumns);
    };

    const updateTodoTitleHandler = (todoIndex: number, cardIndex: number, columnIndex: number) => {
        const newColumns = [...columns];
        if (newColumns[columnIndex].cards[cardIndex].todos[todoIndex].label === 'TaskToDo') {
            newColumns[columnIndex].cards[cardIndex].todos[todoIndex].edit = true;
            setColumns(newColumns);
        }
    };
    const toDoTitleUpdated = (todoIndex: number, cardIndex: number, columnIndex: number) => {
        const newColumns = [...columns];
        newColumns[columnIndex].cards[cardIndex].todos[todoIndex].edit = false;
        setColumns(newColumns);
    };
    const todoTitleEdit = (todoIndex: number, cardIndex: number, columnIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newColumns = [...columns];
        newColumns[columnIndex].cards[cardIndex].todos[todoIndex].label = event.target.value;
        setColumns(newColumns);
    };
    const toggleTodoCheck = (todoIndex: number) => {
        const newColumns = [...columns];
        newColumns[columnIndex].cards[cardIndex].todos[todoIndex].checked = !newColumns[columnIndex].cards[cardIndex].todos[todoIndex].checked;
        setColumns(newColumns);
    };
    return (
        <>
            <div className='max-h-[320px] overflow-y-scroll p-5 relative'>
                {todoList.map((todo, todoIndex) => (
                    <div key={todoIndex} className='break-all flex items-center gap-5'>
                        <input
                            type='checkbox'
                            className='w-5 h-5'
                            checked={todo.checked}
                            onChange={() => toggleTodoCheck(todoIndex)}
                        />
                        {todo.edit ? (
                            <input
                                className='w-full bg-transparent outline-none text-white text-lg'
                                type='text'
                                placeholder='Enter label'
                                value={todo.label}
                                onBlur={() => toDoTitleUpdated(todoIndex, cardIndex, columnIndex)}
                                onChange={(event) => todoTitleEdit(todoIndex, cardIndex, columnIndex, event)}
                            />
                        ) : (
                            <p
                                className={`font-light capitalize text-lg text-white ${todo.checked ? 'line-through' : ''}`}
                                onClick={() => updateTodoTitleHandler(todoIndex, cardIndex, columnIndex)}
                            >
                                {todo.label}
                                {todo.label !== 'TaskToDo' ? (
                                    <span className='text-red-600 text-sm cursor-pointer' title='AssignMemberList' onClick={()=>{setMemberPopUp(true)}}>
                                        (AS.List)
                                    </span>
                                ) : null}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            <div className='grid gap-4'>
                <button
                    className='bg-blue-500 text-white font-bold text-lg py-1 px-3 rounded-lg hover:bg-blue-700'
                    onClick={addNewToDoHandler}
                >
                    Add New Todo
                </button>
            </div>
            {memberPopUp && (
                <Member showListOnly={false} close={closeMemberPopup} />
            )}
        </>
    );
};

export default TodoComp;
