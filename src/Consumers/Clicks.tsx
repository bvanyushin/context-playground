import React from "react";
import { InteractionContext } from "../Context/InteractionContext";

export const Clicks: React.FC = React.memo(() => {
    const { data: { counter } } = React.useContext(InteractionContext);
    console.log("Counter rendered")
    return <div>
        <div>count </div>
        <div>{counter}</div>
    </div>

})