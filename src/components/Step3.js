import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Step1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.next();
    }

    goBack = e => {
        e.preventDefault();
        this.props.previous();
    }

    render() {
        const { fields: { firstName, lastName, job, address, aboutYourself, emailId } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Check your details"/>
                    <List>
                        <ListItem 
                            primaryText="First Name"
                            secondaryText={ firstName }
                        />
                        <ListItem 
                            primaryText="Last Name"
                            secondaryText={ lastName }
                        />
                        <ListItem 
                            primaryText="About Yourself"
                            secondaryText={ aboutYourself }
                        />
                        <ListItem 
                            primaryText="Job"
                            secondaryText={ job }
                        />
                        <ListItem 
                            primaryText="Email Id"
                            secondaryText={ emailId }
                        />
                        <ListItem 
                            primaryText="Address"
                            secondaryText={ address }
                        />
                    </List>
                    <br/>
                    <RaisedButton 
                        label="Confirm and Continue"
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

export default Step1
