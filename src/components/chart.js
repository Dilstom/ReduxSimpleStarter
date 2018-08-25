import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data) / data.length);
}

export default (props) => {
    // console.log('chart props: ', props.item)
    return (
        <div>
            <Sparklines data={props.item} width={180} height={120}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.item)} {props.units}</div>
        </div>
    )
};