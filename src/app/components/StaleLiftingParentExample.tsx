'use client'
import { useState } from "react";
import StateLiftingChildExample from "@/app/components/StatleLiftingChildExample";

const StateLiftingParentExample = () => {
    const [bgColor, setBgColor] = useState('dark:bg-black');

    const handleColorChange = (newColor: string) => {
        setBgColor(newColor);
    };

    return (
        <div className={`max-w-screen-lg flex-col text-center ${bgColor} border-2 border-primary-color-pail p-5 dark:text-white`}>
            <h1 className="font-semibold mt-5">
                Parent component
            </h1>
            <h2 className="text-2xl font-bold my-3">State lifting</h2>
            <div className={`w-full h-1/4 text-start mx-auto px-10 py-3`}>
                <h2>This example demonstrates how to select a color in a child component for use in the parent component.</h2>
                <p> When both the parent and child need to share and manage the same piece of state.<br/>

                   <b>Why it’s good:</b> <br/>

                    •	Shared control: Both the parent and child have access to the same state, so they can synchronize actions and updates.<br/>
                    •	One source of truth: Since the state is lifted to the parent, both components are working with the same state, reducing bugs caused by multiple sources of truth.<br/>

                   <b>Why not:</b> <br/>

                    •	Prop drilling: As with callback functions, state lifting can result in passing props down through multiple layers of components, making the code less maintainable.</p>
            </div>
            <StateLiftingChildExample onColorChange={handleColorChange} />
        </div>
    );
};

export default StateLiftingParentExample;