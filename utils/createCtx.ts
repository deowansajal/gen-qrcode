import { useContext, createContext } from 'react'

const createCtx = <A extends {} | null>() => {
    const ctx = createContext<A | undefined>(undefined)
    const useCtx = () => {
        const c = useContext(ctx)
        if (c === undefined)
            throw new Error('useCtx must be inside a Provider with a value')
        return c
    }
    return [useCtx, ctx] as const // 'as const' makes TypeScript infer a tuple
}

export default createCtx
