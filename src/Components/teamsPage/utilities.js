import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function LeftArrow() {
  return (
    <KeyboardArrowLeftIcon  sx={{
        fontSize: "100px",
        marginTop : "110px",
        color: "white"
      }} />
  )
}
const RightArrow = () => {
    return (
      <KeyboardArrowRightIcon sx={{
          fontSize: "100px",
          marginTop : "110px",
          color: "white"
        }} />
    )
  }

  export { LeftArrow,RightArrow} ;