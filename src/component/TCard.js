import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const TCard = props => {
    let {img, src, title} = props.data;
  return (
    <Card className='p-0 overflow-hidden h-100 shadow'>
        <div className='overflow-hidden rounded o-0 bg-light'>Card</div>
    </Card>
    
  )
}

export default TCard
