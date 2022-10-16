import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
//import CardContent from '@mui/material/CardContent';
//import CardActions from '@mui/material/CardActions';
//import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from "accounting"
import DeleteIcon from '@mui/icons-material/Delete';



/*
const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
*/

export default function CheckoutCard({product: {id, name, productType, image, price, rating, description}}) {
 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader

        action={
          <Typography
            /*className={classes.action}*/
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(price,{
              symbol : "$",
              thousand : ".",
              precision : 0,
            })}
          </Typography>
        }
        title={name}
        subheader="En Stock"
        />
        <CardMedia
            component="img"
            height="194"
            image={image}
            alt="Zapatos marca x"//nomessirve
        />
        <IconButton>
            <DeleteIcon fontSize='large'/>
        </IconButton>      
    </Card>
  );
}
