import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Loader from 'react-loader-spinner';

import img from 'src/assets/images/upload.png';

import './uploadPicture.scss';

function UploadPicture({ loading, manageSubmit }) {
  const { register, handleSubmit, reset } = useForm();
  const inputFileRef = useRef(null);

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append('image', data.picture[0]);
    manageSubmit(formData);
    reset();
  };

  return (
    <form className="uploadPicture">
      <input
        ref={(evt) => {
          register(evt, {
            required: true,
          });
          inputFileRef.current = evt;
        }}
        type="file"
        name="picture"
        accept="image/png, image/jpeg, image/gif"
        onChange={handleSubmit(onSubmit)}
        style={{ display: 'none' }}
      />
      {
        loading && (
          <Loader
            type="ThreeDots"
            color="#000000"
            width={30}
            height={30}
          />
        )
      }
      {
        !loading && (
        <input
          type="image"
          src={img}
          alt=""
          style={{ outline: 'none', width: 30 }}
          onClick={(evt) => {
            evt.preventDefault();
            inputFileRef.current.click();
          }}
        />
        )
      }
    </form>
  );
}

UploadPicture.propTypes = {
  loading: PropTypes.bool.isRequired,
  manageSubmit: PropTypes.func.isRequired,
};

export default UploadPicture;
