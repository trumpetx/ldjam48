import React, { Component } from 'react'
import Hud from './Hud'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Paper from '@material-ui/core/Paper'


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

const level = {
  1: {
    requiredTrust: 0,
    rewardMod: 1,
    susLevel: 0.05,
  },
  2: {
    requiredTrust: 0.2,
    rewardMod: 1.5,
    susLevel: 0.1,
  },
  3: {
    requiredTrust: 0.4,
    rewardMod: 2,
    susLevel: .15,
  },
  4: {
    requiredTrust: 0.6,
    rewardMod: 2.3,
    susLevel: .2,
  },
  5: {
    requiredTrust: 0.8,
    rewardMod: 2.6,
    susLevel: .25,
  },
}

const jobs = [
  {
    type: 'driver',
    description: "The boss's niece is getting a five-finger discount at the mall today. Be there to pick her up.",
    level: 1,
  },
  {
    type: 'driver',
    description: "The boss's cousin has a job going at the horse races, and they're on to him. Be ready to get him out of there after the races tonight.",
    level: 2,
  },
  {
    type: 'driver',
    description: "We got a job in the Diamond District tonight. We need you to get us back to the safe house.",
    level: 3,
  },
  {
    type: 'driver',
    description: "My brother's gonna whack some dude that hit on his girlfriend. Drive him home afterward.",
    level: 4,
  },
  {
    type: 'driver',
    description: "The boys are pulling a heist at the bank. We need you behind the wheel.",
    level: 5,
  },

  // {
  //   type: 'numbers',
  //   description: "",
  //   level: 1,
  // },
  // {
  //   type: 'numbers',
  //   description: "",
  //   level: 2,
  // },
  // {
  //   type: 'numbers',
  //   description: "",
  //   level: 3,
  // },
  // {
  //   type: 'numbers',
  //   description: "",
  //   level: 4,
  // },
  // {
  //   type: 'numbers',
  //   description: "",
  //   level: 5,
  // },

  {
    type: 'courier',
    description:
      "Drive my cousin Vinny over to the WalWorld. He's got some buisness to attend to.",
    level: 1,
  },
  {
    type: 'courier',
    description:
      "We need to get this dope down to the South Side. We don't deal the stuff, but we can still make a profit. You in?",
    level: 2,
  },
  {
    type: 'courier',
    description:
      'Guns man, the Irish brought in a shipment, and we need to get em to the warehouse. Can you make it happen?',
    level: 3,
  },
  {
    type: 'courier',
    description:
      "We've got some new talent for the strip club coming into the country. Get them across the border.",
    level: 4,
  },
  {
    type: 'courier',
    description:
      "We got a dead body and we don't need any questions.  Bring 'em to the factory.  We'll get this sorted.",
    level: 5,
  },

  {
    type: 'hit',
    description: "One of the boss's lackeys disrespected him in front of his wife. Take him out.",
    level: 1,
  },
  {
    type: 'hit',
    description: "The frontman for our poker room has stolen money from us too many times. Take him out.",
    level: 2,
  },
  {
    type: 'hit',
    description: "The boss's wife is having an affiar. Take out her boyfriend.",
    level: 3,
  },
  {
    type: 'hit',
    description: "There is bad blood with the boss of a rival gang. Take him out.",
    level: 4,
  },
  {
    type: 'hit',
    description: "One of the mayor's deputies is giving us trouble. Take him out.",
    level: 5,
  },

  {
    type: 'shakedown',
    description: "One of our dealers hasn't made good on his stash. Pay him a visit.",
    level: 1,
  },
  {
    type: 'shakedown',
    description: "Nick over at the poker room has been skimming money. Take it back.",
    level: 2,
  },
  {
    type: 'shakedown',
    description: "The boss's godson wants a part in a new movie. Tell the studio head to give him the part.",
    level: 3,
  },
  {
    type: 'shakedown',
    description: "One of our suppliers didn't deliver this week. Go tell them that the boss isn't happy.",
    level: 4,
  },
  {
    type: 'shakedown',
    description: "The mayor been making deals behind the boss's back. Remind him that it would be a real shame if his secret home movies were released to the press.",
    level: 5,
  },

  {
    type: 'theft',
    description: "One of our lackeys was wearing a nice watch, and I want it. Get it for me.",
    level: 1,
  },
  {
    type: 'theft',
    description: "The antique shop on the corner has a baseball signed by Babe Ruth. The boss wants it.",
    level: 2,
  },
  {
    type: 'theft',
    description: "Our rivals have a safe full of money in the back of the Chinese restaurant on 5th street. Get it.",
    level: 3,
  },
  {
    type: 'theft',
    description: "Some jerk in a 69 Mustang disrespected us at the gas station. Go take his car.",
    level: 4,
  },
  {
    type: 'theft',
    description: "The rival's herion supplier is making a big drop tonight. Intercept it for us.",
    level: 5,
  },
]


function nextJob(trust) {
  const filteredJobs = jobs.filter((j) => {
    
  return level[j.level].requiredTrust <= trust + 0.1;
  });
  
  const nextJob = JSON.parse(
    JSON.stringify(
      filteredJobs[Math.floor(Math.random() * filteredJobs.length)]
    )
  )
  nextJob.reward = jobtypes[nextJob.type].reward
  nextJob.success = jobtypes[nextJob.type].success
  nextJob.requiredTrust = level[nextJob.level].requiredTrust
  nextJob.rewardMod = level[nextJob.level].rewardMod
  nextJob.susLevel = level[nextJob.level].susLevel
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
      susMod: 0,
      lastInform: false,
    }
  }

  doJob = () => {
    const success = Math.random() < this.state.nextJob.success
    const reward = this.state.nextJob.rewardMod * this.state.nextJob.reward
    const trust = success ? this.state.trust + reward : this.state.trust
    let inform = this.state.inform
    let suspicion = this.state.suspicion
    let susMod = this.state.susMod
    if (this.state.nextJob.inform) {
      inform = inform + Math.floor(2500 * reward);
      const lastInformMod = this.state.lastInform ? 2 : 1
      suspicion = suspicion + this.state.nextJob.susLevel * susMod * lastInformMod
      susMod = susMod + .2

    }
    this.setState({
      trust,
      inform,
      nextJob: nextJob(trust),
      day: this.state.day + 1,
      lastInform: inform,
      suspicion: suspicion,
      susMod,
    })
    console.log (susMod)
    console.log(suspicion)
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
 
    if (this.state.suspicion>=1) {
      return <div>
        <Typography variant="h4" align="center">
          <br/>You were discovered. You now sleep with the fishes.
        </Typography>
      </div>
      
    }
    else if (this.state.day>30 && this.state.inform>=3000) {
      return <div>
        <Typography variant="h4" align="center">
          <br/>Congratulations! You successfully infiltrated and informed on the Mafia. Enjoy your bonus and promotion!
        </Typography>
      </div>
    }
    
    else if (this.state.day>30 && this.state.inform<3000) {
      return <div>
        <Typography variant="h4" align="center">
          <br/>Game over. You ran out of time. Better luck next time.
        </Typography>
      </div>
    }

    else return<div> 
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
        color=" "
        onClick={this.refuseJob}
      >
        Refuse Job
      </Button>
    </FormGroup>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Typography variant="h6" align="center">
          You are a police detective who has inflitrated the mafia. <br/> Earn 3000 informant points in 30 days without the mafia catching wind. <br/> If they figure you out, you won't be around very long. <br/> <br/>
    </Typography>

    <Typography variant="body2" align="center">
      Hint: Informing on bigger jobs will earn you more points with the police force. But informing on multiple jobs in a row looks suspicious!
    </Typography>

    <audio src='tunnel.mp3' loop controls autoPlay/>
  </div>;
  }
}

// Music from Uppbeat (free for Creators!):
// https://uppbeat.io/t/danijel-zambo/tunnel
// License code: BK550MQMAIOL7Q9G

export default App
