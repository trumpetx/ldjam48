import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'

function valueLabelFormat(value) {
  return Math.floor(value * 100)
}

export default function Rating(props) {
  return (
    <div>
      <Typography id="range-slider" gutterBottom>
        {props.title}
      </Typography>
      <br />
      <br />
      <Slider
        value={props.value}
        disabled
        min={0}
        step={0.05}
        max={1}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
      />
    </div>
  )
}
