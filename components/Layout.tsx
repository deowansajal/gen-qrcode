import { ReactNode } from 'react'
import Header from '@/components/Header'
import Container from '@/components/Container'

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header logo="genQRCode" />
            <main>
                <Container>{children}</Container>
            </main>
        </>
    )
}

export default Layout
