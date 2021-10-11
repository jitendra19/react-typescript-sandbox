import React, { Fragment } from 'react';

import { channel, team } from '../index';
import Team from './Team';
import Table from './table';

// import '../style.scss';

type AppProps = {
  teams: team[];
  // TODO update types for below functions
  addNewTeam: (newTeamName: any) => any;
  addNewChannel: (channelName: string, teamName: string) => any;
  deleteChannel: (id: number, teamName: string) => any;
};

export default ({
  teams,
  addNewTeam,
  addNewChannel,
  deleteChannel,
}: AppProps) => {
  const [newTeam, SetNewTeam] = React.useState('');

  const handleAddChannel = (channelName: string, TeamName: string) => {
    addNewChannel(channelName, TeamName);
    fetch('https://jsonmock.hackerrank.com/api/stocks?date=5-January-2000')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch(() => {});
  };

  const handleDeleteChannel = (channel: channel, TeamName: string) => {
    deleteChannel(channel.id, TeamName);
  };

  const addTeam = (e) => {
    if (newTeam) {
      addNewTeam(newTeam);
    }
    SetNewTeam('');
    // e.preventDefault();
    e.stopPropagation();
    // e.stopImmediatePropagation();
  };

  const FormClickHandler = (e) => {
    console.log('form is clicked');
  };

  return (
    <Fragment>
      <form
        className={'teamForm'}
        onSubmit={(e) => {
          addTeam(e);
        }}
        onClick={FormClickHandler}
        id="teamForm"
      >
        <input
          type="text"
          value={newTeam}
          onChange={(e) => SetNewTeam(e.target.value)}
          placeholder="New Team"
        />
        <button
          onClick={addTeam}
          disabled={
            !newTeam || !!(newTeam && teams.find((a) => a.name === newTeam))
          }
        >
          Add
        </button>
      </form>
      {teams &&
        teams.map((team) => {
          return (
            <div
              key={team.name}
              className={'team-list'}
              onClick={() => console.log('logging from team-list div')}
            >
              <h4 className={'teamTitle'}>{team.name}</h4>
              <Team
                team={team}
                handleDelete={handleDeleteChannel}
                addNewChannel={handleAddChannel}
              />
            </div>
          );
        })}
      <Table teams={teams} />
    </Fragment>
  );
};
