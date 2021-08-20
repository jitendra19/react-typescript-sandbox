import React, { ChangeEventHandler, Component } from 'react';
import { render } from 'react-dom';

import Hello from './components/Hello';
import Teams from './components/Teams';

import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}
export interface channel {
  name: string;
  id: number;
}
export interface team {
  name: string;
  channels: channel[];
}

const teams = [
  {
    name: 'Team1',
    channels: [
      {
        name: 'abc1',
        id: 1
      },
      {
        name: 'xyz1',
        id: 2
      }
    ]
  },
  {
    name: 'Team2',
    channels: [
      {
        name: 'abc1',
        id: 1
      },
      {
        name: 'xyz1',
        id: 2
      }
    ]
  }
];

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: 'React'
    // };
  }

  render() {
    return (
      <div>
        {/* <Hello name={this.state.name} /> */}

        <Teams teams={teams} />

        {/* <p>Start editing to see some magic happen :)</p> */}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
