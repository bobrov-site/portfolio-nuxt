import * as yup from 'yup';

const getFormSchema = () => {
    return yup.object().shape({
        category: yup.string(),
        title: yup.string().required('Название обязательное'),
        description: yup.string(),
        url: yup.string().url('Некорректная ссылка'),
        pushedBy: yup.string(),
    })
}

export default async function (formData: any) {
    const schema = getFormSchema()
    const response = await schema.validate(formData.value)
    return response
}