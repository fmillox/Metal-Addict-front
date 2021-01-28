import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ScaleLoader from 'react-spinners/ScaleLoader';

import TextFieldInput from 'src/components/TextFieldInput';
import DraftEditor from 'src/components/DraftEditor';
import Button from 'src/components/Button';

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
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };

  return (
    <form className="reviewManage" onSubmit={handleSubmit}>
      <a
        className="reviewManage-go-back"
        onClick={() => history.goBack()}
      >
        Retour à la précédente
      </a>
      <div className="reviewManage-title">
        <TextFieldInput name="title" label="Titre" value={title} manageChange={setTitle} />
      </div>
      <div className="reviewManage-content">
        <DraftEditor htmlContent={content} setHtmlContent={setContent} />
      </div>
      <div className="reviewManage-button">
        {
          loadingSubmit && <ScaleLoader />
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
