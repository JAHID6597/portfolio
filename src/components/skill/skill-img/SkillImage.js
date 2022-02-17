import React, { useEffect } from 'react';
import lottie from "lottie-web";
import { Box } from '@mui/material';
import skillLottie from '../../../assets/lottie/skill-lottie.json';

const SkillImage = () => {
    useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#skillLottie"),
      animationData: skillLottie
    });
  }, []);

  return <Box id="skillLottie" />;
}

export default SkillImage