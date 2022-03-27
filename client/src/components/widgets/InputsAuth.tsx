import React from 'react'
import Cleave from 'cleave.js/react';

interface MyProps {

}
interface MyState {
    customRawValue: string;
}

export class InputsAuth extends React.Component<MyProps, MyState> {
    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            customRawValue: ''
        };

        this.onCustomChange = this.onCustomChange.bind(this);
    }

    onCustomChange(event: any) {
        this.setState({ customRawValue: event.target.rawValue });
        console.log(event.target.value)
        console.log(event.target.rawValue);
    }

    render() {
        return (
            <div>
                <Cleave
                    options={{

                        prefix: '+7',
                        blocks: [2, 3, 3, 2, 2],
                        delimiters: ['(', ')', '-', '-'],
                        delimiterLazyShow: true,
                        numericOnly: true
                    }}
                    onChange={this.onCustomChange}
                />
                <Cleave
                    options={{
                        blocks: [16],
                      
                    }}
                    onChange={this.onCustomChange}
                />
            </div>
        );
    }
}
