import { AppBar, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import InputInterface from './InputInterface';
import OutputInterface from './OutputInterface';

const Main: FC = () => {
  return (
    <Box>
      <AppBar position='static'>
        <Typography variant='h6'>Get Info about number</Typography>
      </AppBar>
      <Container>
        <InputInterface />
        <OutputInterface />
      </Container>
    </Box>
  );
};

export default Main;
