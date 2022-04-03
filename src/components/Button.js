import * as React from 'react';
import { Button, SIZE } from 'baseui/button';

export default (props) => {
  return (
    <Button onClick={() => alert('click')} size={SIZE.compact}>
      {props.children}
    </Button>
  );
};
