import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import theme from '../src/theme';
import Image from 'next/image';
import { height, maxHeight, maxWidth, width } from '@mui/system';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '1',
    imgPath:
      '/../public/imgs/fieldData/IMG_0080_1.jpg',
  },
  {
    label: '2',
    imgPath:
      '/../public/imgs/fieldData/IMG_0080_2.jpg',
  },
  {
    label: '3',
    imgPath:
      '/../public/imgs/fieldData/IMG_0080_3.jpg',
  },
  {
    label: '4',
    imgPath:
      '/../public/imgs/fieldData/IMG_0080_4.jpg',
  },
  {
    label: '5',
    imgPath:
      '/../public/imgs/fieldData/IMG_0080_5.jpg',
  },
  {
    label: '6',
    imgPath:
      '/../public/imgs/fieldData/IMG_0080_6.jpg',
  }
];

function SwipeableTextMobileStepper() {
  const width = maxWidth;
  const height = maxHeight;
  
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }} bgcolor="primary">
      {/*HEADING*/}
      <Paper
        elevation="2"
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          maxWidth: width,
          pl: 2,
          bgcolor: 'background.secondary',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>


      {/*IMAGE STUFF */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Image
                sx={{
                  height: '100%', //450
                  display: 'block',
                  //maxWidth: 1000, //750
                  overflow: 'hidden',
                  width: '500px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}
                width='100%'
                height='100%'
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/** BOTTOM NAVIGATION */}
      <Paper
        elevation="2"
        sx={{
          //display: 'flex',
          //alignItems: 'center',
          height: 50,
          maxWidth: width,
          //pl: 2,
          bgcolor: 'background.secondary',
        }}
      >
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Paper>
    </Box>
  );
}

export default SwipeableTextMobileStepper;