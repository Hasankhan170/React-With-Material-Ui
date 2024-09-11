import { Box } from "@mui/material"
import { Link } from "react-router-dom"


function Navbar() {
  return (
    <>
    <Box>
        <Link to = "/Home">Home</Link>
        <Link to = "/About">About</Link>
        <Link to = "/Contact">Contact</Link>
        <Link to = "/Product">Product</Link>
    </Box>
    </>
  )
}

export default Navbar
