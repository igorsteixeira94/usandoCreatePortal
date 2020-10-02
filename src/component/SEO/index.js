import React from 'react';
import ReactDOM from 'react-dom';

function SEO({ title, description }) {
  return ReactDOM.createPortal(
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>,
    document.querySelector('head')
  );
}

export default SEO;
