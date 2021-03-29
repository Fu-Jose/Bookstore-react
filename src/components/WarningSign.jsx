import React from 'react';
import { Alert } from 'react-bootstrap';

const WarningSign = ({ message }) => {
  return <Alert variant='danger'>{message ?? 'No message'}</Alert>;
}
export default WarningSign