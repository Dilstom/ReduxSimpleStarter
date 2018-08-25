import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(item) {
        const temps = item.list.map(weather => weather.main.temp - 272);
        const pressure = item.list.map(weather => weather.main.pressure);
        const humidity = item.list.map(weather => weather.main.humidity);
        // console.log(temps)
        // const lon = item.city.coord.lon; //
        // const lat = item.city.coord.lat; //  same as: 
        const { lon, lat } = item.city.coord;

        return (
            <tr key={item.city.id}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                {/* <td>{item.city.name}</td> */}
                <td><Chart item={temps} color='orange' units='C' /></td>
                <td><Chart item={pressure} color='red' units='hPa' /></td>
                <td><Chart item={humidity} color='blue' units='%' /></td>
            </tr>
        )
    }

    render() {
        // console.log('props in weather list: ', this.props)
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// two approaches:

// function mapStateToProps(state) {
//     return { weather: state.weather } // index.js in reducers folder
// }  // or

function mapStateToProps({ weather }) {
    console.log('props here ? : ', { weather })
    // same as 'const weather = state.weather'
    // return { weather: weather } // when we have key and a value identical we can shrink it
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);