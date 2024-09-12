import { Box, Typography } from '@mui/material'
import '../components/Detail.css'


const Detail = () => {
  return (
    <>
    <Box className = "container main-detail" >
        <Box className ="box-1">
        <Typography className ="child" variant='h6'>Easy Exchange Policy</Typography>
        <Typography className ="child-1" variant='p'>We offer hastle free exchange policy</Typography>
        </Box>
        <Box className ="box-2">
        <Typography className ="child" variant='h6'>7 Days Return Policy</Typography>
        <Typography className ="child-2" variant='p'>We provide 7 days free return policy</Typography>
        </Box>
        <Box className ="box-3">
        <Typography className ="child" variant='h6'>Best customer support</Typography>
        <Typography className ="child-3" variant='p'>we provide 24/7 customer support</Typography>
        </Box>

        
    </Box>
    </>
  )
}

export default Detail
