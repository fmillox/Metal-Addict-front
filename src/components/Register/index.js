import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import './register.scss';

import FieldInput from 'src/components/FieldInput';
import Button from 'src/components/Button';

const Register = () => {
  const {
    register,
    handleSubmit,
    errors,
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data) => (console.log(data));

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
      message: '8 caractères minimum, 1 majuscule, 1 minuscule, 1 nombre, 1 caractère spécial (#$@!%&*?)',
    },
  };

  const confirmPasswordValidations = {
    validate: (value) => value === password.current || 'Mot de passe différent',
  };

  const nicknameValidations = {
    required: 'Champ obligatoire',
    maxLength: {
      value: 10,
      message: '10 caractères maximum',
    },
  };

  return (
    <form className="register" onSubmit={handleSubmit(onSubmit)}>
      <FieldInput
        className="register-email"
        name="email"
        label="Adresse email *"
        placeholder="Votre adresse email"
        type="text"
        register={register}
        validations={emailValidations}
      />
      {
        errors.email && <span>{errors.email.message}</span>
      }
      <FieldInput
        className="register-password"
        name="password"
        label="Mot de passe *"
        placeholder="Votre mot de passe"
        type="password"
        register={register}
        validations={passwordValidations}
      />
      {
        errors.password && <span>{errors.password.message}</span>
      }
      <FieldInput
        className="register-password"
        name="confirmPassword"
        label="Mot de passe de nouveau *"
        placeholder="Retapez votre mot de passe"
        type="password"
        register={register}
        validations={confirmPasswordValidations}
      />
      {
        errors.confirmPassword && <span>{errors.confirmPassword.message}</span>
      }
      <FieldInput
        className="register-nickname"
        name="nickname"
        label="Pseudo *"
        type="text"
        placeholder="Votre pseudo"
        register={register}
        validations={nicknameValidations}
      />
      {
        errors.nickname && <span>{errors.nickname.message}</span>
      }
      <Button label="Créer le compte" />
    </form>
  );
};

export default Register;
