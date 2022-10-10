import {useState} from "react";

function Formulario() {
    const [nome, setNome] = useState('Samuel');
    const [idade, setIdade] = useState('39');

    function cadastrar() {
        alert('Cadastrar')
    }
    let texto = "Meu Texto dentro de uma variavel no formulario"
    return (
        <div>
        <h2> {texto} </h2>
        <h1>{nome}</h1>
        <input placeholder="Nome" value={nome} onChange={(e)=>{setNome(e.target.value)}}></input>
        <h1>{idade}</h1>
        <input placeholder="Idade" value={idade} onChange={(i)=>{setIdade(i.target.value)}} ></input>
        <button onClick={cadastrar}>Cadastrar</button>
        </div>
    );
  }
  
  export default Formulario;
  