// import React from 'react';
// import './App.css';

// export default class App extends React.Component {
  
//   render() {
//     return <div> React Marathon </div>    
//   }
// }
import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appData: 'React Marathon',
    };
  }

  ChangeData = () => {
    this.setState(prevState => ({
      appData: prevState.appData.toLowerCase(),
    }));
  };

  render() {
    return (
      <div onClick={this.ChangeData}>
        {this.state.appData}
      </div>
    );
  }
}
