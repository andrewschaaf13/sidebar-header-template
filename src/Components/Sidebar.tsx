import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flex: '1 0 auto',
    width: 200,
  },
});

function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p>Sidebar</p>
    </div>
  );
}

export default Sidebar;
