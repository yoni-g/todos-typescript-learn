import React from "react";
import Title from "../components/Title/Title";

export default class HomePage extends React.Component<{}, {}> {

    homeTitle: string = 'My tiny TS app'

    render(){
        return (
            <>
                <Title title={this.homeTitle} />
                <p>{"Having some fun with reactJS+Typesciprt"}</p>
            </>
        )
    }
}