import type { KonyvTipusok } from "../adatok"

interface KonyvSorProps{
    elem: KonyvTipusok
}

export default function KonyvSor({elem}:KonyvSorProps) {
    return(
            <tr>
                <td>{elem.id}</td>
                <td>{elem.cim}</td>
                <td>{elem.szerzo}</td>
                <td>{elem.ar} Ft</td>
                <td>{elem.db} db</td>
                <td><button type="button" className="torles">❌</button></td>
            </tr>
    )
}