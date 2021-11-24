import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={340}
    height={84}
    viewBox="0 0 340 84"
    backgroundColor="#f6f6ef"
    foregroundColor="#e8e8e3"
    {...props}
  >
    <rect x="9" y="4" rx="0" ry="0" width="320" height="22" />
  </ContentLoader>
);

export default Skeleton;
