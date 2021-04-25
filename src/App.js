import React, { Component } from 'react'
import Hud from './Hud'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const jobtypes = {
  driver: {
    success: 0.8,
    reward: 0.01,
  },
  numbers: {
    success: 1,
    reward: 0.01,
  },
  courier: {
    success: 0.99,
    reward: 0.01,
  },
  hit: {
    success: 0.5,
    reward: 0.2,
  },
  shakedown: {
    success: 0.85,
    reward: 0.07,
  },
  theft: {
    success: 0.8,
    reward: 0.09,
  },
}

const jobs = [
  {
    type: 'courier',
    description:
      "Drive my cousin Vinny over to the WalWorld.  He's got some buisness to attend to.",
    requiredTrust: 0,
    rewardMod: 1,
  },
  {
    type: 'courier',
    description:
      "We need to get this dope down to the South Side.  We don't deal the stuff, but we can still make a profit.  You in?",
    requiredTrust: 0.2,
    rewardMod: 1.5,
  },
  {
    type: 'courier',
    description:
      'Guns man, the irish brough in a shipment and we need to get em to the warehouse.  Can you make it happen?',
    requiredTrust: 0.4,
    rewardMod: 2,
  },
  {
    type: 'courier',
    description:
      'Guns man, the irish brough in a shipment and we need to get em to the warehouse.  Can you make it happen?',
    requiredTrust: 0.6,
    rewardMod: 2.3,
  },
  {
    type: 'courier',
    description:
      "We got a dead body and we don't need any questions.  Bring 'em to the factory.  We'll get this sorted.",
    requiredTrust: 0.8,
    rewardMod: 2.6,
  },
]

function nextJob(trust) {
  const filteredJobs = jobs.filter((j) => j.requiredTrust <= trust + 0.1)
  const nextJob = JSON.parse(
    JSON.stringify(
      filteredJobs[Math.floor(Math.random() * filteredJobs.length)]
    )
  )
  nextJob.reward = jobtypes[nextJob.type].reward
  nextJob.success = jobtypes[nextJob.type].success
  nextJob.inform = false
  return nextJob
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      day: 1,
      suspicion: 0,
      inform: 0,
      trust: 0,
      nextJob: nextJob(0),
    }
  }

  doJob = () => {
    const success = Math.random() < this.state.nextJob.success
    const reward = this.state.nextJob.rewardMod * this.state.nextJob.reward
    const trust = success ? this.state.trust + reward : this.state.trust
    let inform = this.state.inform
    if (this.state.nextJob.inform) {
      inform = inform + Math.floor(2500 * reward)
    }
    this.setState({
      trust,
      inform,
      nextJob: nextJob(trust),
      day: this.state.day + 1,
    })
  }

  refuseJob = () => {
    const day = this.state.day + 1;
    this.setState({ day, nextJob: nextJob(this.state.trust) })
  }

  prepareForJob = () => {
    const nextJob = this.state.nextJob
    nextJob.success = nextJob.success * 1.2
    this.setState({ day: this.state.day + 1, nextJob })
  }

  inform = (event) => {
    const checked = event.target.checked
    const nextJob = this.state.nextJob
    nextJob.inform = checked
    this.setState({ nextJob })
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
        <Typography variant="h2">Informant</Typography>

        <br />
        <Typography variant="body1">
          {this.state.nextJob.description}
        </Typography>
        <br />
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox name="inform" />}
            label="Inform Handler?"
            checked={this.state.nextJob.inform}
            onClick={this.inform}
          />
        </FormGroup>
        <FormGroup row>
          <Button
            variant="contained"
            color="primary"
            onClick={this.prepareForJob}
          >
            Prepare For Job (Buy Supplies, Practice)
          </Button>
        </FormGroup>
        <br />
        <FormGroup row>
          <Button variant="contained" color="primary" onClick={this.doJob}>
            Pick Up Job
          </Button>
          &nbsp;
          <Button
            variant="contained"
            color="secondary"
            onClick={this.refuseJob}
          >
            Refuse Job
          </Button>
        </FormGroup>
      </div>
    )
  }
}

export default App
