import React from 'react'

export const withLogging = (WrappedComponent) => {

    const logger = () => {
        console.log(WrappedComponent.name +  " is rendered" );
    };
    logger();

    return function withLogging(props) {
        
        return (
            <WrappedComponent {...props} />
        );
    }
}

