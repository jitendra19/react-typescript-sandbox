import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import reducer from './reducers';
import { addNewTeam, addNewChannel, deleteChannel } from './actions';

import Teams from './components/Teams';
import Table from './components/table';

// TODO to add type interface for store
export const store = createStore(reducer);

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
      <div
        className={'list-container'}
        id="asdf"
        onClick={() => console.log('logging from list-container div')}
      >
        <Teams
          teams={store.getState()}
          addNewTeam={addNewTeam}
          addNewChannel={addNewChannel}
          deleteChannel={deleteChannel}
        />
        {/* <Table /> */}
      </div>
    );
  }
}

const renderComponent = () => render(<App />, document.getElementById('root'));

store.subscribe(renderComponent);
renderComponent();
