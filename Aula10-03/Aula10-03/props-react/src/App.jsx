import './App.css'
import Mensagem from './components/mensagem.jsx'
import PropsNomeado from './components/propsNomeado.jsx'
import MeuAvatar from './components/MeuAvatar.jsx'

function App() {

  return (
    <>
      <PropsNomeado 
        titulo='Interclasse 2026' 
        texto='Bem vindo ao Interclasse' 
        nome=' Estevan' 
        altura={1.82} 
      />

      <MeuAvatar
        nome="Estevan"
        idade={18}
        foto="https://agorarn.com.br/files/uploads/2023/03/Neymar-930x524.jpg"
        estiloMusical="Funk"
        disciplina="Educação Física"
      />
    </>
  )
}

export default App