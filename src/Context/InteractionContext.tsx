import React from "react";
import { ControlActionType } from "./ControlActionType";

interface User {
    name: string;
    login: string;
}

export interface IInteractionContextData {
    counter: number;
    lastAction: string;
    lastActionTimestamp: number;
    user: User;
}

export interface IInteractionContext {
    data: IInteractionContextData;
    setter: (p: Partial<IInteractionContextData>) => void
}

export const defaultContext: IInteractionContextData = {
    counter: 0,
    lastAction: "click",
    lastActionTimestamp: -1,
    user: {
        name: "name",
        login: "login",
    },
};

interface Props {
    children: React.ReactNode
}

export const InteractionContext = React.createContext<IInteractionContext>({ data: defaultContext, setter: () => { } });

export class Prov extends React.Component<Props, IInteractionContextData> {
    constructor(props: any) {
        super(props);
        this.state = defaultContext;    
    }


    render() {
        return <InteractionContext.Provider
            value={{
                data: this.state,
                setter: (p) => this.setState(p as any)
            }}
        >
            <ControlActionType lastAction={this.state.lastAction}/>
            {this.props.children}
        </InteractionContext.Provider>
    }

}