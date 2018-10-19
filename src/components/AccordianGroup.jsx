import React, { Fragment } from 'react'
import posed from 'react-pose'
import { IoIosArrowUp } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'

const Content = posed.section({
  closed: { height: 0 },
  open: { height: 'auto' },
})

class AccordianGroup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <Fragment>
        <div className="accordian">
          <span
            className={this.state.open ? 'label open' : 'label closed'}
            onClick={() => this.setState({ open: !this.state.open })}
          >
            <span className="title">{this.props.title}</span>
            <IoIosArrowUp className="open-icon"/>
            <IoIosArrowDown className="closed-icon"/>
          </span>

          <Content
            className="content"
            // className={this.state.open ? 'content open' : 'content closed'}
            pose={this.state.open ? 'open' : 'closed'}
          >
            <div>{this.props.children}</div>
          </Content>
        </div>
      </Fragment>
    )
  }
}

export default AccordianGroup
