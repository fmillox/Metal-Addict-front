import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import './register.scss';

import FieldInput from 'src/components/FieldInput';

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
  console.log(errors);

  const emailValidations = { required: 'Ce champs est obligatoire' };
  const passwordValidations = {
    required: 'Ce champs est obligatoire',
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8}$/,
      message: 'Saisir au minimum 8 caractères 1 majuscule, 1 minuscule, 1 nombre, 1 caractère spécial',
    },
  };
  const confirmPasswordValidations = {
    validate: (value) => value === password.current || 'Le mot de passe est différent',
  };
  const nicknameValidations = { required: 'Ce champs est obligatoire', maxLength: { value: 20, message: '20 caractères maximum' } };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="register">
      <FieldInput name="email" label="email" type="email" register={register} validations={emailValidations} />
      {errors.email && <span>{errors.email.message}</span>}
      <FieldInput name="password" label="password" type="password" register={register} validations={passwordValidations} />
      {errors.password && <span>{errors.password.message}</span>}
      <FieldInput name="confirmPassword" label="confirmPassword" type="password" register={register} validations={confirmPasswordValidations} />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      <FieldInput name="nickname" label="nickname" type="text" register={register} validations={nicknameValidations} />
      {errors.nickname && <span>{errors.nickname.message}</span>}
      <button type="submit" label="valider">Valider</button>
    </form>
  );
};
export default Register;
