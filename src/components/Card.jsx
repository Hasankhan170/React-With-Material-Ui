import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function RecipeReviewCard() {

  const [data,setData] = useState(null)
  const navigate = useNavigate()

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

  const handleBuyNow = (item)=>{
    console.log(item);
    navigate(`/SingleProduct/${item.id}`)
  }

  return (
    <Box className="d-flex flex-wrap justify-content-center gap-4 mt-5 mb-5 container">
      {data ? data.map((item) => (
        <Box key={item.id} sx={{ width: 300, display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Card
            sx={{
              width: 290,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              overflow: 'hidden',
              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: 160, width: '100%', objectFit: 'cover' }} 
              image={item.image}
              alt={item.title}
            />
            <CardContent
              sx={{
                flex: 1, 
                overflow: 'auto',
              }} 
            >
              <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '10px', fontWeight: 'bold', }}>
                {item.title}
                <br />
                $:{item.price}
              </Typography>
            </CardContent>
            <Button
              onClick={() => handleBuyNow(item)}
              variant="outlined"
              sx={{ width: '100%', mt: 'auto' }}
            >
              Buy Now
            </Button>
          </Card>
        </Box>
      )) : (
        <Typography variant='h4'>Loading...</Typography>
      )}
    </Box>
  );


}


