import Container from '@/components/Container'

interface HeaderProps {
    logo: string
}

interface LogoProps extends HeaderProps {}

const Logo: React.FC<LogoProps> = ({ logo }) => (
    <h4 className="text-xl text-blue-800 font-bold">{logo}</h4>
)

const Header: React.FC<HeaderProps> = ({ logo }) => {
    return (
        <header>
            <div className="border-b border-b-slate-200 py-5">
                <Container>
                    <Logo logo={logo} />
                </Container>
            </div>
        </header>
    )
}

export default Header
