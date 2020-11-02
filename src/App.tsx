import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Test from './Components/Test';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
  },
  content: {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'row',
    overflowY: 'hidden',
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <Sidebar />
        <Test />
      </div>
    </div>
  );
}

export default App;
