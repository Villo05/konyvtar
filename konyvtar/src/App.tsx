
import { useState } from 'react'
import './App.css'
import KonyvTabla from './component/KonyvTabla'
import { KONYVEK } from './adatok'

function App() {
const [k, setK]=useState(KONYVEK)
    return(
        <KonyvTabla 
            elem={k}
        />
    )
}

export default App
