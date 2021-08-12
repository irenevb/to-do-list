import React, {createContext,useState} from 'react';

export const OptionsContext = createContext([]);

export const OptionsProvider = ({children}) => {
    const [options,setOptions] = useState([]);

    return(
        <OptionsContext.Provider
            value={{options, setOptions}}
        >
            {children}
        </OptionsContext.Provider>
    )

}