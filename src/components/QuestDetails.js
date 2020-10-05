import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

function QuestDetail(props) {

  return (
    <React.Fragment>
      <h3>Quest Name: {props.name}</h3>
      <h3>Programming Language: {props.progLang}</h3>
      <h3>Code: {props.code}</h3>
      <h3>Bounty: {props.bounty}</h3>
      {/* <h3>Vote Up: {props.upVote}</h3> {/* vote up and down are vote tallies
      <h3>Vote Down: {props.downVote}</h3> */}
      <hr />
    </React.Fragment>
  );
}

QuestDetail.propTypes = {
  name: PropTypes.string,
  progLang: PropTypes.string,
  code: PropTypes.number,
  bounty: PropTypes.number,
  // upVote: PropTypes.string,
  // downVote: PropTypes.string,
  // postDetail: PropTypes.object
}

export default QuestDetail;