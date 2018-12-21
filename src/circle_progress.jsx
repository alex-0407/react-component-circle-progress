import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CircleProgress extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { value } = this.props;
        const rotate = {
            A: 0,
            B: 45,
            C: 90,
            D: 180,
            E: 270,
            '': '360'
        };
        const styles = {
            circle_box: {
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 30,
                height: 30,
                margin: '0 auto',
                borderRadius: '50%',
                border: 'solid 1px #dddddd'
            },
            circle_left: {
                width: 30,
                height: 30,
                borderRadius: '50%',
                position: 'absolute',
                clip: 'rect(0 15px auto 0)',
                boxShadow: 'inset 0 0 0 2px' + (rotate[value] != '360' ? ' #108ee9' : ' gray'),
                left: 0,
                top: 0,
                transform: 'rotate(0deg)',
            },
            circle_right: {
                width: 30,
                height: 30,
                borderRadius: '50%',
                position: 'absolute',
                clip: 'rect(0 auto auto 15px)',
                boxShadow: 'inset 0 0 0 2px' + (rotate[value] != '360' ? ' #108ee9' : ' gray'),
                left: 0,
                top: 0,
                transform: 'rotate(' + rotate[value] + 'deg)',
            }
        };
        return (
            <div style={styles.circle_box}>
                <div style={styles.circle_left}></div>
                <div style={styles.circle_right}></div>
                {value ? value : '待'}
            </div>
        );
    }
}

CircleProgress.propTypes = {
    value: PropTypes.string,
};

export default CircleProgress;