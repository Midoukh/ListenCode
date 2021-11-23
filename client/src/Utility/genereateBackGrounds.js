import data from '../Containers/BackGround/bgs.json';
let currentImageIndex = 0;
const nextImageIndex = currentImageIndex + 1;

const generateBg = (event) => {
  console.log(event);
  return data[nextImageIndex].src;
};

export default generateBg;
