import React from "react"

export const Loading = () => {
    return <div className="h-screen w-full grid place-items-center">
        <p className="text-5xl">Laoding...</p>
    </div>
}

export const Suspense = ({children}) => {
    return <React.Suspense fallback={<Loading/>}>{children}</React.Suspense>
}