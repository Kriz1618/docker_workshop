import React from 'react';
import to from 'await-to-js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {}
    }
  }
  requestTobackend = async () => {
    const [error1, result] = await to(fetch('http://localhost:1025/api/', { method: "get" }));
    const [error2, personResult] = await to(result.json());

    if (error1 || error2) {
      throw Error(error1, error2);
    }
    return personResult;
  }

  makeRequest = () => {
    this.requestTobackend().then((result) => {
      this.setState({ person: result });
    }).catch(err => console.log('@@@ err --> ', err));
  }

  render() {
    return (
      <div>
        <header>
          <button onClick={this.makeRequest}>Request to backend</button>
          <p>{JSON.stringify(this.state.person)}</p>
        </header>
      </div>
    );
  }
}


export default App;
