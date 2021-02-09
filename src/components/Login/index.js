import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import FieldInput from 'src/components/FieldInput';
import Button from 'src/components/Button';

import './login.scss';

const Login = ({ notAuthorized, resetHomePage, handleLogin }) => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    errors,
  } = useForm();

  const handleOnClickHome = () => {
    resetHomePage();
    history.push('/');
  };

  const onSubmit = (data) => {
    handleLogin(data.email, data.password, history);
  };

  const emailValidations = {
    required: 'Champ obligatoire',
  };

  const passwordValidations = {
    required: 'Champ obligatoire',
  };

  return (
    <div className="login">
      <a
        className="login-link-container"
        onClick={handleOnClickHome}
      >
        <span className="login-link-title">Metal</span>
        <span className="login-link-title">Addict</span>
      </a>
      <h1 className="login-title">
        Connexion
      </h1>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <FieldInput
            className="login-email"
            name="email"
            label="Adresse email"
            placeholder=""
            type="text"
            reference={register(emailValidations)}
          />
          <div className="login-error">
            {
              errors.email && <span>{errors.email.message}</span>
            }
          </div>
          <FieldInput
            className="login-password"
            name="password"
            label="Mot de passe"
            placeholder=""
            type="password"
            reference={register(passwordValidations)}
          />
          <div className="login-error">
            {
              errors.password && <span>{errors.password.message}</span>
            }
          </div>
          <div className="login-error">
            {
              notAuthorized && <span>Combinaison adresse email / mot de passe invalide.</span>
            }
          </div>
          <div className="login-validate-button">
            <Button label="Valider" />
          </div>
        </form>
        <div className="login-create-account">
          <p className="login-create-account-text">
            Vous n'avez pas de compte ?
          </p>
          <button
            className="login-create-account-button"
            type="button"
            onClick={() => history.push('/inscription')}
          >
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  notAuthorized: PropTypes.bool.isRequired,
  resetHomePage: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
