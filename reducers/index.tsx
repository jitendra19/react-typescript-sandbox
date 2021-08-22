const default_state = [
  {
    name: 'Team1',
    channels: [
      {
        name: 'channel-1',
        id: 1
      },
      {
        name: 'channel-2',
        id: 2
      }
    ]
  }
];

export default (state = default_state, action) => {
  switch (action.type) {
    case 'ADD_NEW_TEAM': {
      return [...state, { name: action.teamName, channels: [] }];
    }
    case 'ADD_NEW_CHANNEL': {
      const teamIndex = state.findIndex(team => team.name === action.teamName);
      const LastchannelId =
        state[teamIndex].channels.length &&
        state[teamIndex].channels[state[teamIndex].channels.length - 1].id;
      state[teamIndex].channels.push({
        name: action.channelName,
        id: LastchannelId + 1
      });
      return state;
    }
    case 'DELETE_CHANNEL': {
      const teamIndex = state.findIndex(team => team.name === action.teamName);
      const channelIndex = state[teamIndex].channels.findIndex(
        ch => ch.id === action.id
      );
      state[teamIndex].channels.splice(channelIndex, 1);
      return state;
    }
    default:
      return state;
  }
};
