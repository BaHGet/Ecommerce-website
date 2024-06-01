import React, { Component } from 'react'
import ReactLoading from 'react-loading';

export default class Loading extends Component {
    render() {
        return (
            <ReactLoading type={'spinningBubbles'} color={'#000000'} height={'60px'} width={'60px'} className={'loading'}/>
        )
    }
}
