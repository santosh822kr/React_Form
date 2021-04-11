import React, { Component } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'



export class ReactForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        job: '',
        address: '',
        aboutYourself: '',
        emailId: ''
    }
    
    next = () => {
        const { step } = this.state;
        this.setState({
            step: step+1
        }); 
    }

    previous = () => {
        const { step } = this.state;
        this.setState({
            step: step-1
        }); 
    }

    changeEvent = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, job, address, aboutYourself, emailId } = this.state;
        const fields = { firstName, lastName, job, address, aboutYourself, emailId }

        switch(step) {
            case 1: 
                return (
                    <Step1
                        next={this.next}
                        changeEvent={this.changeEvent}
                        fields={fields}

                    />
                )
            case 2: 
                return (
                    <Step2 
                        next={this.next}
                        previous={this.previous}
                        changeEvent={this.changeEvent}
                        fields={fields}
                    />
                )
            case 3:
                return (
                    <Step3 
                        next={this.next}
                        previous={this.previous}
                        fields={fields}
                    />
                ) 
                        
            case 4:
                return <Step4 />
                
        }   

    }
}

export default ReactForm
