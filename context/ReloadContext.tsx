"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface RealodTypes {
  reload: boolean;
  triggerReload: () => void;
}

const ReloadContext = createContext<RealodTypes>({
  reload: false,
  triggerReload: () => {},
});

export default function ReloadProvider({ children }: { children: ReactNode }) {
  const [reload, setReload] = useState<boolean>(false);

  const triggerReload = () => {
    setReload((prevRe) => !prevRe);
  };

  return (
    <ReloadContext.Provider value={{ reload, triggerReload }}>
        {children}
    </ReloadContext.Provider>
  )
}

export function useReload(){
    return useContext(ReloadContext);
}