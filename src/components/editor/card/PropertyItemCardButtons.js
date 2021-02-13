import React from "react"

function handleSave() {
    console.log("Save!")
}

function handleSaveHover() {
    console.log("Save hover")
}
function handleCancel() {
    console.log("Cancel!")
}

class PropertyItemCardButtons extends React.Component {

    render () {
        return (
            <div>
            <button onClick={handleSave} onMouseOver={handleSaveHover}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
            </div>
        )
    }
}

export default PropertyItemCardButtons