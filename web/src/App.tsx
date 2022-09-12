// React usa JSX: JavaScript + XML (HTML)
// Consigo fazer o JS retornar HTML/CSS/JSssss

// Componentes / Propriedades

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Send 1"/>
      <Button title="Send 2"/>
      <Button title="Send 3"/>
    </div>
  
  )
}

export default App
