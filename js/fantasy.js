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
    checkbox.addEventListener('change', function() {
        const val = this.name;
        if (val === 'none') {
            sauces.forEach(cb => {
                if (cb !== checkbox) {
                    cb.disabled = true;
                }
            });
        } else if (val === 'garlic' || val === 'extra') {
            sauces.forEach(cb => {
                if (cb.name !== val && cb.name !== 'none') {
                    cb.disabled = true;
                }
            });
        } else {
            sauces.forEach(cb => {
                cb.disabled = false;
            });
        }
    });
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


function back() {
    location.replace('Tilaussivusto.html')
}
function jobanilistus() {
    // Gather the selected checkboxes
    const topping = document.querySelectorAll('.topping');
    const cheese = document.querySelectorAll('.cheese');
    const sauce = document.querySelectorAll('.sauces');
    const dough = document.querySelectorAll('.doughs');
    const totalPriceDisplay = document.getElementById('totalPrice');
    
    function calculateTotalPrice() {
        let totalPrice = 0;

        // Iterate over toppings
        topping.forEach(topping => {
            if (topping.checked) {
                totalPrice += parseFloat(topping.value);
            }
        });

        // Iterate over cheeses
        cheese.forEach(cheese => {
            if (cheese.checked) {
                totalPrice += parseFloat(cheese.value);
            }
        });

        // Iterate over sauces
        sauce.forEach(sauce => {
            if (sauce.checked) {
                totalPrice += parseFloat(sauce.value);
            }
        });

        // Iterate over doughs
        dough.forEach(dough => {
            if (dough.checked) {
                totalPrice += parseFloat(dough.value);
            }
        });

        // Update the display of total price
        totalPriceDisplay.textContent = `Hinta Yhteensä: ${totalPrice.toFixed(2)}€`;
    }

    // Attach onclick event listeners to all checkboxes
    [topping, cheese, sauce, dough].forEach(group => {
        group.forEach(checkbox => {
            checkbox.addEventListener('click', calculateTotalPrice);
        });
    });
    calculateTotalPrice();

}
document.addEventListener('DOMContentLoaded', jobanilistus);