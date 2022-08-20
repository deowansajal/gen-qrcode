import { twMerge } from 'tailwind-merge'

interface PageTitleProps {
    title?: string
    className?: string
    children?: React.ReactNode
}

const PageTitle: React.FC<PageTitleProps> = ({
    title,
    className,
    children,
}) => {
    const classes = twMerge(
        'text-6xl text-center text-gray-900 font-bold mt-20 ',
        className
    )
    return <h1 className={classes}>{title ? title : children}</h1>
}

export default PageTitle
