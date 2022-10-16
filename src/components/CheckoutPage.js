import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
//import Paper from '@mui/material/Paper';
//import Box from '@mui/material/Box';
//import Product from './Product';
import products from '../product-data';
import Typography from '@mui/material/Typography';
import CheckoutCard from './CheckoutCard';
import Total from './Total';

/*const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));*/

export default function CheckoutPage() {
    function FormRow(){
        return(
            <React.Fragment>
                {products.map((item) => (
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard key={item.id} product={item} />
                    </Grid>
                ))}
            </React.Fragment>
        )
    }
  return (
    <div>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography align='center' gutterBottom variant='h4'>
                    Shoping Cart
                </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} container spacing={2}>
                <FormRow/>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Typography align='center' gutterBottom variant='h4'>
                    <Total></Total>
                </Typography>
            </Grid>
        </Grid>
    </div>

  );
}