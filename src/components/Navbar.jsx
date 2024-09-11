import { Box } from "@mui/material"
import { Link } from "react-router-dom"


function Navbar() {
  return (
    <>
    <Box>
        <Link href = "Home">Home</Link>
        <Link href = "About">About</Link>
        <Link href = "Contact">Contact</Link>
        <Link href = "Product">Product</Link>
    </Box>
    </>
  )
}

export default Navbar
