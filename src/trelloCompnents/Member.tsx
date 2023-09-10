import React, { useState } from 'react';
import { useMemberContext } from './MemberContext';


interface props {
    showListOnly?: boolean
    close?: () => void
    onMemberSelect?: (index: number, name: string) => void // Add the onMemberSelect prop
}

const Member: React.FC<props> = ({ showListOnly = true, close, onMemberSelect }) => {
    const { members, addNewMember } = useMemberContext();
    const [newMemberName, setNewMemberName] = useState('');
    return (
        <>
            {showListOnly ? (
                <div className='p-4'>
                    <h2 className='text-white text-lg font-bold mb-4'>Members <span className='text-red-600 text-xs pl-5'>(Team Members Total:&nbsp;{members.length})</span> </h2>
                    <ul className='space-y-2 max-h-[500px] overflow-y-auto'>
                        {members.map((member, index) => (
                            <li key={index} className='text-white'>
                                {member.name}
                            </li>
                        ))}
                    </ul>
                    <div className='mt-4 flex'>
                        <input
                            type='text'
                            className='rounded-l-lg p-2 w-full outline-none'
                            placeholder='Enter member name'
                            value={newMemberName}
                            onChange={(e) => setNewMemberName(e.target.value)}
                        />
                        <button
                            className='bg-blue-500 text-white font-bold text-sm px-4 rounded-r-lg hover:bg-blue-700'
                            onClick={() => {
                                addNewMember(newMemberName);
                                setNewMemberName('');
                              }}
                        >
                            Add
                        </button>
                    </div>
                </div>
            ) : (
                <ul className='space-y-2 h-full px-5 overflow-y-auto mt-2 absolute top-0 right-0 w-full backdrop-blur-sm'>
                    <p className='text-red-600 bg-red-50 rounded-lg font-extrabold text-center text-base'>Assign Members To Task</p>
                    {members.map((member, index) => (
                        <div className='flex items-center gap-5' onClick={() => onMemberSelect && onMemberSelect(index, member.name)}>
                            <input type="checkbox" className='h-4 w-4' />
                            <li key={index} className='text-base font-bold text-[#00ffff]'>
                                {member.name}
                            </li>
                        </div>
                    ))}
                    <p className='text-center text-red-600 cursor-pointer text-bold font-extrabold text-base bg-red-50 w-fit m-auto px-5 rounded-lg' onClick={close}>close</p>
                </ul>
            )}
        </>

    );
};

export default Member;
