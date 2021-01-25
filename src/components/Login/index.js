import React from 'react';
import PropTypes from 'prop-types';
import './login.scss';

import TextFieldInput from 'src/components/TextFieldInput';
import Button from 'src/components/Button';

const Login = ({
  email,
  password,
  setEmail,
  setPassword,
  manageSubmit,
  manageTest,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };
  const handleTest = (event) => {
    event.preventDefault();
    manageTest();
  };
  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="searchForm-input">
          <TextFieldInput name="email" label="Adresse Email" value={email} manageChange={setEmail} />
        </div>
        <div className="searchForm-input">
          <TextFieldInput name="password" label="Password" value={password} manageChange={setPassword} />
        </div>
        <Button label="valider" />
        <input type="submit" label="tester" onClick={handleTest} />
      </form>
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
  manageTest: PropTypes.func.isRequired,
};

export default Login;
