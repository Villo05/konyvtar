import type { KonyvTipusok } from "../adatok"
import { useTablaContext } from "../context/TablaContext"

interface KonyvSorProps{
    konyv: KonyvTipusok
}
export default function KonyvSor({konyv}:KonyvSorProps) {
    const {torles} = useTablaContext()
    return(
            <tr>
                <td>{konyv.id}</td>
                <td>{konyv.cim}</td>
                <td>{konyv.szerzo}</td>
                <td>{konyv.ar} Ft</td>
                <td>{konyv.db} db</td>
                <td><button type="button" className="torles" onClick={()=>torles(konyv.id)}>❌</button></td>
            </tr>
    )
}