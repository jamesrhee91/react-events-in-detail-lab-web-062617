import React from 'react'

class DelayedButton extends React.Component {

  clickHandler = (event) => {
    event.persist()
    const callFunc = this.props.onDelayedClick
    setTimeout(() => callFunc(event), this.props.delay)
  }

  render() {
    return (
      <button onClick={this.clickHandler}/>
    )
  }

}

export default DelayedButton
