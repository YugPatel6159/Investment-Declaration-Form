import * as Yup from 'yup'

export const DeclarationFormSchema = Yup.object().shape({
    employeeName: Yup.string().matches(/^[a-zA-Z]+$/, 'Name can contain only Latin letters').required('Employee Name is required'),
    employeePan: Yup.string().matches(/^[a-zA-Z0-9 ]+$/, 'Name should not contain any special characters').required('PAN is required'),
    option: Yup.string().required('Option is required')
})  