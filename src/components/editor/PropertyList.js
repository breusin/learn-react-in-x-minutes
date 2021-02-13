import React from "react"
import PropertyListItem from "./PropertyListItem"

class PropertyList extends React.Component {


    render() {
        const propertyListItems = this.props.data.map(item =>
            <PropertyListItem key={item.id} item={item} />
        )

        return (
            <ol>
                {propertyListItems}
            </ol>
        )
    }
}

export default PropertyList