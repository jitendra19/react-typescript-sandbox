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
      <form className={'channelForm'} onSubmit={() => handleAdd()}>
        <input
          type="text"
          value={nameChannel}
          // style={{ width: '100px' }}
          onChange={e => setNewChannel(e.target.value)}
          placeholder="New Channel"
        />
        <button
          style={{ margin: '5px' }}
          disabled={
            !nameChannel ||
            !!(nameChannel && team.channels.find(a => a.name === nameChannel))
          }
          onClick={() => handleAdd()}
        >
          Add
        </button>
      </form>
      {team.channels &&
        team.channels.map(channel => {
          return (
            <div key={channel.name + channel.id} className={'channelList'}>
              <button onClick={() => handleDel(channel, team.name)}>
                detete
              </button>
              <label className={'title'}>{channel.name}</label>
            </div>
          );
        })}
    </Fragment>
  );
  // return ;
};
