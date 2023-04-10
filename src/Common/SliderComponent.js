import React from 'react'
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

const SliderComponent = (props) => {
  return (

    <Stack border={0.1} m={2} p={2} borderRadius={5}>
      <Stack gap={1} mt={2}>
        <Typography variant='subtitle1'>{props.sliderHeading}</Typography>
        <Typography variant='h5'>{props.unit}{props.amount}</Typography>
      </Stack>
      <Slider
        defaultValue={props.defaultValue}
        min={props.min}
        max={props.max}
        aria-label='defaultValue'
        valueLabelDisplay='auto'
        marks step={props.step}
        onChange={props.onChange}
        value={props.value}
      />
      <Stack justifyContent={'space-between'} direction={'row'}>
        <Typography variant='subtitle2' color='text.secondary'> {props.unit } {props.min}</Typography>
        <Typography variant='subtitle2' color='text.secondary'>{props.unit} {props.max}</Typography>
      </Stack>
    </Stack>

  )
}

export default SliderComponent