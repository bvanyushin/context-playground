import React from "react";
import { InteractionContext } from "../Context/InteractionContext";

export const ActionType: React.FC = React.memo(() => {
    const { data: { lastAction } } = React.useContext(InteractionContext);
    console.log('ActionType rendered')

    return <div>
        <div>last action </div>
        <div>{lastAction}</div>
    </div>
})