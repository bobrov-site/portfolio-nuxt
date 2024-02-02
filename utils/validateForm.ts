import * as yup from 'yup';

const getFormSchema = () => {
    return yup.object().shape({
        category: yup.string().required(),
        title: yup.string().required('Название обязательное'),
        description: yup.string(),
        url: yup.string().url('Некорректная ссылка'),
        pushedBy: yup.string(),
    })
}

export default async function (formData: Object) {
    const schema = getFormSchema();
    const response = await schema.validate(formData, {abortEarly: false})
    return response
}