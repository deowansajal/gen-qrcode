import { FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface SelectProps {
    name: string
    className?: string
    register: any
    error?: FieldError
    options: number[]
}

interface OptionProps {
    value: number
}

const Option: React.FC<OptionProps> = ({ value }) => {
    return <option value={value}>{value}</option>
}

const Select: React.FC<SelectProps> = ({
    name,
    className,
    register,
    error,
    options,
}) => {
    const classes = twMerge(
        'border border-2 border-gray-200  focus:outline-none focus:border-blue-800 p-2 rounded-md',
        className
    )

    return (
        <div>
            <select className={classes} {...register(name)}>
                {options.map(option => (
                    <Option key={option} value={option} />
                ))}
            </select>
            {error && (
                <span className="text-sm text-red-400">{error.message}</span>
            )}
        </div>
    )
}

export default Select
