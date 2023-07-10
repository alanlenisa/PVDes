export const badge_validation = {
    name: 'badge',
    label: 'badge',
    type: 'text',
    id: 'badge',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        maxLength: {
            value: 4,
            message: '4 max',
        },
    },
}

export const kwh_gg_validation = {
    name: 'kwh_gg',
    label: 'kwh_gg',
    type: 'number',
    id: 'kwh_gg',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        min: 0.01,
        max: 10,

    },
    postfix:'kWh'
}

export const gg_needed_validation = {
    name: 'gg_needed',
    label: 'gg_needed',
    type: 'number',
    id: 'gg_needed',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        min: 0,
        max: 15,

    },
}