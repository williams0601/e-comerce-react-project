import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
//import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Product from './Product';
import products from '../product-data';

/*const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));*/

export default function Products() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          products.map(product =>(
              <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Product key={product.id} product={product} />
              </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}

/*
{
  products.map(product =>(
      <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product key={product.id} product={product} />
      </Grid>
  ))
}
*/