import { twMerge } from 'tailwind-merge'

interface PageSubTitleProps {
    title?: string
    className?: string
    children?: React.ReactNode
}

const PageSubTitle: React.FC<PageSubTitleProps> = ({
    title,
    className,
    children,
}) => {
    const classes = twMerge(
        'text-center text-gray-600 font-medium mt-7',
        className
    )
    return <h4 className={classes}>{title ? title : children}</h4>
}

export default PageSubTitle
