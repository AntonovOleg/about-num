import { Box, Button, Switch, TextField } from '@mui/material';
import {  FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TYPE_DATE, TYPE_MATH, TYPE_TRIVIA, TYPE_YEAR } from '../constants/types';
import { getInfo, getInfoActionType, getRandomInfo, getRandomInfoActionType } from '../store/actions/actions';

export type ActionTypes = getInfoActionType | getRandomInfoActionType;

const InputInterface: FC = () => {

  const dispatch = useDispatch();
  const [value = '', setValue] = useState<string>('');
  const [isRnd=false, setRnd] = useState<boolean>(false);

  const changeText = (e: any): void => {
    setValue(e.target.value);
  };

  const checkboxHandler = (): void => {
    setRnd(!isRnd);
  };

  const validate = (): boolean => {
    if (isRnd) return true;
    if (!(value === '')) {
      const tmp: number = Number(value);
      if (!isNaN(tmp)) return true;
    }
    alert('Enter the number');
    return false;
  };

  

  const getAbout = (type: string): void => {
    setValue('');
    if (!validate()) return;
    isRnd
      ? dispatch<any>(getRandomInfo(type))
      : dispatch<any>(getInfo(type, value));
  };

  const textField = !isRnd && (
    <TextField
      label='Enter number'
      variant='outlined'
      onChange={(e) => changeText(e)}
      sx={{
        mt: '15px',
        width: '70%',
      }}
      value={value}
    />
  );

  const renderButton = (type: string, title: string): React.ReactNode => {
    return (
      <Button
        variant='outlined'
        onClick={() => {
          getAbout(type);
        }}
        sx={{
          mr: '10px',
          mb: '5px',
        }}
      >
        {title}
      </Button>
    );
  };

  return (
    <Box>
      <Box
        sx={{
          mb: '20px',
        }}
      >
        {textField}

        <Box>
          <Switch checked={isRnd} onChange={checkboxHandler} />
          Random
        </Box>
      </Box>

      <Box>
        {renderButton(TYPE_TRIVIA, 'Number')}
        {renderButton(TYPE_YEAR, 'Year')}
        {renderButton(TYPE_DATE, 'Date')}
        {renderButton(TYPE_MATH, 'Math fact')}
      </Box>
    </Box>
  );
};

export default InputInterface;
