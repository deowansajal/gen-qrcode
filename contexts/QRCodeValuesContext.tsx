import { useState } from 'react'
import createCtx from 'utils/createCtx'

interface QRCodeValuesContextValue {
    url: string
    setUrl: React.Dispatch<React.SetStateAction<string>>
    size: number
    setSize: React.Dispatch<React.SetStateAction<number>>
}

export const [useQRCodeValues, Ctx] = createCtx<QRCodeValuesContextValue>()

export const QRCodeValuesProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [url, setUrl] = useState('')
    const [size, setSize] = useState(320)

    const value = { url, setUrl, size, setSize }

    return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
