import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'

const StyledCard = styled(Card)`
  && {
    // max-width: 300px;
    border-radius: 0;
    margin-top: 1rem;
    font-family: 'Open Sans', sans-serif;
  }
`

const QULCard = props => (
  <StyledCard className={props.card}>
    <CardActionArea>
      {/* <CardMedia
        component="img"
        alt="Contemplative Reptile"
        className={props.media}
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      /> */}
      <CardContent>
        <h5>{props.title}</h5>
        <p>{props.children}</p>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Action
      </Button>
    </CardActions>
  </StyledCard>
)

QULCard.defaultProps = {
  title: 'title goes here',
  children: 'body goes here',
}

export default QULCard
