import DataTable from 'react-data-table-component';
import React from 'react';
import { channel, team } from '../index';

interface AppProps {
  teams: team[];
}
export default (props: AppProps) => {
  const teams = props.teams;
  const columns = [
    { name: 'Team Name', selector: row => row.name },
    { name: 'number of channels', selector: row => row.totalChannels }
  ];
  const data = teams.map((a, index) => ({
    id: index,
    name: a.name,
    totalChannels: a.channels.length
  }));
  return <DataTable columns={columns} data={data} />;
};
