import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore } from 'redux';

import reducer from './reducers';

import Teams from './components/Teams';

// TODO to add type interface for store
const store = createStore(reducer);

import './style.scss';

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

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'list-container'}>
        <Teams
          teams={store.getState()}
          addNewTeam={teamName =>
            store.dispatch({ type: 'ADD_NEW_TEAM', teamName })
          }
          addNewChannel={(channelName, teamName) =>
            store.dispatch({
              type: 'ADD_NEW_CHANNEL',
              channelName,
              teamName
            })
          }
          deleteChannel={(id, teamName) =>
            store.dispatch({ type: 'DELETE_CHANNEL', channelId: id, teamName })
          }
        />
      </div>
    );
  }
}

const renderComponent = () => render(<App />, document.getElementById('root'));

store.subscribe(renderComponent);
renderComponent();
