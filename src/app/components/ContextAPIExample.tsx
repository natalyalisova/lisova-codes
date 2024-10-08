import {createContext} from "react";

const FontContext = createContext({
    data: '',
    setData: (value: string) => {
    }
});
export default FontContext;