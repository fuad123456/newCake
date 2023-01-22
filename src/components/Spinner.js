import React from 'react'

import Spinner from 'react-bootstrap/Spinner';

function BasicSpinner() {
  return (
    <Spinner animation="border" role="status"  variant="primary" size='md'
	className="position-absolute spin">
      <span className="visually-hidden spin">Loading...</span>
    </Spinner>
  );
}

export default BasicSpinner;
