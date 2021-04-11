import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Step4 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.next();
    }

    goBack = e => {
        e.preventDefault();
        this.props.previous();
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Successful Submission"/>
                    <h1>Thank you for submiting the form !!</h1>
                    <p>Your details have been successfully submited.</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Step4
