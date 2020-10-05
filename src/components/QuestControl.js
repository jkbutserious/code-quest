import React from "react";
import QuestList from './QuestList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import QuestEdit from './QuestEdit';
import QuestDetail from './QuestDetail';
import NewQuestForm from './NewQuestForm';

class QuestControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedQuest: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedQuest != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedQuest: null
      });
    }
    else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleSelectingQuest = (id) => {
    console.log(id);
    const newSelectQuest = this.props.masterQuestList[id]
    console.log(newSelectQuest)
    this.setState({
      selectedQuest: newSelectQuest
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.selectedQuest != null) {
      currentlyVisibleState = <QuestDetail questDetail={this.selectedQuest} />
    } else if (this.state.editing) {
      currentlyVisibleState = <QuestEdit quest={this.state.selectedQuest} onEditQuest=
        {this.handleEditingQuest} />
      buttonText = "Return to Quests";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewQuestForm onNewQuestCreation={this.handleAddNewQuest} />
      buttonText = "Return to Quest List"
    } else {
      currentlyVisibleState = <QuestList questList={this.props.masterQuestList} onSelectQuest={this.handleSelectingQuest} onUpVoting={this.handleVotingUp} onDownVoting={this.handleVotingDown} />
      buttonText = "Add Quest"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
const convertArrayToObj = (array, key) => {
  const initialVal = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialVal);
};
QuestControl.propTypes = {
  masterQuestList: PropTypes.object
};
const mapStateToProps = state => {
  const stateToArray = Object.values(state);
  const sortedStateArray = stateToArray.sort(function(a, b) {return (b.score - a.score)})
  const returnObj = convertArrayToObj(sortedStateArray, 'id');
  return {
    masterQuestList: returnObj
  }
}
QuestControl = connect(mapStateToProps)(QuestControl);
export default QuestControl;