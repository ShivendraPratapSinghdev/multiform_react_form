import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField
                        hintText="Enter Your occupation"
                        floatingLabelText="occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation} />
                    <TextField
                        hintText="Here is Your Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio} />
                    <TextField
                        hintText="Enter Your city"
                        floatingLabelText="city"
                        onChange={handleChange('city')}
                        defaultValue={values.city} />
                    <RaisedButton
                        label="Continue"
                        primary={false}
                        styles={styles.button}
                        onclick={this.continue} />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails
