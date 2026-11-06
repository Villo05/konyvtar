
export type KonyvTipusok={
    id : number,
    cim: string,
    szerzo: string,
    ar: number,
    db: number
}

export const KONYVEK:KonyvTipusok[] = [
    {
        id: 1,
        cim: "The Deal",
        szerzo: "Elle Kennedy",
        ar: 5999,
        db: 10
    },
    {
        id: 2,
        cim: "Tüskék és rózsák udvara",
        szerzo: "Sarah J Maas",
        ar: 6999,
        db: 12
    },
    {
        id: 3,
        cim: "Heated Rivalry",
        szerzo: "Rachel Reid",
        ar: 5499,
        db: 3
    },
    {
        id: 4,
        cim: "Skarlát angyal",
        szerzo: "S. T. Abby",
        ar: 4490,
        db: 7
    },
    {
        id: 5,
        cim: "A düh szilánkja",
        szerzo: "Riley Baker",
        ar: 5999,
        db: 3
    },
]