import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Label>Quest Name: <br /></Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder='Quest name' />
        </Form.Group>
        <Form.Group>
          <Form.Label>What programming language are you using for this project? <br /></Form.Label>
          <Form.Control
            type='text'
            name='progLang'
            placeholder='JavaScript, C#, Ruby, Python' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your code here: <br /></Form.Label>
          <Form.Control as="textarea" rows="7"
            type='text'
            name='code' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Offer a reward for your quest: <br /></Form.Label>
          <Form.Control
            type='number'
            name='bounty' />
        </Form.Group>
        <div style={{ padding: 10 }}>
          <Button variant="info" type='submit'>{props.buttonText}</Button>
        </div>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
