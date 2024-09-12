import { Box, Button, Typography } from "@mui/material"
import "../pages/Contact.css"


function Contact() {
  return (
    <>
    <Box>
      <Typography className='text-center mt-5' variant='h5'>CONTACT US</Typography>
    </Box>

    <Box className = 'container mb-5 mt-5 contact-main'>
      <Box className ="img-box-contact">
        <img className="img-contact" src="https://e-commerce-website1-lac.vercel.app/assets/contact_img-CyOum2vk.png" alt="" />
      </Box>
      <Box className ="text-box-contact">
      <Typography  className ="text-contact-1" variant="h6">Location</Typography>
      <Typography  className ="text-contact-2" variant="p">Karachi <br />Shah Faisal Colony N0 #1</Typography>
      <Typography  className ="text-contact-3" variant="p">Tel: +92 3162257470 <br />Email: hasankhanali0316@gmail.com</Typography>
      <Typography  className ="text-contact-4" variant="h6">About Me</Typography>
      <Typography  className ="text-contact-5" variant="p">Know more about me and my education.</Typography>
      <Button className="btn" variant="outlined">Hire Me</Button>
      </Box>
    </Box>
    </>
  )
}

export default Contact
