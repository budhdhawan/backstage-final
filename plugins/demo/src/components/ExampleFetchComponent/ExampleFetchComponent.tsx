import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableColumn, Progress, ResponseErrorPanel } from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';


const githubUsername = 'budhdhawan'; 


const useStyles = makeStyles({
  avatar: {
    height: 22,
    width: 22,
    borderRadius: '50%',
  },
});


type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
};

type DenseTableProps = {
  repositories: Repository[];
};


export const DenseTable = ({ repositories }: DenseTableProps) => {
  const classes = useStyles();

  const columns: TableColumn[] = [
    { title: 'Name', field: 'name' },
    { title: 'URL', field: 'html_url' },
    { title: 'Description', field: 'description' },
    { title: 'Stars', field: 'stargazers_count', type: 'numeric' },
    { title: 'Forks', field: 'forks_count', type: 'numeric' },
  ];

  const data = repositories.map(repo => ({
    name: repo.name,
    html_url: <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a>,
    description: repo.description,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
  }));

  return (
    <Table
      title="GitHub Repositories"
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};


export const ExampleFetchComponent = () => {
  const { value, loading, error } = useAsync(async (): Promise<Repository[]> => {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
    if (!response.ok) {
      throw new Error(`Failed to fetch repositories: ${response.statusText}`);
    }
    return response.json();
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  return <DenseTable repositories={value || []} />;
};
