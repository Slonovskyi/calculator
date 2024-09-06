import React, { useState } from 'react';
import { Button, Container, Typography, Stack } from '@mui/material';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <Container maxWidth="xs" className="calculator-container">
      <Typography variant="h4" align="center" gutterBottom>
        Calculator
      </Typography>
      <div className="display">
        <Typography variant="h5">{input || '0'}</Typography>
      </div>
      <Stack spacing={1} className="buttons">
        <Stack direction="row" spacing={1}>
          <Button variant="contained" onClick={() => handleClick('7')} className="button">7</Button>
          <Button variant="contained" onClick={() => handleClick('8')} className="button">8</Button>
          <Button variant="contained" onClick={() => handleClick('9')} className="button">9</Button>
          <Button variant="contained" color="success"git merge main --allow-unrelated-histories
 onClick={() => handleClick('C')} className="button">C</Button>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" onClick={() => handleClick('4')} className="button">4</Button>
          <Button variant="contained" onClick={() => handleClick('5')} className="button">5</Button>
          <Button variant="contained" onClick={() => handleClick('6')} className="button">6</Button>
          <Button variant="contained" onClick={() => handleClick('-')} className="button">-</Button>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" onClick={() => handleClick('1')} className="button">1</Button>
          <Button variant="contained" onClick={() => handleClick('2')} className="button">2</Button>
          <Button variant="contained" onClick={() => handleClick('3')} className="button">3</Button>
          <Button variant="contained" onClick={() => handleClick('+')} className="button">+</Button>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" onClick={() => handleClick('/')} className="button">/</Button>
          <Button variant="contained" onClick={() => handleClick('0')} className="button">0</Button>
          <Button variant="contained" onClick={() => handleClick('.')} className="button">.</Button>
          <Button variant="contained" onClick={() => handleClick('*')} className="button">*</Button>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" color="success" onClick={() => handleClick('=')} className="buttonC">=</Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
