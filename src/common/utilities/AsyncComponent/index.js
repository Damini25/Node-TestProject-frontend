import React, { PureComponent } from 'react';

export default class AsyncComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            Component: null,
        }
    }
    componentDidMount() {
        if(!this.state.Component){
            this.props.moduleProvider().then((component)=>{
                this.setState({Component:component.default});
            });
        }
    }

    render() {
        const { Component } = this.state;
        const { moduleProvider, ...rest } = this.props;

        return (
            <div>
                {Component ? <Component {...rest} /> : null}
            </div>
        )
    }
}