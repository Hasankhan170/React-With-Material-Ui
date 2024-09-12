import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleBuyNow = () => {
    navigate(`/Product`);
   
  };

  return (
    <Box className="d-flex flex-wrap justify-content-center gap-4 mt-5">
      {data ? (
        <Box  sx={{ width: 280, display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Card
            sx={{
              width: 280,
              maxHeight: '300',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: '150', width: '100%', objectFit: 'cover',}} 
              image={data.image}
              alt={data.title}
            />
            <CardContent
              sx={{
                flex: 1, 
                overflow: 'auto' 
              }} 
            >
              <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom :'10px' }}>
                {data.title}
                <br /> 
                $:{data.price}
              </Typography>
            </CardContent>
            <Button
            onClick={handleBuyNow}
              variant="outlined"
              sx={{ width: '100%', mt: 'auto' }} 
            >
             Back
            </Button>
          </Card>
        </Box>
        ): (
        <Typography variant='h4'>Loading...</Typography>
      )}
    </Box>
  );
}

export default SingleProduct;

