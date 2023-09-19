export const calcular = (data) => {
    const rules = {
        input1: { min: 150 },
        input2: { min: 150 },
        input3: { min: 120 },
        input4: { min: 100 },
        input5: { min: 150 },
        input6: { min: 80 },
        input7: { min: 120 },
        input8: { min: 120 },
        input9: { min: 120 },
        input10: { min: 5 },
        input11: { min: 80 },
        input12: { min: 15 },
        input13: { min: 80, max: 110 },
        input14: { min: 15 },
    };

    const adapted = Object.keys(data).reduce((acc, key) => {
        const { min, max } = rules[key];
        const value = data[key];
        if (value < min || value > max) {
            acc[key] = 'unadapted';
        } else {
            acc[key] = 'adapted';
        }
        return acc;
    }, {});

    const rate = Object.values(adapted).filter((value) => value === 'adapted');
    const resultado = Math.round((rate.length * 100) / 14);

    return resultado;
};
