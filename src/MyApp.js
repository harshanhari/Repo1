import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import DummyPage from "./pages/DummyPage";

class MyApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSelected: "home"
        };
    }

    handleMenuSelect = (value) => {
        console.log(value);
        this.setState({
            currentSelected: value
        });
    }

    getPage() {
        const {
            currentSelected
        } = this.state;
        switch (currentSelected) {
            case "home":
                return <HomePage />;
            case "usage":
                return <DummyPage name="Usage" title="Usage" />;
            case "settings":
                return <DummyPage name="Settings" title="Settings" />;
            case "logout":
                return <DummyPage name="Logout" title="Logout" />;
            default:
                break;
        }
    }

    render() {
        return (
            <div className='app'>
                <Header onMenuSelect={this.handleMenuSelect} />
                <div className='app-body'>
                    <HomePage />
                </div>
                <Footer />
            </div>
        );
    }
}

export default MyApp;