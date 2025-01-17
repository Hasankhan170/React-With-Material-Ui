import { Box, Typography } from '@mui/material';
import Card from '../components/Card';
import HeroSection from "../components/HeroSection"
import Footer from '../components/Footer';
import Detail from '../components/Detail';
import About from './About';
import Contact from './Contact';





function Home() {


  return (
    <>
    <HeroSection/>
    <Box>
      <Typography className='text-center p-2' variant='h5'>LATEST COLLECTION</Typography>
    </Box>
    <Card />
    <Box>
      <Typography className='text-center p-2' variant='h5'>Services Provide</Typography>
    </Box>
    <Detail/>
    <About />
    <Contact />
    <Footer/>
    </>
  )
}

export default Home
