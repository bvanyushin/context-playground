import React from "react";
import { InteractionContext, IInteractionContext } from "../Context/InteractionContext";

export class User extends React.PureComponent {
    static contextType = InteractionContext;

    render() {
        console.log('User rendered')
        const { data: { user } } = (this.context as IInteractionContext);

        return <div>
            <div>name</div>
            <div>{user.name}</div>
            <div>login</div>
            <div>{user.login}</div>
        </div>
    }
}