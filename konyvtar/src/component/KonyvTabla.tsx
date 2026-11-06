import { useTablaContext } from "../context/TablaContext"
import KonyvSor from "./KonyvSor"
import "./KonyvTabla.css"

export default function KonyvTabla(){
    const {konyvLista}=useTablaContext()
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
                {konyvLista.map((konyv, i) => {
                    return(
                        <KonyvSor
                            konyv={konyv}
                            key={i}
                        />
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}