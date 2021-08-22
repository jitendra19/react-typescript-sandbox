import { store } from '../index';

export const addNewTeam = teamName => {
  store.dispatch({
    type: 'ADD_NEW_TEAM',
    teamName
  });
};

export const addNewChannel = (channelName, teamName) => {
  store.dispatch({
    type: 'ADD_NEW_CHANNEL',
    channelName,
    teamName
  });
};

export const deleteChannel = (id, teamName) => {
  store.dispatch({
    type: 'DELETE_CHANNEL',
    channelId: id,
    teamName
  });
};
