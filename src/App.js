import React, { Component } from 'react'
import Hud from './Hud'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      day: 1,
      suspicion: 0,
      inform: 0,
      trust: .57,
      nextJob: {
        type: 'driver',
        success: .8,


      }
    }
  }

  render() {
    return (
      <div>
        <Hud
          suspicion={this.state.suspicion}
          trust={this.state.trust}
          inform={this.state.inform}
          day={this.state.day}
        />
        <Typography variant="h2">
          Informant
        </Typography>
        <FormGroup row>
          <FormControlLabel control={<Checkbox name="inform" />} label="Inform Handler?" />
        </FormGroup>
        <FormGroup row>
        <Button variant="contained" color="primary">
          Do the job tomorrow, hang out with the gang...
        </Button>
        &nbsp;
        <Button variant="contained" color="primary">
          Prepare For Job (Buy Supplies, Practice)
        </Button>
        </FormGroup>
        <br/>
        <FormGroup row>
        <Button variant="contained" color="primary">
          Pick Up Job
        </Button>
        &nbsp;
        <Button variant="contained" color="secondary">
          Refuse Job
        </Button>
        </FormGroup>
      </div>
    )
  }
}

export default App
