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

export const w_inverter_validation = {
    name: 'w_inverter',
    label: 'w_inverter',
    type: 'number',
    id: 'w_inverter',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        min: 10,
        max: 10000,

    },
}
export const v_plant_validation = {
    name: 'v_plant',
    label: 'v_plant',
    type: 'number',
    id: 'v_plant',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        min: 12,
        max: 48,

    },
}
export const percent_battery_max_validation = {
    name: 'percent_battery_max',
    label: 'percent_battery_max',
    type: 'number',
    id: 'percent_battery_max',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        min: 5,
        max: 95,

    },
}