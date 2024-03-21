document.addEventListener('DOMContentLoaded', function() {
    const sauces = document.querySelectorAll('.sauces');
    const doughs = document.querySelectorAll('.doughs');
    const toppings = document.querySelectorAll('.topping');
    const cheeses = document.querySelectorAll('.cheese');
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

toppings.forEach(checkbox => {
    checkbox.onclick = function() {
        if(this.checked) {
            if (count1 >= 5) {
                this.checked = false;
                return;
            }
            count1++;
        } else {
            count1--;
        }
        toppings.forEach(checkbox => {
            checkbox.disabled = count1 >= 5 && !checkbox.checked;
        })
        
    }
})

cheeses.forEach(checkbox => {
    checkbox.onclick = function() {
        if(this.checked) {
            if(count2 >= 3) {
                this.checked = false;
                return;
            }
            count2++;
        } else {
            count2--;
        }
        cheeses.forEach(checkbox => {
            checkbox.disabled = count2 >= 3 && !checkbox.checked;
        })
    }
})

sauces.forEach(checkbox => {
    checkbox.onclick = function() {
        const val = Array.from(sauces)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
        
        if(val.includes('none')) {
            sauces.forEach(checkbox => {
                if (checkbox.value !== 'none') {
                    checkbox.disabled = true;
                }
            });
        } else if (val.includes('garlic')) {
            sauces.forEach(checkbox => {
                if (checkbox.value === 'extra') {
                    checkbox.disabled = false;
                } else if (checkbox.value === 'none') {
                    checkbox.disabled = true;
                }
            });
            
        }else if (val.includes('extra')) {
            sauces.forEach(checkbox => {
                if (checkbox.value === 'garlic') {
                    checkbox.disabled = false
                } else if (checkbox.value === 'none') {
                    checkbox.disabled = true;
                }
            })
        } else {
            sauces.forEach(checkbox => {
                checkbox.disabled = false;
            })
        }
    }
})


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


function back() {
    location.replace('Tilaussivusto.html')
}
function jobanilistus() {
    document.addEventListener('DOMContentLoaded', function() {
    // Gather the selected checkboxes
    const selectedToppings = [];
    const selectedCheeses = [];
    const selectedSauces = [];
    const selectedDoughs = [];
    const totalPriceDisplay = document.getElementById('totalPrice');
    
    let totalPrice = 0;
    function calculateTotalPrice() {

        // Iterate over toppings
        toppings.forEach(topping => {
            if (topping.checked) {
                totalPrice += parseFloat(topping.value);
            }
        });

        // Iterate over cheeses
        cheeses.forEach(cheese => {
            if (cheese.checked) {
                totalPrice += parseFloat(cheese.value);
            }
        });

        // Iterate over sauces
        sauces.forEach(sauce => {
            if (sauce.checked) {
                totalPrice += parseFloat(sauce.value);
            }
        });

        // Iterate over doughs
        doughs.forEach(dough => {
            if (dough.checked) {
                totalPrice += parseFloat(dough.value);
            }
        });

        // Update the display of total price
        totalPriceDisplay.textContent = `Total Price: ${totalPrice.toFixed(2)}€`;
    }

    // Attach onclick event listeners to all checkboxes
    [toppings, cheeses, sauces, doughs].forEach(group => {
        group.forEach(checkbox => {
            checkbox.addEventListener('click', calculateTotalPrice);
        });
    });
    calculateTotalPrice();

    })
}
document.addEventListener('DOMContentLoaded', send);