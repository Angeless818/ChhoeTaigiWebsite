import React, { Component } from 'react';

import DicStruct from '../api/dictionary_struct';
import Word from "./Word";

export default class AllDics extends Component {
    constructor(props) {
        super(props);

        let state = props.location.state;
        if (!state) {
            props.history.replace('/');
        }
        
        this.state = state;
    }

    render() {
        let dic = this.state.dic;
        let chineseName = DicStruct.filter(struct => struct.name===dic)[0].chineseName;
        return (
            <div>
                <a id={dic}></a>
                <h2>{chineseName}</h2>
                <ol>
                    {this.state.words.map((word) => {
                        return <Word key={word.id} dic={dic} columns={word} />
                    })}
                </ol>
            </div>
        );
    }
}