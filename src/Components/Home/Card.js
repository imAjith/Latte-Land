import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
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
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
        </Typography>
      </CardContent>
      <CardActions>
      <div className='button-group'>
        <button className='car-btn' type='button'>Order now</button>
        <button className='car-btn' type='button'>View details</button>
      </div>
      </CardActions>
      </div>
    </Card>
  );
}
