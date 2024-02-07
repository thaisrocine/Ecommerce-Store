import React from 'react';
import Typography from '@mui/material/Typography';

const CustomTypography = ({ children }: { children: React.ReactNode }) => {
  const customTypographyStyle = {
    display: 'flex',

  };

  return (
    <Typography
      variant="h6"
      style={{
        fontSize: '24px',
        color: '#686262',
        ...customTypographyStyle,
      }}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
