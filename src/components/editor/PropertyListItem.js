import React from "react"

class PropertyListItem extends React.Component {

    render() {
        return (
            <li><pre>[{this.props.item.id}] [{this.props.item.key}] = [{this.props.item.value}]</pre></li>
        )
    }
}

export default PropertyListItem