document.addEventListener('DOMContentLoaded', function() {
    const sauces = document.querySelectorAll('.sauces');
    const doughs = document.querySelectorAll('.doughs');
    const toppings = document.querySelectorAll('.topping');
    const cheeses = document.querySelectorAll('.cheese');

    toppings.forEach(checkbox => {
        checkbox.onclick = function() {
            if (this.checked) {
                toppings.forEach(checkbox => {
                    if (checkbox !== this) {
                        checkbox.disabled = true;
                    }
                });
            } else {
                toppings.forEach(checkbox => {
                    checkbox.disabled = false;
                })
            }
        }
    })

    cheeses.forEach(checkbox => {
        checkbox.onclick = function() {
            if (this.checked) {
                cheeses.forEach(checkbox => {
                    if (checkbox !== this) {
                        checkbox.disabled = true;
                    }
                });
            } else {
                cheeses.forEach(checkbox => {
                    checkbox.disabled = false;
                })
            }
        }
    })

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


function back() {
    location.replace('Tilaussivusto.html')
}