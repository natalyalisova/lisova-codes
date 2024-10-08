'use client'
import {useState} from "react";
import ContextAPIChildExample from "@/app/components/ContextAPIChildExample";
import FontContext from "@/app/components/ContextAPIExample";


const ContextAPIParentExample = () => {
    const [data, setData] = useState('font-light');

    return (
        <FontContext.Provider value={{data, setData}}>
            <div
                className={`max-w-screen-lg flex-col text-center  ${data} border-2 border-primary-color-pail p-5 dark:text-white`}>
                <h1 className="font-semibold mt-5">
                    Parent component
                </h1>
                <h2 className="text-2xl font-bold my-3">Context API</h2>
                <div className={`w-full h-1/4 text-start mx-auto px-10 py-3`}>
                    <p>Send data between components that are not directly parent-child or when there are multiple child
                        components needing to communicate with the parent.<br/>

                        <b>Why it’s good:</b>

                        • Avoids prop drilling: You don’t need to pass props through every intermediary component.<br/>
                        • Global access: Makes state available across the entire component tree without explicitly
                        passing it down, improving maintainability in larger apps.<br/>
                        • Flexibility: You can access context from any component at any level in the tree.<br/>

                        <b>Why not:</b> <br/>

                        • Overhead for simple tasks: If the app is small and doesn’t need state shared globally, using
                        Context might add unnecessary complexity.<br/>
                        • Performance: React re-renders all components consuming the context when the value changes,
                        which can cause performance issues in large applications. You might need to optimize by
                        splitting contexts or memorizing values.</p>

                </div>
                <ContextAPIChildExample/>
            </div>
        </FontContext.Provider>
    );
};

export default ContextAPIParentExample;