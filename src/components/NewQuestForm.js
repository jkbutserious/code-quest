import React from "react";
// import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'

function NewQuestForm(props){

  const firestore = useFirestore();

  function addQuestToFirestore(event) {
    event.preventDefault();

    props.onNewQuestCreation();

    return firestore.collection('quests').add(
      {
        name: event.target.name.value, 
        progLang: event.target.progLang.value, 
        code: event.target.code.value,
        bounty: event.target.bounty.value,
      }
    )
  }

  // function handleNewQuestFormSubmission(event) {
  //   event.preventDefault();
  //   props.onNewQuestCreation({
  //     name: event.target.name.value, 
  //     progLang: event.target.progLang.value, 
  //     code: event.target.code.value,
  //     bounty: event.target.bounty.value,
  //     id: v4()});
  // }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addQuestToFirestore}
        buttonText="Add Quest" />
    </React.Fragment>
  );
}

NewQuestForm.propTypes = {
  onNewQuestCreation: PropTypes.func
};

export default NewQuestForm;