import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import InputField from '@/components/InputField'
import Select from './Select'
import Button from '@/components/Button'
import { useQRCodeValues } from '@/contexts/QRCodeValuesContext'

interface GenerateQRCodeFormProps {}

interface Inputs {
    url: string
    size: number
}

const schema = yup
    .object({
        url: yup.string().url().required(),
        size: yup.number().positive().integer().required(),
    })
    .required()

const GenerateQRCodeForm: React.FC<GenerateQRCodeFormProps> = ({}) => {
    const { setSize, setUrl } = useQRCodeValues()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(schema),
    })

    const onSubmit: SubmitHandler<Inputs> = data => {
        setSize(data.size)
        setUrl(data.url)

        reset()
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-20 w-8/12 mx-auto"
        >
            <InputField
                name="url"
                id="url"
                label="Enter website url"
                register={register}
                error={errors.url}
                className="w-full mt-2"
            />
            <Select
                name="size"
                options={[320, 400, 600]}
                register={register}
                error={errors.size}
                className="w-full mt-5"
            />
            <Button type="submit" className="w-full mt-5">
                Generate QR Code
            </Button>
        </form>
    )
}

export default GenerateQRCodeForm
