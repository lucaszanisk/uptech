import React, { Component } from 'react';
import api from './api';

class App extends Component {
  state = {
    livros: [],
  };

  async componentDidMount() {
    const response = await api.get('', { params: { q: 'harry' } });
    console.log(response.data);

    this.setState({ livros: response.data });
  }

  render() {
    const { livros } = this.state;

    return (
      <div>
        <h1>Listar os filmes</h1>
      </div>
    );
  }
}

export default App;
