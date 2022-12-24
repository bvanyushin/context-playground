import React from "react";

interface Props {
    lastAction: string
}

export const ControlActionType: React.FC<Props> = React.memo(({lastAction}) => {

    console.log('ControlActionType rendered')

    return <div>
        <div>last action </div>
        <div>{lastAction}</div>
    </div>
})