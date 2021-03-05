import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ScaleLoader from 'react-spinners/ScaleLoader';

import FieldInput from 'src/components/FieldInput';
import Button from 'src/components/Button';
import { Back } from 'src/components/Icons';

import { getIdFromSlug } from 'src/utils';

import { SECONDARY_COLOR } from 'src/styles/vars';

import './profileEdit.scss';

const ProfileEdit = ({
  user,
  loadingSubmit,
  manageSubmit,
}) => {
  const { slug } = useParams();
  const id = getIdFromSlug(slug);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    errors,
  } = useForm({
    defaultValues: {
      nickname: user === null ? '' : user.nickname,
      biography: user === null ? '' : user.biography,
    },
  });

  const onSubmit = (data) => {
    manageSubmit(data.nickname, data.biography, history, slug);
  };

  const nicknameValidations = {
    required: 'Champ obligatoire',
    minLength: {
      value: 3,
      message: '3 caractères minimum',
    },
    maxLength: {
      value: 20,
      message: '20 caractères maximum',
    },
  };

  const biographyValidations = {
    required: 'Champ obligatoire',
    maxLength: {
      value: 500,
      message: '500 caractères maximum',
    },
  };

  const isUserRedirected = user === null || String(user.id) !== id;

  return (
    <>
      {
        isUserRedirected && <Redirect to={`/utilisateur/${slug}`} />
      }
      {
        !isUserRedirected && (
          <div className="profile-edit">
            <a onClick={() => history.goBack()}>
              <Back className="profile-edit-back-to-profile" />
            </a>
            <h1 className="profile-edit-title">
              Modification de l'utilisateur
            </h1>
            <form className="profile-edit-form" onSubmit={handleSubmit(onSubmit)}>
              <FieldInput
                className="profile-edit-nickname"
                name="nickname"
                label="Pseudo *"
                placeholder="Votre pseudo"
                type="text"
                reference={register(nicknameValidations)}
              />
              <div className="profile-edit-error">
                {
                  errors.nickname && <span>{errors.nickname.message}</span>
                }
              </div>
              <FieldInput
                className="profile-edit-biography"
                name="biography"
                label="Description *"
                placeholder="Votre description"
                type="text"
                reference={register(biographyValidations)}
                multiLine
              />
              <div className="profile-edit-error">
                {
                  errors.biography && <span>{errors.biography.message}</span>
                }
              </div>
              <div className="profile-edit-button">
                {
                  loadingSubmit && <ScaleLoader color={SECONDARY_COLOR} />
                }
                {
                  !loadingSubmit && <Button label="Valider" />
                }
              </div>
            </form>
          </div>
        )
      }
    </>
  );
};

ProfileEdit.propTypes = {
  /* object of the user datas */
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
  }.isRequired),
  /** bool to indicate if datas of the user are loading */
  loadingSubmit: PropTypes.bool.isRequired,
  /** called when submit event is received, four parameters :
   * - nickname
   * - biography
   * - history
   * - slug
    */
  manageSubmit: PropTypes.func.isRequired,
};

ProfileEdit.defaultProps = {
  user: null,
};

export default ProfileEdit;
