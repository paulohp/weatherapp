import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import format from 'date-fns/format'
import Router from 'next/router'
import { switchTemp, getForecast } from '../store'
import mapCodeToClass from '../lib/map-code-to-class'

import SwitchTemp from '../components/SwitchTemp'
import WeatherWrapper from '../components/styles/WeatherWrapper'
import HeaderWrapper from '../components/styles/HeaderWrapper'
import BodyWrapper from '../components/styles/BodyWrapper'
import BackButton from '../components/styles/BackButton'
import CityTitle from '../components/styles/CityTitle'
import WeatherTitle from '../components/styles/WeatherTitle'
import ConditionTitle from '../components/styles/ConditionTitle'
import TemperatureBody from '../components/styles/TemperatureBody'
import TemperatureTitle from '../components/styles/TemperatureTitle'
import TemperatureIcon from '../components/styles/TemperatureIcon'
import DailyBody from '../components/styles/DailyBody'
import DailyCondition from '../components/styles/DailyCondition'
import WeeklyBody from '../components/styles/WeeklyBody'
import WeeklyCondition from '../components/styles/WeeklyCondition'

class Weather extends Component {
  static getInitialProps({ query }) {
    return { query }
  }

  handleTempChoice = (checked) => {
    const { switchTemp } = this.props
    switchTemp(checked)
  }

  handleBack = () => {
    Router.push('/')
  }

  componentDidMount = async () => {
    const { state: {location }, query, getForecast } = this.props
    if(location.name === "") {
      await getForecast(query.city)
    }
  }

  render () {
    const { state } = this.props
    const { location, current, forecast } = state
    const [_, ...forecastDays] = forecast.forecastday;
    return (
      <WeatherWrapper>
        <HeaderWrapper>
          <BackButton onClick={this.handleBack} />
          <CityTitle>{ location.name }</CityTitle>
          <SwitchTemp celciusChecked={state.celciusChecked} handleTempChoice={this.handleTempChoice}  />
        </HeaderWrapper>
        <BodyWrapper>
          <WeatherTitle>
            { format(location.localtime, 'dddd, MMMM Do YYYY') }
          </WeatherTitle>
          <ConditionTitle>
            { current.condition.text }
          </ConditionTitle>
          <TemperatureBody>
            <TemperatureTitle>
              { state.celciusChecked ? `${current.temp_c}°C` : `${current.temp_f}°F` }
            </TemperatureTitle>
            <TemperatureIcon className={`wi ${mapCodeToClass(current.condition.code, current.is_day, false)}`} />
            <br></br>
            <DailyBody>
              <DailyCondition><span>Wind </span> <span>{ current.wind_kph }km/h</span></DailyCondition>
              <DailyCondition><span>Humidity</span> <span>{ current.humidity }%</span></DailyCondition>
              <DailyCondition><span>Feels Like</span> <span>{ state.celciusChecked ? `${current.feelslike_c}°C` : `${current.feelslike_f}°F` }</span></DailyCondition>
            </DailyBody>
          </TemperatureBody>
          <WeeklyBody>
            { forecastDays.map((forecast, i) =>
              <WeeklyCondition key={i}>
                <p>{ format(forecast.date, 'dddd') }</p>
                <i className={`wi ${mapCodeToClass(current.condition.code, false, true)}`} />
                <p>{ state.celciusChecked ? `${forecast.day.maxtemp_c}°C` : `${forecast.day.maxtemp_f}°F` }</p>
              </WeeklyCondition>
            )}
          </WeeklyBody>
        </BodyWrapper>
      </WeatherWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchTemp: bindActionCreators(switchTemp, dispatch),
    getForecast: bindActionCreators(getForecast, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)