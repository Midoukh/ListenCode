import axios from '../api/axiosConf';

export const getAllSongs = async (dispatch, action) => {
  try {
    const response = await axios.get('/get-songs');
    console.log(response);
    dispatch(action(response.data.data));
  } catch (error) {
    console.log(error);
    return error;
  }
};
