import React, { useEffect } from 'react';
import lottie from "lottie-web";
import proficiencyLottie from '../../../assets/lottie/proficiency-lottie.json';
import { Box } from '@mui/material';

const ProficiencyImage = () => {

    useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#proficiencyLottie"),
      animationData: proficiencyLottie
    });
  }, []);

  return <Box id="proficiencyLottie" sx={ { height: { md: '80vh', xs: '50vh' } } } />
}

export default ProficiencyImage