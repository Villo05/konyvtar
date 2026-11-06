import type { KonyvTipusok } from "../adatok"
import KonyvSor from "./KonyvSor"
import "./KonyvTabla.css"

interface KonyvTablaProps{
    elem: KonyvTipusok[],
}

export default function KonyvTabla({elem}:KonyvTablaProps){
    return(
        <div className="tabla">
        <table>
            <thead>
                <th>Id</th>
                <th>Cím</th>
                <th>Szerző</th>
                <th>Ár</th>
                <th>DB</th>
            </thead>
            <tbody>
                {elem.map((konyv) => (
                    <KonyvSor
                        key={konyv.id} 
                        elem={konyv}
                    />
                ))}
            </tbody>
        </table>
    </div>
    )
}