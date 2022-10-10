import Formulario from "./Formulario";


function App() {
  let texto = "Meu Texto dentro de uma variavel"
  return (
    <div>
    <h2> {texto} </h2>
    <Formulario></Formulario>
    </div>
  );
}

export default App;
