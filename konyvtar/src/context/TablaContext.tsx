import { createContext, useContext, useState, type ReactNode } from "react";
import { KONYVEK, type KonyvTipusok } from "../adatok";

export type UjKonyvtipus = Omit<KonyvTipusok, "id">

interface TablaContextValue{
    konyvLista: KonyvTipusok[],
    konyvHozzaadas: (konyv: UjKonyvtipus) => void,
    torles: (id:number)=>void
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

    function konyvHozzaadas(konyv: UjKonyvtipus){
        setTablazatLista(elozoLista =>{
            const ujId = Math.max(0, ...elozoLista.map(k => k.id))+1
            return[...elozoLista, {...konyv, id: ujId}]
        })
    }

    return(
        <TablaContext.Provider value={{torles, konyvLista, konyvHozzaadas}} >
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