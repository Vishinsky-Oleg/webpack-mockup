import * as $ from "jquery";

import Post from "@models/Post";
// import json from "./assets/file"; //ny default imports json file wihout any requests (import understands js and json extensions without explicit declaring)
// import webpackLogo from "./assets/webpack.png";
// import xml from "./assets/data.xml";
// import csv from "./assets/data.csv";
import "./styles/styles.css"; //Imports css file
import "./styles/style.scss"; //Imports css file

const post = new Post("Webpack Post titles dfgdsg");

$("pre").html(post.toString());

console.log("Post to string: ", post.toString());
console.log("195156123");
// console.log(json);
// console.log(xml);
// console.log(csv);

async function a() {
    return await Promise.resolve("lll");
}

class Util {
    static id = Date.now();
}
console.log(Util.id);
a().then(console.log);

import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";

// const App = () => (
//     <div className="container">
//         <h1>Webpack Course</h1>
//         <hr />
//         <div className="logo"></div>
//         <hr />
//         <pre></pre>
//         <img src="./img/one.jpg" alt="one" width="200px" height="100%" />
//         <div className="box">
//             <h1>Hi</h1>
//         </div>
//     </div>
// );

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Webpack Course</h1>
                <hr />
                <div className="logo"></div>
                <hr />
                <pre></pre>
                <img src="./img/one.jpg" alt="one" width="200px" height="100%" />
                <div className="box">
                    <h1>Hi</h1>
                </div>
            </div>
        );
    }
}
render(<App />, document.querySelector("#app"));
