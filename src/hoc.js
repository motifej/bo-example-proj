import React from "react";
import Button from "material-ui/Button";

export const RaisedDefaultButton = () => (
    <Button variant="raised">Click me</Button>
);

export const RaisedPrimaryButton = () => (
    <Button variant="raised" color="primary">
        Click me
    </Button>
);

export const RaisedSecondaryButton = () => (
    <Button variant="raised" color="secondary">
        Click me
    </Button>
);

export const RaisedDsiabledButton = () => (
    <Button variant="raised" color="secondary" disabled>
        Disabled
    </Button>
);

const Subscribe = (Wrapped, config) =>
    class extends React.Component {
        render() {
            return (
                <Wrapped
                    {...this.props}
                    component={config && config.component}
                    disabled={config && config.disabled}
                    href={config && config.href}
                />
            );
        }
    };

export const RaisedPrimaryBtn = Subscribe(RaisedPrimaryButton);
export const RaisedDefaultBtn = Subscribe(RaisedDefaultButton);
export const RaisedSecondaryBtn = Subscribe(RaisedSecondaryButton);
export const RaisedDsiabledBtn = Subscribe(RaisedDsiabledButton);
