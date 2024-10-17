import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Card_Ad(props) {
  return (
    <Card sx={{ maxWidth: 500 }} className='card_main'>
      <CardMedia
        component="img"
        alt="green iguana"
        className="card-media-img"
        image={props.img}
      />
      <div className='card_bottom'>
      <div className='row row_card'>
        <div className='col-6 col-6-card'>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Price
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          $2.50-
        </Typography>
        </div>
        <div className='col-6 col-6-card'>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Available types
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Espresso, Latte
        </Typography>
        </div>
      </div>
      <CardActions>
      <div className='button-group card-btn_group'>
        <button className='car-btn' type='button'>Order now</button>
        <button className='car-btn' type='button'>View details</button>
      </div>
      </CardActions>
      </div>
    </Card>
  );
}
