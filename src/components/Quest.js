import React from "react";
import PropTypes from "prop-types";

function Quest(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.onSelect(props.id)}>
        <h3>Quest Name: {props.name}</h3>
        <h3>Programming Language: {props.progLang}</h3>
        <h3>Code: {props.code}</h3>
        <h3>Bounty: {props.bounty}</h3>
        {/* <h3>Vote Up: {props.upVote}</h3> vote up and down are vote tallies */}
        {/* <h3>Vote Down: {props.downVote}</h3> */}
      </div>
      {/* <button onClick={() => props.onUpVote(props.id)}>Upvote</button>
      <button onClick={() => props.onDownVote(props.id)}>Downvote</button> */}
      {/* <button onClick={handleDownVoting}>Downvote</button> */}
    </React.Fragment >
  )
}

Quest.propTypes = {
  name: PropTypes.string,
  progLang: PropTypes.string,
  code: PropTypes.number,
  bounty: PropTypes.number,
  // upVote: PropTypes.number,
  // downVote: PropTypes.number,
  // tallyUp: PropTypes.func, // function: adds a tally to a vote count and then runs a check to decide the publish order on feed
  // tallyDown: PropTypes.func
}

export default Quest;