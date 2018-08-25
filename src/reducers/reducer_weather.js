import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    console.log('action received : ', action)
    switch (action.type) {
        case 'FETCH_WEATHER':
            // we need to take the current state(list of cities)
            // and add this new city (action.payload.data) to it
            // we cannot mutate the state => cannot use 'return state.push(action.payload.data)'
            // we use concat() to return a new array
            // can use two approaches in a slightly different way:
            return state.concat([action.payload.data]);
            return [action.payload.data, ...state]; // [ city3, city2, city1 ]
    }

    return state;
};