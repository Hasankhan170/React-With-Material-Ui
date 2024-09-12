import { Box, Button, Typography } from "@mui/material"
import '../components/HeroSection.css'


const HeroSection = () => {
    return (
        <Box className="main-box">
          <Box className="text-content">
            <Typography className="head" variant="h4">CHINK TAPAK DAM DAM</Typography>
            <Typography className= "para" variant="body1">
              Tapak dam dam yang terletak di sebelah pantai, yang bertujuan
              menangani kebutuhan air yang terlalu banyak dan terlalu rendah
              sehingga dapat digunakan sebagai bahan bakar.
            </Typography>
            <Button variant="outlined">Shopping Now</Button>
          </Box>
          <Box className="image-container">
            <img
              src="https://e-commerce-website1-lac.vercel.app/assets/hero_img-DOCOb6wn.png"
              alt="random"
              className="hero-image"
            />
          </Box>
        </Box>
      );
}

export default HeroSection
