
import './App.css'
import KonyvTabla from './component/KonyvTabla'
import UjKonyv from './component/UjKonyv'

function App() {
    return(
      <main>
        <header>Könyv áruház</header>
        <p>admin</p>
            <KonyvTabla />
            <UjKonyv />
            <footer>minden jog fenn tartva</footer>
      </main>
      
      
    )
}

export default App
