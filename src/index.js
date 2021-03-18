import './style.css';

// Import images
import bronco from './assets/images/bronco.png';
import mustang from './assets/images/mustang.png';
import mustangBronco from './assets/images/mustang-bronco.png';
import ford from './assets/images/ford.png';

const messages = {
    BRONCO: {
        message: "Bronco",
        image: bronco
    },
    MUSTANG: {
        message: "Mustang",
        image: mustang
    },
    MUSTANG_BRONCO: {
        message: "MustangBronco",
        image: mustangBronco
    },
    NEITHER: {
        message: "",
        image: ford
    }
};

// Determine divisibility
function divisibility(x) {
    const d3 = !(x % 3); // true if divisible by 3;
    const d5 = !(x % 5); // true if divisible by 5;

    if (d3 && d5) {
        return messages.MUSTANG_BRONCO;
    } else if (d3) {
        return messages.MUSTANG;
    } else if (d5) {
        return messages.BRONCO;
    } else {
        const neitherMsg = messages.NEITHER;
        neitherMsg.message = x;
        return neitherMsg;
    }
}

const integerInputEl = document.getElementById('intInput');
const runBtnEl = document.getElementById('run');
const validationErrorEl = document.getElementById('validationError');

function run() {
    const props = divisibility(integerInputEl.value);
    document.getElementById('declareMsg').textContent = props.message;
    document.getElementById('declareImg').src = props.image;
    runBtnEl.textContent = 'Go Again?'
}

// Validate input
integerInputEl.addEventListener('input', () => {
    const inputVal = integerInputEl.value.trim();

    if (!inputVal // Catch blank input
        || isNaN(inputVal) // Catch non numbers
        || inputVal.indexOf('.') !== -1 // Catch non whole numbers.
    ) {
        runBtnEl.disabled = true;
        validationErrorEl.style.display = 'initial';
    } else {
        runBtnEl.disabled = false;
        validationErrorEl.style.display = 'none';
    }
});

// Watch for "Enter" key press
integerInputEl.addEventListener('keyup', event => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        // Trigger run button press
        runBtnEl.click();
    }
});

// Listen for button click to run the algorithm
runBtnEl.addEventListener('click', () => run());