import React from 'react';
import { Grid, Typography, styled, Card } from '@mui/material';
import Image from 'next/image';

const estiloContainer = {
  position: 'absolute',
  bottom: '2px',
  width: '100%',
  backgroundColor: 'white',
};

function IconsHeader() {
  return (
        <Card style={ {border: '1px solid #e0e0e0'}}>
    <Grid container spacing={0.5} justifyContent="flex-end" sx={{ marginRight: '10px' }}>
      <Grid item>
        <Image
          src="/icons/celular.png"
          alt="Meu ícone"
          width={57}
          height={35}
        />
    
      </Grid>
      <Grid item>
      <Typography color="textPrimary" style={{ fontSize: '14px', fontWeight:"bold" }}>
          Nossas redes sociais!
        </Typography>
      </Grid>

      <Grid item>
        <Image
          src="/icons/pagamento-com-cartao-de-credito.png"
          alt="Meu ícone"
          width={55}
          height={35}
        />
       
      </Grid>

      <Grid item>
      
        <Typography color="textPrimary" style={{ fontSize: '14px',  fontWeight:"bold", margin: '1px' }}>
          Faça nosso cartão!
        </Typography>
      </Grid>
    </Grid>
    </Card>
  );
}

export default IconsHeader;


