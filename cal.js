let output = document.getElementById('output');

let btns = Array.from(document.getElementsByClassName('btn'));

btns.map( btn => {
    btn.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                output.innerText = '';
                break;
            case '←':
                if (output.innerText) {
                    output.innerText = output.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    output.innerText = eval(output.innerText);
                } catch {
                    output.innerText = 'Invalid Entry';
                }
                break;
            default:
                output.innerText += e.target.innerText;
        }
    });
});

