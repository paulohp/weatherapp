const codesAndClasses = [
  { code: 1000, classNeutral: "wi-day-sunny", classSun: "wi-day-sunny", classNight: "wi-night-clear" },
  { code: 1003, classNeutral: "wi-cloudy", classSun: "wi-day-cloudy", classNight: "wi-night-partly-cloudy" },
  { code: 1006, classNeutral: "wi-cloudy", classSun: "wi-day-cloudy", classNight: "wi-night-alt-cloudy" },
  { code: 1009, classNeutral: "wi-cloudy", classSun: "wi-day-sunny-overcast", classNight:"wi-night-partly-cloudy" },
  { code: 1030, classNeutral: "wi-fog", classSun: "wi-day-fog", classNight: "wi-night-fog" },
  { code: 1063, classNeutral: "wi-rain-mix", classSun: "wi-day-rain-mix", classNight: "wi-night-alt-rain-mix" },
  { code: 1066, classNeutral: "wi-snow", classSun: "wi-day-snow", classNight: "wi-night-alt-snow" },
  { code: 1069, classNeutral: "wi-sleet", classSun: "wi-day-sleet", classNight: "wi-night-alt-sleet" },
  { code: 1072, classNeutral: "wi-snow-wind", classSun: "wi-day-snow-wind", classNight: "wi-night-snow-wind" },
  { code: 1087, classNeutral: "wi-thunderstorm", classSun: "wi-day-snow-thunderstorm", classNight: "wi-night-storm-showers" },
  { code: 1114, classNeutral: "wi-thunderstorm", classSun: "wi-day-snow-thunderstorm", classNight: "wi-night-storm-showers" },
  { code: 1117, classNeutral: "wi-snow", classSun: "wi-day-snow", classNight: "wi-night-alt-snow" },
  { code: 1135, classNeutral: "wi-day-snow-wind", classSun: "wi-day-snow", classNight: "wi-night-alt-snow-wind" },
  { code: 1147, classNeutral: "wi-fog", classSun: "wi-day-fog", classNight: "wi-night-fog" },
  { code: 1150, classNeutral: "wi-sprinkle", classSun: "wi-day-hail", classNight: "wi-night-hail" },
  { code: 1153, classNeutral: "wi-sprinkle", classSun: "wi-day-hail", classNight: "wi-night-hail" },
  { code: 1168, classNeutral: "wi-sprinkle", classSun: "wi-day-hail", classNight: "wi-night-hail" },
  { code: 1171, classNeutral: "wi-sprinkle", classSun: "wi-day-hail", classNight: "wi-night-hail" },
  { code: 1180, classNeutral: "wi-sprinkle", classSun: "wi-day-hail", classNight: "wi-night-hail" },
  { code: 1183, classNeutral: "wi-sprinkle", classSun: "wi-day-hail", classNight: "wi-night-hail" },
  { code: 1186, classNeutral: "wi-sprinkle", classSun: "wi-day-hail", classNight: "wi-night-hail" },
  { code: 1189, classNeutral: "wi-sprinkle", classSun: "wi-day-hail", classNight: "wi-night-hail" },
  { code: 1192, classNeutral: "wi-rain", classSun: "wi-day-rain", classNight: "wi-night-rain" },
  { code: 1195, classNeutral: "wi-rain", classSun: "wi-day-rain", classNight: "wi-night-rain" },
  { code: 1198, classNeutral: "wi-rain-mix", classSun: "wi-day-rain-mix", classNight: "wi-night-alt-rain-mix" },
  { code: 1201, classNeutral: "wi-rain-mix", classSun: "wi-day-rain-mix", classNight: "wi-night-alt-rain-mix" },
  { code: 1204, classNeutral: "wi-sleet", classSun: "wi-day-sleet", classNight: "wi-night-sleet" },
  { code: 1207, classNeutral: "wi-sleet", classSun: "wi-day-sleet", classNight: "wi-night-sleet" },
  { code: 1210, classNeutral: "wi-snow", classSun: "wi-day-snow", classNight: "wi-night-alt-snow" },
  { code: 1213, classNeutral: "wi-snow", classSun: "wi-day-snow", classNight: "wi-night-alt-snow" },
  { code: 1216, classNeutral: "wi-snow", classSun: "wi-day-snow", classNight: "wi-night-alt-snow" },
  { code: 1219, classNeutral: "wi-snow", classSun: "wi-day-snow", classNight: "wi-night-alt-snow" },
  { code: 1222, classNeutral: "wi-snow", classSun: "wi-day-snow", classNight: "wi-night-alt-snow" },
  { code: 1225, classNeutral: "wi-snow", classSun: "wi-day-snow", classNight: "wi-night-alt-snow" },
  { code: 1237, classNeutral: "wi-snow", classSun: "wi-day-snow", classNight: "wi-night-alt-snow" },
  { code: 1240, classNeutral: "wi-rain", classSun: "wi-day-rain", classNight: "wi-night-rain" },
  { code: 1243, classNeutral: "wi-thunderstorm", classSun: "wi-day-storm-showers", classNight: "wi-night-storm-showers" },
  { code: 1246, classNeutral: "wi-thunderstorm", classSun: "wi-day-storm-showers", classNight: "wi-night-storm-showers" },
  { code: 1249, classNeutral: "wi-sleet", classSun: "wi-day-sleet", classNight: "wi-night-alt-sleet" },
  { code: 1252, classNeutral: "wi-snow", classSun: "wi-day-snow", classNight: "wi-night-alt-snow" },
  { code: 1255, classNeutral: "wi-snow", classSun: "wi-day-snow", classNight: "wi-night-alt-snow" },
  { code: 1258, classNeutral: "wi-snow", classSun: "wi-day-snow", classNight: "wi-night-alt-snow" },
  { code: 1258, classNeutral: "wi-snow", classSun: "wi-day-snow", classNight: "wi-night-alt-snow" },
  { code: 1264, classNeutral: "wi-snow", classSun: "wi-day-snow", classNight: "wi-night-alt-snow" },
  { code: 1273, classNeutral: "wi-thunderstorm", classSun: "wi-day-thunderstorm", classNight: "wi-thunderstorm" },
  { code: 1276, classNeutral: "wi-thunderstorm", classSun: "wi-day-thunderstorm", classNight: "wi-thunderstorm" },
  { code: 1279, classNeutral: "wi-thunderstorm", classSun: "wi-day-thunderstorm", classNight: "wi-thunderstorm" },
  { code: 1282, classNeutral: "wi-thunderstorm", classSun: "wi-day-thunderstorm", classNight: "wi-thunderstorm" },
]

export default  (code, isDay, neutral) => {
  if(!code) {
    return
  }
  const cl = codesAndClasses.find(cl => cl.code === code)

  if(neutral) {
    return cl.classNeutral
  }

  if(isDay) {
    return cl.classSun
  }

  return cl.classNight
}