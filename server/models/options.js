const size = [{
        size: 'small',
        cost: 0
    },
    {
        size: 'medium',
        cost: 50
    },
    {
        size: 'large',
        cost: 50
    }
];
const material = ['poster', 'acrylic', 'metal'];
const orientation = ['landscape', 'portrait'];

const options = [size, material, orientation];

exports.extract = function(optionString) {

    let option;

    for (let i = 0; i < optionString.length; i++) {
        if (i < options.length) {
            let optionIndex = optionString.charAt(i);
            console.log(options[i][optionIndex]);
            option
        } else {
            console.log('break.');
            break;
        }
    }

    return {
        optionString: optionString,
        size: 'large',
        material: 'metal',
        orientation: 'landscape',
        cost: 100,
        qty: 1
    }
};