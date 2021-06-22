import React, { useState } from 'react';

import classnames from 'classnames';

import classes from './styles.module.scss';

export const FeedbackForm = ({ company, onClose }) => {
  const [state, setState] = useState({
    feedback: '',
  });

  const onChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSave = (e) => {
    e.preventDefault();
    console.log('Company', company);
    console.log('Feedback', state);
    onClose();
  };

  return (
    <>
      <div
        className={classes.Wrapper}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={classes.title}>Send feedback</div>
        <div className={classes.subTitle}>What is the issue?</div>
        <form>
          <textarea
            className={classes.textarea}
            name="feedback"
            value={state.feedback}
            onChange={onChange}
            placeholder="Please write comments and suggestions here. (Mandatory)"
          />
        </form>
        <p className={classes.description}>
          Information provided in the feedback form enables Similo to improve
          it’s search results.
        </p>
        <p className={classes.description}>
          If you are the subject or the official representative of an entity
          that is the subject of this info sheet, you can claim this sheet and
          suggest modifications.
        </p>
        <div className={classes.buttons}>
          <>
            <button
              className={classnames(classes.btn, classes.btnCancel)}
              onClick={onClose}
              type="button"
            >
              Cancel
            </button>
            <button
              className={classnames(classes.btn, classes.btnSend)}
              onClick={onSave}
              type="submit"
            >
              Send
            </button>
          </>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
