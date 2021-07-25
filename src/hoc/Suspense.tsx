import React from "react";

export function withSuspense<COM>(Component: React.ComponentType<COM>) {
    return (props: COM) => {
        return <React.Suspense fallback={"no"}>
            <Component {...props} />
        </React.Suspense>
    }

}