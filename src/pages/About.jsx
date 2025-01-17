import { Box, Typography } from "@mui/material"
import "../pages/About.css"


function About() {

  return (
    <>
    <Box>
      <Typography className='text-center mt-5' variant='h5'>About Us</Typography>
    </Box>
    <Box className = 'container mb-5 mt-5 about-main'>
      <Box className ="img-box">
        <img className="img" src="https://e-commerce-website1-lac.vercel.app/assets/about_img-BAJyTXw9.png" alt="" />
      </Box>
      <Box className ="text-box">
      <Typography  className ="text-1" variant="p">Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</Typography>
      <Typography  className ="text-2" variant="p">Since our inception, we have worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</Typography>
      <Typography  className ="text-3" variant="h6">Our Mission</Typography>
      <Typography  className ="text-4" variant="p">Our mission at Forever is to empower customers with choice, convenience, and confidence. We have dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</Typography>
      </Box>
    </Box>

    <Box>
      <Typography className='text-center mt-5' variant='h5'>WHY CHOOSE</Typography>
    </Box>


    <Box className = "container main-about" >
        <Box className ="about-1">
        <Typography className ="about-child" variant='h6'>Quality Assurance:</Typography>
        <Typography className ="about-child-1" variant='p'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</Typography>
        </Box>
        <Box className ="about-2">
        <Typography className ="about-child" variant='h6'>Convenience:</Typography>
        <Typography className ="about-child-2" variant='p'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</Typography>
        </Box>
        <Box className ="about-3">
        <Typography className ="about-child" variant='h6'>Exceptional Customer Service:</Typography>
        <Typography className ="about-child-3" variant='p'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</Typography>
        </Box>

        
    </Box>
    </>
  )
}

export default About
