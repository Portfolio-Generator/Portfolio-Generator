import React from 'react';
import { useParams } from 'react-router-dom';

import ReactionList from '../components/ReactionList';
import ReactionForm from '../components/ReactionForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHT } from '../utils/queries';

const SingleProject = props => {
  const { id: projectId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: projectId }
  });

  const project = data?.project || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {project.username}
          </span>{' '}
          project on {project.createdAt}
        </p>
        <div className="card-body">
          <p>{project.ProjectTitle}</p>
        </div>
      </div>

      {project.reactionCount > 0 && <ReactionList reactions={project.reactions} />}

      {Auth.loggedIn() && <ReactionForm projectId={project._id} />}
    </div>
  );
};

export default SingleProject;
