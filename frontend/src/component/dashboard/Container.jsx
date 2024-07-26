import React from 'react';
import './scrollcustom.css'

const Container = ({ children }) => {
    return (
        <div
            className="
                max-h-[calc(100vh-60px)]
                overflow-auto
                mx-auto
                pt-16
                pb-10
                xl:px-20
                md:px-14
                sm:px-10
                px-10
            "
        >
            {children}
        </div>
    );
};

export default Container;
