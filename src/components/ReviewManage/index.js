import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ScaleLoader from 'react-spinners/ScaleLoader';

import TextFieldInput from 'src/components/TextFieldInput';
import DraftEditor from 'src/components/DraftEditor';
import Button from 'src/components/Button';
import { Back } from 'src/components/Icons';

import { SECONDARY_COLOR } from 'src/styles/vars';

import { isHtmlContentEmpty } from 'src/utils';

import './reviewManage.scss';

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
  title: PropTypes.string,
  content: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  loadingSubmit: PropTypes.bool.isRequired,
  setTitle: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
};

ReviewManage.defaultProps = {
  title: '',
  content: '',
};

export default ReviewManage;
