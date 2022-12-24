import React from "react";
import { InteractionContext } from "../Context/InteractionContext";

export const Timestamp: React.FC = React.memo(() => {
    return <InteractionContext.Consumer>
        {({ data }) => {
            console.log('Timestamp rendered')

            return <div>
                <div>timestamp </div>
                <div>{data.lastActionTimestamp}</div>
            </div>
        }}
    </InteractionContext.Consumer>
})