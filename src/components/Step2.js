import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class Step2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.next();
    }

    goBack = e => {
        e.preventDefault();
        this.props.previous();
    }

    render() {
        const { fields, changeEvent } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="React Form"/>
                    <TextField
                        hintText="Enter your job"
                        floatingLabelText="Job"
                        onChange={changeEvent('job')}
                        defaultValue={fields.job}
                    />
                    <br/>
                    <TextField
                        hintText="Enter your email id"
                        floatingLabelText="Email Id"
                        onChange={changeEvent('emailId')}
                        defaultValue={fields.emailId}
                    />
                    <br/>
                    <TextField
                        hintText="Enter your address"
                        floatingLabelText="Address"
                        onChange={changeEvent('address')}
                        defaultValue={fields.address}
                    />
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Previous"
                        primary={false}
                        style={styles.button}
                        onClick={this.goBack}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 20
    }
}

export default Step2
