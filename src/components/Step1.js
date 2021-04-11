import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class Step1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.next();
    }

    render() {
        const { fields, changeEvent } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="React Form"/>
                    <TextField
                        hintText="Enter your first name"
                        floatingLabelText="First name"
                        onChange={changeEvent('firstName')}
                        defaultValue={fields.firstName}
                    />
                    <br/>
                    <TextField
                        hintText="Enter your last name"
                        floatingLabelText="Last name"
                        onChange={changeEvent('lastName')}
                        defaultValue={fields.lastName}
                    />
                    <br/>
                    <TextField
                        hintText="Write something about yourself"
                        floatingLabelText="About Yourself"
                        onChange={changeEvent('aboutYourself')}
                        defaultValue={fields.aboutYourself}
                    />
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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

export default Step1
