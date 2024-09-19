import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../pages/SingleProduct.css'

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
        <Box
          className="main-div"
          sx={{
            width: { xs: '100%', sm: 1000 },
            display: 'flex',
            mb: 3,
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Card
            sx={{
              display: 'flex',
              width: '100%',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              alignItems: 'flex-start',
              flexDirection: 'column',
            }}
          >
            <CardMedia
    component="img"
     sx={{
     height: '40%%', // Fixed height
    width: '50%', // Full width
    objectFit: 'cover', // Maintain aspect ratio
    margin: '0 auto'
    }}
    image={data.image}
      alt={data.title}
    />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <Typography variant="body2" sx={{ color: 'black', mb: 2 }}>
                {data.description}
                <br />
                <span style={{ fontWeight: 'bold', color: 'black' }}>{data.title}</span>
                <br />
                <span style={{ color: 'black' }}>${data.price}</span>
              </Typography>
              <Button
                onClick={handleBuyNow}
                variant="outlined"
                sx={{ width: '100%', mt: 2 }}
              >
                Back
              </Button>
            </CardContent>
          </Card>
        </Box>
      ) : (
        <Typography variant="h4">Loading...</Typography>
      )}
    </Box>
  );
  
  
}

export default SingleProduct;

