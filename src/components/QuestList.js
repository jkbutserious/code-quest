import React from "react";
import Quest from "./Quest";
import PropTypes from "prop-types";
// masterPostList needs to be moved into redux store


function QuestList(props) {
  // function handleUpVoting() {
  //   props.onVotingUp(post.score++)
  // }

  // function handleDownVoting() {
  //   props.onVotingDown(post.score--
  // }

  return (
    <React.Fragment>
      <hr />
      {Object.values(props.questList).map((post) =>
        <Post
          name={quest.name}
          progLang={quest.progLang}
          code={quest.code}
          bounty={quest.bounty}
          onSelect={props.onSelectQuest}
          id={quest.id}
          key={quest.id} />
      )}

    </React.Fragment>
  )

}
QuestList.propTypes = {
  questList: PropTypes.object,
  // score: PropTypes.number,
  // upVote: PropTypes.number,
  // downVote: PropTypes.number,
  onSelectQuest: PropTypes.func
}

export default QuestList;