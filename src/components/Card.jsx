import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';


export default function RecipeReviewCard() {



  const [data,setData] = useState(null)

  useEffect(()=>{
    axios(`https://fakestoreapi.com/products`)
    .then((res)=>{
        console.log(res.data); 
        setData(res.data);  
    })
    .catch((err)=>{
        console.log(err);
    })
  },[])

  return (
    <Box className="d-flex flex-wrap justify-content-center gap-4 mt-5">
      {data ? data.map((item) => (
        <Box key={item.id} sx={{ width: 345, display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Card
            sx={{
              width: 345,
              height: 500,
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}
          >
            <CardHeader
              sx={{ height: 80 }} // Fixed height for CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.title}
              subheader={`RS ${item.price}`}
            />
            <CardMedia
              component="img"
              sx={{ height: 194, width: '100%', objectFit: 'cover' }} // Fixed height and full width for CardMedia
              image={item.image}
              alt={item.title}
            />
            <CardContent
              sx={{ height: 100, overflow: 'auto' }} 
            >
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )) : (
        <Typography variant='h1'>Loading...</Typography>
      )}
    </Box>
  );
}


