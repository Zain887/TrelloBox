import TodoComp from './Todo';
import { Column } from './types';
import React, { useState } from 'react';

const CardComp: React.FC = () => {
    const [columns, setColumns] = useState<Column[]>([
        {
            title: 'Test Column 1',
            edit: false,
            cards: [
                {
                    title: 'cardTitle',
                    edit: false,
                    content: 'Type Your Description Title Here',
                    todos: [],
                },
            ],
        },
    ]);

    const updateCardContent = (columnIndex: number, cardIndex: number, newContent: string) => {
        const newColumns = [...columns];
        newColumns[columnIndex].cards[cardIndex].content = newContent;
        setColumns(newColumns);
    };

    return (
        <>
            {columns.map((column, columnIndex) => (
                <div key={columnIndex} className='my-5'>
                    {column.cards.map((card, cardIndex) => (

                        <div key={cardIndex} className='bg-[#282E33] mb-2 rounded-lg p-3 h-auto break-words relative'>
                            {card.edit ? (
                                <input
                                    type='text'
                                    autoFocus
                                    value={card.content}
                                    onChange={(event) => updateCardContent(columnIndex, cardIndex, event.target.value)}
                                    onBlur={() => {
                                        const newColumns = [...columns];
                                        newColumns[columnIndex].cards[cardIndex].edit = false;
                                        setColumns(newColumns);
                                    }}
                                    className='text-[#AEB9C5] text-sm bg-transparent outline-none w-full'
                                />
                            ) : (
                                <p
                                    className='text-[#AEB9C5] text-sm bg-transparent outline-none w-full cursor-pointer'
                                    onClick={() => {
                                        const newColumns = [...columns];
                                        newColumns[columnIndex].cards[cardIndex].edit = true;
                                        setColumns(newColumns);
                                    }}
                                >
                                    {card.content}
                                </p>
                            )}
                            <hr />
                            <TodoComp columnIndex={columnIndex} cardIndex={cardIndex} columns={columns} setColumns={setColumns} />
                        </div>

                    ))}
                </div>
            ))}
        </>
    );
};

export default CardComp;
