// MemberContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Member as MemberProp } from './types';

interface MemberContextProps {
  members: MemberProp[];
  addNewMember: (newMemberName: string) => void;
}

const MemberContext = createContext<MemberContextProps | undefined>(undefined);

export function MemberProvider({ children }: { children: React.ReactNode }) {
  const [members, setMembers] = useState<MemberProp[]>([
    { name: 'zain' },
    { name: 'Ansari' },
  ]);

  const addNewMember = (newMemberName: string) => {
    if (newMemberName.trim() !== '') {
      const newMemberId = members.length + 1;
      const newMember = { id: newMemberId, name: newMemberName };
      setMembers([...members, newMember]);
    }
  };

  return (
    <MemberContext.Provider value={{ members, addNewMember }}>
      {children}
    </MemberContext.Provider>
  );
}

export function useMemberContext() {
  const context = useContext(MemberContext);
  if (context === undefined) {
    throw new Error('useMemberContext must be used within a MemberProvider');
  }
  return context;
}
