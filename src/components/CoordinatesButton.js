import React from 'react'

class CoordinatesButton extends React.Component {

  clickHandler = (event) => {
    const x = event.clientX
    const y = event.clientY
    this.props.onReceiveCoordinates([x, y])
  }

  render() {
    return (
      <div>
        <h1>This is props: {this.props.someProp} </h1>
        <button onClick={this.clickHandler}/>
      </div>
    )
  }

}

export default CoordinatesButton
