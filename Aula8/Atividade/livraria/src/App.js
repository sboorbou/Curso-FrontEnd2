import {useState} from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import React from 'react';
import './App.css';

function App() {
  function cadastro(){
    let livro = {isbn, titulo,autor,ano, editora}
    livros.push(livro);
    setLivros([...livros]);
    limparForm();
  }  
  function pesquisaisbn(){
    if (!isbn) {
      alert('Campo em branco, impossivel pesquisar')
    }else{
      livros.forEach((l)=>{
        if(l.isbn == isbn) {
          setIsbn(l.isbn);
          setAutor(l.autor);
          setTitulo(l.titulo);
          setAno(l.ano);
          setEditora(l.editora);
        }
      }
    )
  }
}
function pesquisaautor(){
  if (!autor) {
    alert('Campo em branco, impossivel pesquisar')
  }else{
    livros.forEach((l)=>{
      if(l.autor == autor) {
        setIsbn(l.isbn);
        setAutor(l.autor);
        setTitulo(l.titulo);
        setAno(l.ano);
        setEditora(l.editora);
        }
      }
    )
  }
}
function limparForm() {
  setIsbn("");
  setTitulo("");
  setAutor("");
  setAno("");
  setEditora("");
}
 
function excluir(isbn) {
  livros.forEach((l, index)=>{
    if(l.isbn == isbn) {
      livros.splice(index,1)
      console.log(livros);
    }
  })
  setLivros([...livros]);
}
  const [isbn, setIsbn] = useState("");
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");
  const [editora, setEditora] = useState("");
  const [livros, setLivros] = useState([]);

  return (
    <div className='App'>
      <main>
          <h2>Cadastrar</h2>
          <div className='Container'>
            <input className='isbn' placeholder='ISBN' type='number' onChange={(e) => { setIsbn(e.target.value); }} value={isbn} />
            <button onClick={pesquisaisbn}>Pesquisa</button>
            <input className='titulo' placeholder='Titulo' onChange={(e) => { setTitulo(e.target.value); }} value={titulo} />
            <input className='autor' placeholder='Autor' onChange={(e) => { setAutor(e.target.value); }} value={autor} />
            <button onClick={pesquisaautor}>Pesquisa</button> 
            <input className='ano' placeholder='Ano' type='date' onChange={(e) => { setAno(e.target.value); }}value={ano} />
            <input className='editora' placeholder='Editora' onChange={(e) => { setEditora(e.target.value); }} value={editora} />
          </div>
          <button className = 'cadastrar-btn'  onClick={cadastro}>Cadastrar</button>
          <button className = 'limpar-btn'  onClick={limparForm}>Limpar</button>
      </main>  
      <table>
        <tr>
          <th>ISBN</th>
          <th>Título</th>
          <th>Autor</th>
          <th>Ano</th>
          <th>Editora</th>
          <th>Ação</th>
        </tr>
        {livros.map((livro) => {
          return (
            <tr>
              <td>{livro.isbn}</td>
              <td>{livro.titulo}</td>
              <td>{livro.autor}</td>
              <td>{livro.ano}</td>
              <td>{livro.editora}</td>
              <td>
                  <button onClick={()=>{excluir(livro.isbn)}}>
                    < BsFillTrashFill />
                  </button>
                </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
