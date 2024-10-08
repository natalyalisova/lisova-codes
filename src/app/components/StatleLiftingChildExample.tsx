import Typography from "@mui/material/Typography";

interface ChildComponentProps{
    onColorChange:(color: string) => void;
}

const StatleLiftingChildExample = ({ onColorChange }:  ChildComponentProps) => {
    const handleColorChange = (color:string) => {
        onColorChange(color);
    }
    return (
        <div className="dark:text-white flex-col text-center mt-10 border-2 border-complementary-color">
            <Typography variant="subtitle1" className="dark: mt-5">
                Child component
            </Typography>
            <div className="w-full h-1/4 text-center text-white mx-auto p-2">
                <button onClick={() => handleColorChange('bg-red-500')} className="rounded border bg-red-500 px-6 py-3 m-2">Red</button>
                <button onClick={() => handleColorChange('bg-blue-500')} className="rounded border bg-blue-500 px-6 py-3 m-2">Blue</button>
                <button onClick={() => handleColorChange('bg-green-500')} className="rounded  border bg-green-500 px-6 py-3 m-2">Green</button>
            </div>

        </div>

    )
};
export default StatleLiftingChildExample;


