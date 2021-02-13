import React from "react"

class LabeledItem extends React.Component {


    render() {
        return(
            <div>
                <h3>
                    {this.props.label}
                    <input type="text" value={this.props.value}/>
                </h3>
            </div>
        )
    }
}

export default LabeledItem