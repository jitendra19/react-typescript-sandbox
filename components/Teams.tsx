import React, { Fragment } from 'react';

import { channel, team } from '../index';
import Team from './Team';

type AppProps = {
  teams: team[];
};

export default ({ teams }: AppProps) => {
  const [localTeams, SetLocalTeams] = React.useState(teams);
  const [newTeam, SetNewTeam] = React.useState('');

  const handleAddChannel = (channelName: string, TeamName: string) => {
    const InternalTeams: team[] = [...localTeams];
    const teamIndex = InternalTeams.findIndex(
      (team: team) => team.name === TeamName
    );
    const LastchannelId =
      InternalTeams[teamIndex].channels.length &&
      InternalTeams[teamIndex].channels[
        InternalTeams[teamIndex].channels.length - 1
      ].id;
    // InternalTeams[teamIndex].channels.splice(channelIndex, 1);
    InternalTeams[teamIndex].channels.push({
      name: channelName,
      id: LastchannelId + 1
    });
    SetLocalTeams(InternalTeams);
  };
  const handleDeleteChannel = (channel: channel, TeamName: string) => {
    const InternalTeams: team[] = [...localTeams];
    const teamIndex = InternalTeams.findIndex(
      (team: team) => team.name === TeamName
    );
    const channelIndex = InternalTeams[teamIndex].channels.findIndex(
      (ch: channel) => ch.name === channel.name && ch.id === channel.id
    );
    InternalTeams[teamIndex].channels.splice(channelIndex, 1);
    SetLocalTeams(InternalTeams);
  };
  const addTeam = e => {
    if (newTeam) {
      SetLocalTeams([...localTeams, { name: newTeam, channels: [] }]);
    }
    SetNewTeam('');
    // e.preventDefault();
    e.stopPropagation();
    // e.stopImmediatePropagation();
  };
  const FormClickHandler = e => {
    console.log('form is clicked');
  };
  return (
    <Fragment>
      {localTeams &&
        localTeams.map(team => {
          return (
            <div key={team.name}>
              <h2>{team.name}</h2>
              <Team
                team={team}
                handleDelete={handleDeleteChannel}
                addNewChannel={handleAddChannel}
              />
            </div>
          );
        })}
      {/* <div style={{ 'margin-top': '15px' }}> */}
      <form
        style={{ marginTop: '10px' }}
        onSubmit={(e: any) => {
          e.preventDefault();
          // e.stopPropagation();
          // e.stopImmediatePropagation();
          addTeam(e);
        }}
        onClick={FormClickHandler}
      >
        <input
          type="text"
          value={newTeam}
          onChange={e => SetNewTeam(e.target.value)}
        />
        <button onClick={addTeam}> Add New Team </button>
      </form>
    </Fragment>
  );
};
