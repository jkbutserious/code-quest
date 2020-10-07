import React from "react";
import Quest from "./Quest";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
// masterPostList needs to be moved into redux store


function QuestList(props) {

  useFirestoreConnect([
    { collection: 'quests' }
  ]);

  const quests = useSelector(state => state.firestore.ordered.quests)

  if (isLoaded(quests)) {
    return (
      <React.Fragment>
        <hr/>
        {quests.map((quest) => {
          return <Quest
          whenQuestClicked = { props.onSelectQuest }
          name={quest.name}
          progLang={quest.progLang}
          code={quest.code}
          bounty={quest.bounty}
          id={quest.id}
          key={quest.id}/>
        })}
      </React.Fragment>
    );
  }
  else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
  // function handleUpVoting() {
  //   props.onVotingUp(post.score++)
  // }

  // function handleDownVoting() {
  //   props.onVotingDown(post.score--
  // }

  // return (
  //   <React.Fragment>
  //     <hr />
  //     {Object.values(props.questList).map((quest) =>
  //       <Quest
  //         name={quest.name}
  //         progLang={quest.progLang}
  //         code={quest.code}
  //         bounty={quest.bounty}
  //         onSelect={props.onSelectQuest}
  //         id={quest.id}
  //         key={quest.id} />
  //     )}

  //   </React.Fragment>
  // )

}
QuestList.propTypes = {
  // questList: PropTypes.object,
  // score: PropTypes.number,
  // upVote: PropTypes.number,
  // downVote: PropTypes.number,
  onSelectQuest: PropTypes.func
}

export default QuestList;