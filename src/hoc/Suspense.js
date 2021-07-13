import React from "react";


export const withSuspense = (Component) => {

    return (props)=>{
       return <React.Suspense fallback={"no"}>
            <Component {...props} />
        </React.Suspense>
    }

}