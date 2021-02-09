import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import FieldInput from 'src/components/FieldInput';
import Button from 'src/components/Button';

import './registerUser.scss';

const RegisterUser = ({ resetHomePage, registerNewUser }) => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    errors,
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  const handleOnClickHome = () => {
    resetHomePage();
    history.push('/');
  };

  const onSubmit = (data) => {
    registerNewUser(data.email, data.password, data.passwordConfirmed, data.nickname, history);
  };

  const emailValidations = {
    required: 'Champ obligatoire',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email non valide',
    },
  };

  const passwordValidations = {
    required: 'Champ obligatoire',
    pattern: {
      value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[#$@!%&*?]).{8,32}$/,
      message: 'Mot de passe non valide',
    },
  };

  const passwordConfirmedValidations = {
    validate: (value) => value === password.current || 'Mot de passe différent',
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

  return (
    <div className="register-user">
      <a
        className="register-user-link-container"
        onClick={handleOnClickHome}
      >
        <span className="register-user-link-title">Metal</span>
        <span className="register-user-link-title">Addict</span>
      </a>
      <h1 className="register-user-title">
        Création de compte
      </h1>
      <form className="register-user-form" onSubmit={handleSubmit(onSubmit)}>
        <FieldInput
          className="register-user-email"
          name="email"
          label="Adresse email *"
          placeholder="Votre adresse email"
          type="text"
          reference={register(emailValidations)}
        />
        <div className="register-user-error">
          {
            errors.email && <span>{errors.email.message}</span>
          }
        </div>
        <FieldInput
          className="register-user-password"
          name="password"
          label="Mot de passe *"
          placeholder="Votre mot de passe"
          type="password"
          reference={register(passwordValidations)}
        />
        <div className="register-user-error">
          {
            errors.password && <span>{errors.password.message}</span>
          }
        </div>
        <FieldInput
          className="register-user-password"
          name="passwordConfirmed"
          label=""
          placeholder="Retapez votre mot de passe"
          type="password"
          reference={register(passwordConfirmedValidations)}
        />
        <div className="register-user-error">
          {
            errors.passwordConfirmed && <span>{errors.passwordConfirmed.message}</span>
          }
        </div>
        <span className="register-user-password-rules-label">
          Votre mot de passe doit contenir :
        </span>
        <ul className="register-user-password-rules-list">
          <li className="register-user-password-rules-item">- 8 à 32 caractères</li>
          <li className="register-user-password-rules-item">- 1 majuscule</li>
          <li className="register-user-password-rules-item">- 1 minuscule</li>
          <li className="register-user-password-rules-item">- 1 chiffre</li>
          <li className="register-user-password-rules-item">- 1 caractère spécial (#$@!%&*?)</li>
        </ul>
        <FieldInput
          className="register-user-nickname"
          name="nickname"
          label="Pseudo *"
          placeholder="Votre pseudo"
          type="text"
          reference={register(nicknameValidations)}
        />
        <div className="register-user-error">
          {
            errors.nickname && <span>{errors.nickname.message}</span>
          }
        </div>
        <div className="register-user-button">
          <Button label="Créer le compte" />
        </div>
      </form>
    </div>
  );
};

RegisterUser.propTypes = {
  resetHomePage: PropTypes.func.isRequired,
  registerNewUser: PropTypes.func.isRequired,
};

export default RegisterUser;
