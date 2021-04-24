import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Rating from './Rating'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    float: 'left',
    marginRight: '15px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function Hud(props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4">Mafia Status</Typography>
        <Typography variant="h5">Day: {props.day || 1}</Typography>
        <br/>
        <Rating title="Mafia Trust Rating" value={props.trust} />
        <Rating title="Mafia Suspicion Rating" value={props.suspicion} />
      </CardContent>
      <CardActions></CardActions>
    </Card>
  )
}
