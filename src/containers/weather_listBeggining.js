import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log('props in weather list: ', this.props)
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(item => {
                        return (
                            <tr key={item.city.id}>
                                <td>
                                    {item.city.name}
                                </td>
                                <td>
                                    {item.list.map((item, i) => {
                                        return (
                                            <p key={i}>
                                                {item.main.temp}
                                            </p>
                                        )
                                    })}
                                </td>
                                <td>
                                    {item.list.map((item, i) => {
                                        return (
                                            <p key={i}>
                                                {item.main.humidity}
                                            </p>
                                        )
                                    })}
                                </td>
                                <td>
                                    {item.list.map((item, i) => {
                                        return (
                                            <p key={i}>
                                                {item.main.pressure}
                                            </p>
                                        )
                                    })}
                                </td>
                            </tr>
                        )
                    })}

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