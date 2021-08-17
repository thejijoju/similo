import React, { useState } from 'react';

import axios from 'axios';
import classnames from 'classnames';

import classes from './styles.module.scss';
import { API_URL } from '../../../constants/index';

export const FeedbackForm = ({ company, onClose }) => {
  const [feedback, setFeedback] = useState('');

  const onChange = (event) => {
    setFeedback(event.target.value);
  };
  const onSave = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/companies/feedback`, {
      company: company.name,
      feedback,
    });

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
            value={feedback}
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
              disabled={!feedback.trim()}
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
