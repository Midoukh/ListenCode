import React, { useState, useRef } from 'react';
import uuid from 'react-uuid';
import BeatLoader from 'react-spinners/BeatLoader';
import { useAlert } from 'react-alert';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

import axios from '../../api/axiosConf.js';
import illustration from '../../assets/illustration.jpg';
import youtubeLogo from '../../assets/youtube.png';
import closeIcon from '../../assets/close.png';
import styles from './styles.css';
import { getAllSongs } from '../../data/songsScript.js';

import { handleGetAllSongs } from '../../actions';

const options = [
  { value: 'lofi', label: 'Lofi' },
  { value: 'metal', label: 'Metal' },
  { value: 'war', label: 'War' },
  { value: 'techno', label: 'Techno' },
];

const AddingPlaylistForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const subBtnRef = useRef();
  const [loading, setLoading] = useState(false);
  const [inValidUrl, setInvalidUrl] = useState('');
  const reactAlert = useAlert();

  const handleSubmitPlaylist = async (data) => {
    console.log(data);
    if (!youTubeUrlValidate(data.url)) return;
    setLoading((prev) => true);
    try {
      const response = await axios.post('/add-song', data);
      console.log(response);
      setLoading((prev) => false);
      setTimeout(() => {
        handleClose();
      }, 850);
      setTimeout(() => {
        reactAlert.show('Playlist Added 😅', {
          type: 'success',
        });
      }, 1000);
      getAllSongs(dispatch, handleGetAllSongs);
    } catch (err) {
      console.log(err);
      setLoading((prev) => false);
      setTimeout(() => {
        handleClose();
      }, 950);
      setTimeout(() => {
        reactAlert.show('Something went wrong 😞', {
          type: 'error',
        });
      }, 1000);
    }
  };
  const youTubeUrlValidate = (url) => {
    console.log('From validate', url);
    const regExp =
      /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (!url.match(regExp)) {
      setInvalidUrl('Please Provide a valid URL');
      setTimeout(() => {
        setInvalidUrl('');
      }, 1500);
      return false;
    } else {
      console.log('valid url');
      return true;
    }
  };
  /*const handleEnableSubmitButton = (e) => {
    console.log(e.target.name);
    const { name: inputName, value } = e.target;
    const updatedData = { ...formData };

    updatedData[inputName] = value;

    setFormData((prev) => updatedData);
    const { name, url, genre } = formData;

    if (name.length > 5 && url.length > 5) {
      subBtnRef.current.removeAttribute('disabled');
      subBtnRef.current.style.opacity = '1';
      subBtnRef.current.style.cursor = 'pointer';
    } else {
      subBtnRef.current.setAttribute('disabled', true);
      subBtnRef.current.style.opacity = '.4';
      subBtnRef.current.style.cursor = 'not-allowed';
    }
  };*/
  return (
    <div className={styles.Container}>
      <img
        onClick={handleClose}
        className={styles.Close}
        src={closeIcon}
        alt="close"
      />
      <Formik
        initialValues={{
          name: '',
          url: '',
          genre: 'lofi',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleSubmitPlaylist(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.FormSt}>
            <div className={styles.InfosMobile}>
              <img src={youtubeLogo} alt="youtube" />
              <h2>Share Your Favorite PlayList From YouTube</h2>
            </div>
            <div className={styles.InputWrapper}>
              <label htmlFor="name">
                Name<span>*</span>
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="A Name for The Playlist"
                required
              />
              <ErrorMessage name="name" component="div" />
            </div>
            <div className={styles.InputWrapper}>
              <label htmlFor="url">
                PlayList URL<span>*</span>
              </label>
              <Field
                type="url"
                name="url"
                id="url"
                placeholder="https://www.youtube.com/watch?v=IjP89xahSIM"
                required
              />
              {inValidUrl && <span className={styles.Error}>{inValidUrl}</span>}
            </div>

            <div className={styles.InputWrapper}>
              <label htmlFor="name">
                Genre<span>*</span>
              </label>
              <Field as="select" name="genre" required>
                {options.map((op) => (
                  <option key={uuid()} value={op.value}>
                    {op.label}
                  </option>
                ))}
              </Field>
            </div>
            <button type="submit" disabled={isSubmitting} ref={subBtnRef}>
              {loading ? <BeatLoader size={12} color="white" /> : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
      <section className={styles.Illustration}>
        <div className={styles.ImageWrapper}>
          <img src={illustration} alt="art illustration music" />
        </div>
        <div className={styles.Infos}>
          <img src={youtubeLogo} alt="youtube" />
          <h2>Share Your Favorite PlayList From YouTube</h2>
        </div>
      </section>
    </div>
  );
};

export default AddingPlaylistForm;
