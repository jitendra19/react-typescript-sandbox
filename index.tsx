import React, { ChangeEventHandler, Component } from 'react';
import { render } from 'react-dom';

import Hello from './components/Hello';
import Teams from './components/Teams';

import './style.css';

interface AppProps {}
interface AppState {}
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
  }
];

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Teams teams={teams} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
