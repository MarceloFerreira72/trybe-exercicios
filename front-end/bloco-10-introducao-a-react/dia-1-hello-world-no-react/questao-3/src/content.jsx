import React from 'react'
import Card from 'react-bootstrap/Card'

class Content extends React.Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return (
      <ul key='conteudos'>
        {conteudos.map((element) => <Card style={{ width: '21rem' }}>
          <Card.Body> 
            <Card.Title>O conteúdo é: {element.conteudo}</Card.Title>
            <Card.Text>
            Status: {element.status} <br />
            Bloco: {element.bloco}
            </Card.Text>
        </Card.Body>
        </Card>
        )}
      </ul>
    )  
  }
}

export default Content;