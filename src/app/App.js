import React, {
    Component, Fragment
} from 'react';
import Header from "Common/Header";
import Footer from "Common/Footer";
import MainPage from "App/pages/MainPage";
import "App/App.css";
import Table from "Components/Table";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <MainPage />
                </main>
                <Table rows={[["yo", "hi", "hello"], ["hola", "como estas", "chica"], ["ohayou", "konnichiwa", "konbanwa"]]} headers={["header1", "header2", "header3"]} />

                <Footer />  
            </Fragment>
        )
    }
}