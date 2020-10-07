import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase'

function QuestEdit(props) {
  const firestore = useFirestore();

  const { quest } = props;

  // const { post } = props;

  function handleQuestEditSubmission(event) {
    event.preventDefault();
    props.onEditQuest()
    const propertiesToUpdate = { 
      name: event.target.name.value, 
      progLang: event.target.progLang.value, 
      code: event.target.code.value, 
      bounty: event.target.bounty.value, 
      id: event.target.id.value 
    }
    return firestore.update({collection: 'quests', doc: quest.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleQuestEditSubmission}
        buttonText="Update Quest" />
    </React.Fragment>
  );
}

QuestEdit.propTypes = {
  onEditQuest: PropTypes.func
};

export default QuestEdit;
