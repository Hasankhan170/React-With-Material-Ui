import { Box, Typography } from "@mui/material"


const HeroSection = () => {
    return (
        <>
          <Box
            className="container"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '60vh',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              marginTop: '10px',
              overflow: 'hidden', 
            }}
          >
<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: '#333',
        justifyContent: 'center', // Center vertically
        alignItems: 'center',     // Center horizontally
        textAlign: 'center',      // Center text within each line
        flex: 1, // Allow this Box to grow and take available space
      }}
    >
      <Typography variant="h4">CHINK TAPAK DAM DAM</Typography>
      <Typography variant="body1">
        Tapak dam dam yang terletak di sebelah pantai, yang bertujuan
        menangani kebutuhan air yang terlalu banyak dan terlalu rendah
        sehingga dapat digunakan sebagai bahan bakar.
      </Typography>
    </Box>
            <Box
              sx={{
                flex: 1, // Allow this Box to grow and take available space
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden', // Prevent image overflow
                borderRadius: '10px', // Match the border radius of the container
              }}
            >
              <img
                src="https://e-commerce-website1-lac.vercel.app/assets/hero_img-DOCOb6wn.png"
                alt="random"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ensure the image covers the Box while maintaining aspect ratio
                }}
              />
            </Box>
          </Box>
        </>
      );
}

export default HeroSection
