import React from "react"
import LabeledItem from "./LabeledItem"
import "./PropertyItemCard.css"
import PropertyItemCardButtons from "./PropertyItemCardButtons"

class PropertyItemCard extends React.Component {

    constructor() {
        super()

        this.state = {
            count : 0
        }

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    handleCheckboxChange() {
        this.setState(prevState => {
            return {
                count : prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div style={{
                boxShadow: "10px 5px 5px gray",
                outline: "1px solid black"
            }}>
                <LabeledItem label="Id" value={this.props.item.id} />
                <LabeledItem label="Key" value={this.props.item.key} />
                <LabeledItem label="Value" value={this.props.item.value} />
                <LabeledItem label="Server" value={this.props.item.server} />
                <LabeledItem label="Env" value={this.props.item.env} />
                <LabeledItem label="Target" value={this.props.item.target} />
                <LabeledItem label="Description" value={this.props.item.description} />
                <hr/>
                <PropertyItemCardButtons />
            </div>
        )
    }
}

export default PropertyItemCard