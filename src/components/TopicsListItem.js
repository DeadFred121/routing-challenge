import React from 'react';

const TopicsListItem = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default TopicsListItem;