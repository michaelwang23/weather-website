const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/94e92f507509bd54891bf38daa3e5ba4/" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude)+ "?units=us&lang=en"

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out with a high of ' + body.daily.data[0].apparentTemperatureHigh + ' degrees. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast
