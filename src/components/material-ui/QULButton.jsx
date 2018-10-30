import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledButton = styled(Button)`
  && {
    border-radius: 0;
    border: 0;
    margin-right: 1rem;
    margin-top: 1rem;
    font-family: 'Open Sans', sans-serif;
    text-transform: capitalize;
  }
`

const QULButton = props => (
  <StyledButton variant={props.variant} color={props.color}>
    {props.children}
  </StyledButton>
)

QULButton.defaultProps = {
  variant: "contained",
  color: "primary"
}

export default QULButton
