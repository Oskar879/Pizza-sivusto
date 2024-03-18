document.addEventListener('DOMContentLoaded', function() {
    const sauces = document.querySelectorAll('.sauces');
    const doughs = document.querySelectorAll('.doughs');

    sauces.forEach(checkbox => {
        checkbox.onclick = function() {
            if (this.checked) {
                sauces.forEach(checkbox => {
                    if (checkbox !== this) {
                        checkbox.disabled = true;
                    }
                });
            } else {
                sauces.forEach(checkbox => {
                checkbox.disabled = false;
            });
        }
    };
});


    doughs.forEach(function(checkbox) {
        checkbox.onclick = function() {
            if (this.checked) {
                doughs.forEach(function(checkbox) {
                    if (checkbox !== this) {
                        checkbox.disabled = true;
                    }
                }, this);
            } else {
                doughs.forEach(function(checkbox) {
                    checkbox.disabled = false;
                });
            }
        };
    });
})

document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('topping');
    const dropdown2 = document.getElementById('cheese');
    const opti = document.getElementById('opt');
    const text = document.getElementById('che')
    let count1 = 0;
    let count2 = 0;

    dropdown.addEventListener('change', function() {
        const selectedOptions = Array.from(dropdown.selectedOptions);
        const selectedNames = selectedOptions.map(option => option.textContent);
        opti.textContent = 'Toppings: ' + selectedNames.join(', ');
        count1 = selectedOptions.length;

        if (count1 < 5) {
            selectedOptions[selectedOptions.length - 1].selected = false;
            //count1--;
        }
    })
    dropdown2.addEventListener('change', function() {
        const selectedOptions2 = Array.from(dropdown2.selectedOptions);
        const selectedNames2 = selectedOptions2.map(option => option.textContent);
        text.textContent = 'Cheese: ' + selectedNames2.join(', ')
        count2 = selectedOptions2.length;

        if (count2 < 2) {
            selectedOptions2[selectedOptions2.length -1].selected = false;
            //count2--;
        }
    })
})
function back() {
    location.replace('Tilaussivusto.html')
}