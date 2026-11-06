import { useTablaContext } from "../context/TablaContext"


export default function KonyvSor() {
    const {konyvLista, torles} = useTablaContext()
    return(
            <tr>
                <td>{konyvLista.id}</td>
                <td>{konyvLista.cim}</td>
                <td>{konyvLista.szerzo}</td>
                <td>{konyvLista.ar} Ft</td>
                <td>{konyvLista.db} db</td>
                <td><button type="button" className="torles" onClick={torles}>❌</button></td>
            </tr>
    )
}