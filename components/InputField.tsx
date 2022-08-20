import { FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface InputFieldProps {
    type?: string
    id: string
    name: string
    label?: string
    className?: string
    register: any
    error?: FieldError
}

const InputField: React.FC<InputFieldProps> = ({
    type = 'text',
    id,
    name,
    label,
    className,
    error,
    register,
}) => {
    const classes = twMerge(
        `border border-2 border-${
            error ? 'red-400' : 'gray-200'
        }  focus:outline-none focus:border-blue-800 p-2 rounded-md`,
        className
    )

    return (
        <div>
            <label className="text-gray-900 capitalize text-lg" htmlFor={id}>
                {label}
            </label>

            <input
                type={type}
                id={id}
                className={classes}
                {...register(name)}
            />
            {error && (
                <span className="text-sm text-red-400">{error.message}</span>
            )}
        </div>
    )
}

export default InputField
