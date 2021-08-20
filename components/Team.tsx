import React, { Fragment } from 'react';

import { channel, team } from '../index';

interface AppProps {
  team: team;
  handleDelete: (channel: channel, name: string) => void;
  addNewChannel: (channelName: string, name: string) => void;
}

export default ({ team, handleDelete, addNewChannel }: AppProps) => {
  const [nameChannel, setNewChannel] = React.useState('');

  const handleDel = (channel: channel, name) => {
    console.log(channel, name);
    handleDelete(channel, name);
  };

  const handleAdd = () => {
    console.log(nameChannel);
    addNewChannel(nameChannel, team.name);
    setNewChannel('');
  };

  return (
    <Fragment>
      {team.channels &&
        team.channels.map(channel => {
          return (
            <div key={channel.name + channel.id} style={{ margin: '18px' }}>
              <span>{channel.name}</span>
              <button
                style={{ margin: '5px' }}
                onClick={() => handleDel(channel, team.name)}
              >
                detete
              </button>
            </div>
          );
        })}
      <div style={{ margin: '18px' }}>
        <input
          type="text"
          value={nameChannel}
          style={{ width: '100px' }}
          onChange={e => setNewChannel(e.target.value)}
        />
        <button style={{ margin: '5px' }} onClick={() => handleAdd()}>
          add
        </button>
      </div>
    </Fragment>
  );
  // return ;
};
