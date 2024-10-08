import {useContext} from "react";
import FontContext from "@/app/components/ContextAPIExample";

const ContextAPIChildExample = () => {

    const {data, setData} = useContext(FontContext);

    const handleFontChange = (data: string) => {
        setData(data);
    }
    return (
        <div className="dark:text-white flex-col text-center mt-10 border-2 border-complementary-color pt-3">
            <h2>
                Child component
            </h2>
            <h2>
                Choose font size and style
            </h2>
            <div className="flex flex-row w-full h-1/4 text-center text-white mx-auto p-2 justify-center">
                <button onClick={() => handleFontChange('text-sm')}
                        className="rounded border text-sm bg-complementary-color-pail px-6 py-2 m-2">Small
                </button>
                <button onClick={() => handleFontChange('text-2xl ')}
                        className="rounded border text-2xl  bg-complementary-color-pail px-6 py-3 m-2">XXL
                </button>
                <button onClick={() => handleFontChange('font-bold')}
                        className="rounded font-extrabold text-base border bg-complementary-color-pail px-6 py-4 m-2">Extra
                    Bold
                </button>
            </div>

        </div>

    )
};
export default ContextAPIChildExample;


