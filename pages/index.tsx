import GenerateQRCodeForm from '@/components/GenerateQRCodeForm'
import PageSubTitle from '@/components/PageSubTitle'
import PageTitle from '@/components/PageTitle'
import QRCodeImage from '@/components/QRCodeImage'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <PageTitle>
                <span>Generate and Publish</span>
                <br />
                <span className="text-blue-800">Dynamic</span>
                <span>QR Code</span>
            </PageTitle>
            <PageSubTitle>
                GenQRCode is a dynamic QR code generator. it allows users easily
                create customized QR codes for sharing or embedding on their
                website.
            </PageSubTitle>
            <GenerateQRCodeForm />
            <div className="my-20 flex justify-center ">
                <QRCodeImage />
            </div>
        </div>
    )
}

export default HomePage
