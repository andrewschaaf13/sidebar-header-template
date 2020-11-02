import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: 100,
  },
});

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p>Header</p>
    </div>
  );
}

export default Header;
