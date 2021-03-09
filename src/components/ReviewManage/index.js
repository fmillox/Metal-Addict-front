// == Npm import
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ScaleLoader from 'react-spinners/ScaleLoader';

// == Import
import TextFieldInput from 'src/components/TextFieldInput';
import DraftEditor from 'src/components/DraftEditor';
import Button from 'src/components/Button';
import { Back } from 'src/components/Icons';

import { SECONDARY_COLOR } from 'src/styles/vars';

import { isHtmlContentEmpty } from 'src/utils';

import './reviewManage.scss';

// == Component
const ReviewManage = ({
  title,
  content,
  buttonLabel,
  loadingSubmit,
  setTitle,
  setContent,
  manageSubmit,
}) => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isHtmlContentEmpty(title) && !isHtmlContentEmpty(content)) {
      manageSubmit();
    }
    else {
      setError(true);
    }
  };

  return (
    <form className="reviewManage" onSubmit={handleSubmit}>
      <a onClick={() => history.goBack()}>
        <Back className="reviewManage-go-back" />
      </a>
      <div className="reviewManage-title">
        <TextFieldInput name="title" label="Titre" value={title} manageChange={setTitle} />
      </div>
      <div className="reviewManage-content">
        <DraftEditor htmlContent={content} setHtmlContent={setContent} />
      </div>
      <div className="reviewManage-error">
        {
          error && <span>La chronique doit contenir un titre et un contenu</span>
        }
      </div>
      <div className="reviewManage-button">
        {
          loadingSubmit && <ScaleLoader color={SECONDARY_COLOR} />
        }
        {
          !loadingSubmit && <Button label={buttonLabel} />
        }
      </div>
    </form>
  );
};

ReviewManage.propTypes = {
  /* value of the title */
  title: PropTypes.string,
  /* value of the content */
  content: PropTypes.string,
  /* value of the button label */
  buttonLabel: PropTypes.string.isRequired,
  /* bool to indicate if the review is loading */
  loadingSubmit: PropTypes.bool.isRequired,
  /* function to save title value, one parameter :
  - value
  */
  setTitle: PropTypes.func.isRequired,
  /* function to save content value, one parameter :
  - value
  */
  setContent: PropTypes.func.isRequired,
  /* called when submit event is received, no parameter */
  manageSubmit: PropTypes.func.isRequired,
};

ReviewManage.defaultProps = {
  title: '',
  content: '',
};

// == Export
export default ReviewManage;
