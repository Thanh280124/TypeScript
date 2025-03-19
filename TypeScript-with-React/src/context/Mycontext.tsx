import { createContext, FC, useState } from "react"
interface MycontextProps {
    count: number,
    increment: () => void,
    decrement: () => void,
}
export const Mycontext = createContext<MycontextProps>({
    count: 0,
    increment: () => {},
    decrement: () => {},
})

interface MyProviderProp{
    children: React.ReactNode
}

const MycontextProvider: FC<MyProviderProp> = ({children}) => {
    const [count, setCount] = useState<number>(0)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    return (
        <Mycontext.Provider value={{count, increment, decrement}}>
            {children}
        </Mycontext.Provider>
    )
}


  
export default MycontextProvider
 
