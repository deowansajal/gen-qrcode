import { useQRCodeValues } from '@/contexts/QRCodeValuesContext'
import { QRCodeCanvas } from 'qrcode.react'
import { useRef } from 'react'
import Button from './Button'

const QRCodeImage: React.FC = () => {
    const ref = useRef()
    const { size, url } = useQRCodeValues()
    if (!url || !size) return null

    const downloadQRCode = () => {
        const canvas: any = document.getElementById('qrcode-canvas')!
        const dataUrl = canvas.toDataURL('image/png')
        var link = document.createElement('a')
        link.href = dataUrl
        link.download = 'qrcode'
        link.click()
    }

    return (
        <div>
            <QRCodeCanvas
                id="qrcode-canvas"
                value={url}
                size={size}
                level="L"
            />
            <Button
                onClick={downloadQRCode}
                className="w-full mt-10 bg-red-500"
            >
                Download QRCode
            </Button>
        </div>
    )
}

export default QRCodeImage
