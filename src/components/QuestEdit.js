import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function QuestEdit(props) {
  // const { post } = props;
  function handleQuestEditSubmission(event) {
    event.preventDefault();
    props.onEditPost({ name: event.target.name.value, progLang: event.target.progLang.value, code: event.target.code.value, bounty: event.target.bounty.value, id: event.target.id.value });
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
