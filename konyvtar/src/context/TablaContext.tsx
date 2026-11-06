import { createContext, useContext, useState, type ReactNode } from "react";
import { KONYVEK, type KonyvTipusok } from "../adatok";

interface TablaContextValue{

}

export const TablaContext = createContext<TablaContextValue | undefined>(undefined)

interface TablaProviderProps{
    children: ReactNode
}

export function TablaProvider({children}: TablaProviderProps){
    const [konyvLista, setTablazatLista] = useState<KonyvTipusok[]>(KONYVEK)
    function torles(id:number){
        console.log(id)
        setTablazatLista(elozoLista => elozoLista.filter(konyv => konyv.id !== id))
    }
    return(
        <TablaContext.Provider value={{torles, konyvLista}} >
            {children}
        </TablaContext.Provider>
    )

}

export function useTablaContext(){
    const context = useContext(TablaContext)

    if(context === undefined){
        throw new Error ("A komponenshez TablaProvider szükséges.")
    }
    return context
}