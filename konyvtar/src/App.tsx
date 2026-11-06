
import './App.css'
import KonyvTabla from './component/KonyvTabla'
import { TablaProvider } from './context/TablaContext'

function App() {
    return(
        <TablaProvider>
          <KonyvTabla />
        </TablaProvider>
    )
}

export default App
