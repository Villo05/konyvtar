import { useTablaContext } from "../context/TablaContext"
import KonyvSor from "./KonyvSor"
import "./KonyvTabla.css"

export default function KonyvTabla(){
    const {konyvLista}=useTablaContext()
    return(
        <div className="tabla">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Cím</th>
                    <th>Szerző</th>
                    <th>Ár</th>
                    <th>DB</th>
                </tr>
            </thead>
            <tbody>
                {konyvLista.map((konyv) => {
                    return(
                        <KonyvSor
                            konyv={konyv}
                            key={konyv.id}
                        />
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}