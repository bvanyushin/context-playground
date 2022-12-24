import React from "react";
import { InteractionContext } from "../Context/InteractionContext";

export const CounterButton: React.FC = React.memo(() => {
    const { setter, data: { counter } } = React.useContext(InteractionContext);
    console.log('CounterButton rendered')
    return <button onClick={() => {
        console.log('Three following rerenders should follow this action')
        console.log('Timestamp, Counter, CounterButton');
        console.log('But...')
        setter({
        counter: counter + 1,
        lastActionTimestamp: Date.now()
    })}}>
        Increase counter
    </button>
})

export const ActionButton: React.FC = React.memo(() => {
    const { setter, data: { lastAction } } = React.useContext(InteractionContext);
    console.log('ActionButton rendered')

    return <button onClick={() => {
        console.log('Four following rerenders should follow this action')
        console.log('Timestamp, ActionType, ActionButton, ControlActionType');
        console.log('But...')
        setter({
        lastAction: lastAction === "click" ? "not click" : "click",
        lastActionTimestamp: Date.now()
    })}}>
        Change Action
    </button>
})