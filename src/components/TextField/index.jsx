import React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

const TextFields = ({ required, value, onChange, type, width = '600px', height = '40px', label, error,helperText }) => {
  return (
    <div className='text-base font-medium'>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { width: width, height: height, marginTop: '10px',marginBottom: '10px' }
        }}
        autoComplete='off'
      >
        <TextField
          label={label}
          size='small'
          value={value}
          onChange={onChange}
          required={required ?? null}
          type={type}
          error={error}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
          helperText={helperText}
        />
      </Box>
    </div>
  );
};

export default TextFields;