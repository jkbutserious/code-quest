import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewQuestForm(props){

  function handleNewQuestFormSubmission(event) {
    event.preventDefault();
    props.onNewQuestCreation({
      name: event.target.name.value, 
      progLang: event.target.progLang.value, 
      code: event.target.code.value,
      bounty: 0,
      id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewQuestFormSubmission}
        buttonText="Add Quest" />
    </React.Fragment>
  );
}

NewQuestForm.propTypes = {
  onNewQuestCreation: PropTypes.func
};

export default NewQuestForm;