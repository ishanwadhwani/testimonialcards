import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const TestCards = props => {
let {imgSrc, title, message, position} = props.data;
    return (
      <Card className='max-w-sm rounded overflow-hidden shadow-lg dark:text-gray-500 hover:bg-slate-300 '>
        <div className='overflow-hidden rounded p-0 '>
        <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={ imgSrc }></Avatar>
        }
        title={title}
        subheader={position}
      />
        </div>
          <CardContent className=''>
            <Typography className='text-gray-700 text-base line-clamp-4 hover:line-clamp-none 
            transition ease-in-out delay-150 hover:-translate-y-0.3 hover:translate-x-1.5 hover:scale-110  duration-300
            hover:text-sm'>
            {message}</Typography>
          </CardContent>
          <button className='p-4 flex '><AiFillGithub size={25} color='black'/><AiFillLinkedin size={25} color='#0A66C2'/></button>
      </Card>
      
  )
}

export default TestCards
