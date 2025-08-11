import React from "react";

class DummyPage extends React.Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

export default DummyPage; 