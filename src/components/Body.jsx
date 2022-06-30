import React from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const Body = (props) => {
    return (
        <main className="body">
            <LeftPane />
            <RightPane />
        </main>
    );
}

export default Body;