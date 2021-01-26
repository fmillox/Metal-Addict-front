import React from 'react';
import PropTypes from 'prop-types';

import TextFieldInput from 'src/components/TextFieldInput';
import Button from 'src/components/Button';

import './reviewAdd.scss';

const ReviewAdd = ({
  title,
  content,
  setTitle,
  setContent,
  manageSubmit,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };

  return (
    <form className="reviewAdd" onSubmit={handleSubmit}>
      <div className="reviewAdd-title">
        <TextFieldInput name="title" label="Titre" value={title} manageChange={setTitle} />
      </div>
      <div className="reviewAdd-content">
        <TextFieldInput name="content" label="Texte" multiline value={content} manageChange={setContent} />
      </div>
      <div className="reviewAdd-button">
        <Button label="Créer la chronique" />
      </div>
    </form>
  );
};

ReviewAdd.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
};

export default ReviewAdd;
