import React, { useContext } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const addItemHandler = (item) =>{}
    const removeItemHandler = (id) =>{}

    const cartContext = {
        items:[],
        totalAmount:0,
        addItem : addItemHandler,
        removeItem: removeItemHandler
    }




	return <AppContext.Provider value={cartContext}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }
