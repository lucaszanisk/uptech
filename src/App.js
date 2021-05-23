import React, { Component } from 'react';
import api from './api';

class App extends Component {
  state = {
    livros: [],
  };

  async componentDidMount() {
    const response = await api.get('', { params: { q: 'harry' } }); //requisição de busca palavra 'harry'
    //console.log(response.data.items)
    this.setState({ livros: response.data.items });
  }

  render() {
    return (
      <div>
        <h1>Listar os filmes</h1>
        {console.log(this.state.livros)}
        {this.state.livros.map(livro =>(
          <li key= {livro.id}>
            <p> {livro.volumeInfo.title} </p>

          </li>
        ))}
      </div>
    );
  }
}

export default App;
