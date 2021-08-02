import React, { Component } from 'react';

class Subs extends Component {
const [subs, setSubs] = setState([]);
useEffects(()=>{
    fetch('/subs').then(res => {
        
    }).then(error => console.log(error)
    )
});
    
    render() {
        return (
            <div>
                {setSubs}
            </div>
        );
    }
}

export default Subs;