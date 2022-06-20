import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { FC } from 'react';
import { useSelector } from 'react-redux';

interface selector {
  state: any,
  infoSlice: any,
  info: any
}

const OutputInterface: FC = () => {
  const info: any = useSelector<selector>(state => state.info.info)

  return (
    <Box sx={{
      mt: '20px'
    }}>
      <Container>
        <Typography variant='h6'>
          {info}
        </Typography>
      </Container>
    </Box>
  )
}

export default OutputInterface;