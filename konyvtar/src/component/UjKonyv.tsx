import { useState } from "react";
import { useTablaContext, type UjKonyvtipus } from "../context/TablaContext";
import "./KonyvTabla.css"

export default function UjKonyv() {
    const {konyvHozzaadas} = useTablaContext();
    const [cim, setCim] = useState<string>("")
    const [szerzo, setSzerzo] = useState<string>("")
    const [ar, setAr] = useState<number>(1)
    const [db, setDb] = useState<number>(1)

    function mentes(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const ujKonyv: UjKonyvtipus ={
            cim,
            szerzo,
            ar,
            db
        }

        konyvHozzaadas(ujKonyv)

        setCim("")
        setSzerzo("")
        setAr(0)
        setDb(0)
    }

    return (
        <section>
        <h2>Új könyv hozzá adása</h2>
        <form onSubmit={mentes}>
            <div className="form-mezo">
            <label htmlFor="cim">Cím </label>
            <input type="text" value={cim} id="cim" name="cim" onChange={(e)=>setCim(e.target.value)} required/>
            </div>

            <div className="form-mezo">
            <label htmlFor="szerzo">Szerző </label>
            <input type="text" value={szerzo} id="szerzo" name="szerzo" onChange={(e)=>setSzerzo(e.target.value)} required/>
            </div>

            <div className="form-mezo">
            <label htmlFor="ar">Ár </label>
            <input type="number" value={ar} id="ar" name="ar" onChange={(e)=>setAr(Number(e.target.value))} required/>
            </div>

            <div className="form-mezo">
            <label htmlFor="db"> Db </label>
            <input type="number" value={db} id="db" name="db" onChange={(e)=>setDb(Number(e.target.value))} required/>
            </div>

            <button type="submit" >Hozzáadás</button>
        </form>
        </section>
    );
}
