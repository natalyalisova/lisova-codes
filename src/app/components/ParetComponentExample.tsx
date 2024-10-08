'use client'
import { useState } from "react";
import Typography from "@mui/material/Typography";
import ChildComponentExample from "@/app/components/ChildComponentExample";

const ParentComponentExample = () => {
    const [bgColor, setBgColor] = useState('bg-background-color-dark');

    const handleColorChange = (newColor: string) => {
        setBgColor(newColor);
    };

    return (
        <div className={`flex-col text-center  ${bgColor} border-2 border-primary-color-pail p-5`}>
            <Typography variant="subtitle1" className="dark:text-white mb-10">
                Parent component
            </Typography>
            <div className={`w-full h-1/4 text-center mx-auto p-10`}>
                <h2>This example demonstrates how to select a color in a child component for use in the parent component.</h2>
            </div>
            <ChildComponentExample onColorChange={handleColorChange} />
        </div>
    );
};

export default ParentComponentExample;