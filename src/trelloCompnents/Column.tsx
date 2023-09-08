import React, { useState } from 'react';
import { Column } from './types';
import Card from './Card';

const ColumnComp: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>([
    {
      title: 'Test Column 1',
      edit: false,
      cards: [],
    },
  ]);

  const updateColumTitle = (columnIndex: number) => {
    const newColumns = [...columns];
    newColumns[columnIndex].edit = true;
    setColumns(newColumns);
  };

  const columTilteEdit = (columnIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newColumns = [...columns];
    newColumns[columnIndex].title = event.target.value;
    setColumns(newColumns);
  };

  const columTilteUpdated = (columnIndex: number) => {
    const newColumns = [...columns];
    newColumns[columnIndex].edit = false;
    setColumns(newColumns);
  };

  const addNewColumn = () => {
    const newColumns = [...columns];
    const newColumnsTilte = `Column ${newColumns.length + 1}`
    newColumns.push({
      title: newColumnsTilte,
      edit: false,
      cards: []
    });
    setColumns(newColumns);
  };

  const addNewCard = (columnIndex: number) => {
    const newColumns = [...columns];
    const newCardTitle = `card${newColumns[columnIndex].cards.length + 1}`;

    newColumns[columnIndex].cards.push({
      title: newCardTitle,
      edit: false,
      content: 'Add Your Content Here',
      todos: [],
    });
    setColumns(newColumns);
  };

  return (
    <div className='inline-flex gap-3'>
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className='p-3 bg-[#101204] md:w-[380px] rounded-xl h-fit'>
          <div className='flex justify-between items-center pb-3'>
            {column.edit ? (
              <input
                type='text'
                onChange={(event) => columTilteEdit(columnIndex, event)}
                onBlur={() => columTilteUpdated(columnIndex)}
                autoFocus
                value={column.title}
                className='text-[#AEB9C5] text-sm bg-transparent outline-none w-full'
              />
            ) : (
              <p className='text-[#AEB9C5] text-sm hover:text-red-500 cursor-pointer' onClick={() => updateColumTitle(columnIndex)}>
                {column.title}
              </p>
            )}
            <img
              className=' md:w-5 md:h-5 hover:bg-red-500 rounded-sm cursor-pointer'
              src='/assetes/more.svg'
              alt='more'
            />
          </div>
          <div className='md:max-h-[698px] overflow-y-scroll'>
            {column.cards.map((card, cardIndex) => (
              <Card key={cardIndex} />
            ))}
          </div>
          <div className='flex justify-between items-center pt-3'>
            <div className='flex items-center gap-2 cursor-pointer text-[#AEB9C5] hover:text-red-500'>
              <p className='text-lg'>+</p>
              <p className='text-sm' onClick={() => addNewCard(columnIndex)}>Add a Card</p>
            </div>
            <img className=' md:w-5 md:h-5 hover:bg-red-500 rounded-sm cursor-pointer' src='/assetes/addform.svg' alt='more' />
          </div>
        </div>
      ))}
      <button className=' bg-blue-500 w-[179px] px-6 h-12 rounded-lg font-bold hover:text-orange-600 hover:bg-black' onClick={addNewColumn}>
        Add Another List
      </button>
    </div>
  );
};

export default ColumnComp;
