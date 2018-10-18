import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Router from 'next/router'

import { getForecast } from '../store'
import BoxWrapper from '../components/styles/BoxWrapper'
import CityWrapper from '../components/styles/CityWrapper'
import CityInput from '../components/styles/CityInput'
import LocationButton from '../components/styles/LocationButton'

export class Index extends Component {
  state = {
    city: ''
  }

  handleInputChange = e => {
    e.persist()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { getForecast } = this.props
    getForecast(this.state.city).then(() => {
      Router.push({
        pathname: '/weather',
        query: {city: this.state.city}
      })
    })
  }

  handleLocation = (e) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log({ lat: position.coords.latitude, lng: position.coords.longitude });
        const { latitude, longitude } = position.coords
        const { getForecast } = this.props
        const query = `${latitude},${longitude}`
        getForecast(query).then(() => {
          Router.push({
            pathname: '/weather',
            query: { city: query }
          })
        })
      });
    }
  }

  render () {
    return (
      <BoxWrapper>
        <CityWrapper>
          <form onSubmit={this.handleSubmit}>
            <CityInput onChange={this.handleInputChange} name="city" value={this.state.city} type="text" placeholder="City" id="cityInput" />
            <button onClick={this.handleSubmit}><i  /></button>
          </form>
        </CityWrapper>
        <p>or</p>
        <span>use my </span><LocationButton id="locationButton" onClick={this.handleLocation}>current position</LocationButton>
      </BoxWrapper>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getForecast: bindActionCreators(getForecast, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Index)