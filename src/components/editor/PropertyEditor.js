import React from "react"
import PropertyList from "./PropertyList"
import PropertyItemCard from "./card/PropertyItemCard"
//import propertyData from "../../propertyData"

class PropertyEditor extends React.Component {

    constructor() {
        super()
        this.state = {
            propertyData : [],
            isLoading : true
        }
    }

    componentDidMount() {
        // runs once when component is first loaded.
        //setTimeout(() => { this.setState({ isLoading : false})},2000)
        //fetch("https://swapi.dev/api/people/1")
        fetch("http://localhost:8080/properties", {})
            .then(response => response.json())
            .then(data => {
                //console.log("data="+data.toString())
                this.setState(prevState => {
                    return {
                        propertyData : data,
                        isLoading : false
                    }
                })
            })
    }

    render() {
        const propertyItemCards = this.state.propertyData.map(item =>
            <PropertyItemCard key={item.id} item={item} />
        )

        return (
            <div>
                {this.state.isLoading ?
                    <h1>Loading...</h1> :
                    <div>
                        <h1><form></form></h1>
                        <PropertyList data={this.state.propertyData} />
                        {propertyItemCards}
                    </div>
                }
            </div>
        )

    }
}

export default PropertyEditor