import React from 'react';
import { Badge } from 'react-bootstrap';
const MyBadge = ({ text, color }) => {
  return (
    <Badge variant={color ?? 'primary'}>{text ?? 'Nothing'}</Badge>
  );
}
export default MyBadge