function order(){
alert('Welcome to the Restaurant!')

let foodNum = +prompt(`Enter your food choice using the number.
1. Biryani
2. Nihari
3. Chicken Karahi
4. Chapli Kebab
5. Haleem`)

if (foodNum == 1){
    let option = +prompt(`Enter your option.\n1. Chicken Biryani (Quarter piece) — PKR 280\n2. Chicken Biryani (Half piece) — PKR 350\n3. Beef Biryani — PKR 400\n4. Sada Biryani — PKR 200`)
    if(option == 1){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`Chicken Biryani (Quarter piece) — PKR 280 x ${quantity}\nTotal: ${280*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else if(option == 2){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`Chicken Biryani (Half piece) — PKR 350 x ${quantity}\nTotal: ${350*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else if(option == 3){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`Beef Biryani — PKR 400 x ${quantity}\nTotal: ${400*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else if(option == 4){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`Sada Biryani — PKR 200 x ${quantity}\nTotal: ${200*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else{
        alert('Invalid Option')
    }
    
}



else if (foodNum == 2){
    let option = +prompt(`1. Plain Nihari (Single serving) — PKR 300\n2. Beef Nihari (With bone marrow - nalli) — PKR 500\n3. Special Nihari (With nalli + maghaz) — PKR 700`)
    if(option == 1){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`Plain Nihari (Single serving) — PKR 300 x ${quantity}\nTotal: ${300*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else if(option == 2){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`Beef Nihari (With bone marrow - nalli) — PKR 500 x ${quantity}\nTotal: ${500*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else if(option == 3){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`Special Nihari (With nalli + maghaz) — PKR 700 x ${quantity}\nTotal: ${700*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else{
        alert('Invalid Option')
    }
}



else if (foodNum == 3){
    let option = +prompt(`1. Quarter Chicken Karahi (1–2 persons) — PKR 600\n2. Half Chicken Karahi (2–3 persons) — PKR 950\n3. Full Chicken Karahi (4–5 persons) — PKR 1800`)
    if(option == 1){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`Quarter Chicken Karahi (1–2 persons) — PKR 600 x ${quantity}\nTotal: ${600*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else if(option == 2){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`Half Chicken Karahi (2–3 persons) — PKR 950 x ${quantity}\nTotal: ${950*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else if(option == 3){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`Full Chicken Karahi (4–5 persons) — PKR 1800 x ${quantity}\nTotal: ${1800*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else{
        alert('Invalid Option')
    }
}


else if (foodNum == 4){
    let option = +prompt(`1. Single Chapli Kebab — PKR 150\n2. Chapli Kebab Roll (in paratha with chutney) — PKR 200\n3. 5-Kebab Plate (with naan/salad) — PKR 700`)
    if(option == 1){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`Single Chapli Kebab — PKR 150 x ${quantity}\nTotal: ${150*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else if(option == 2){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`Chapli Kebab Roll (in paratha with chutney) — PKR 200 x ${quantity}\nTotal: ${200*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else if(option == 3){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`5-Kebab Plate (with naan/salad) — PKR 700 x ${quantity}\nTotal: ${700*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else{
        alert('Invalid Option')
    }
}
else if (foodNum == 5){
    let option = +prompt(`1. Single Plate — PKR 250\n2. Family Pack (serves 3–4) — PKR 800`)
    if(option == 1){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`Single Plate — PKR 250 x ${quantity}\nTotal: ${250*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else if(option == 2){
        let quantity = +prompt('Enter the Quantity')
        if(quantity > 0){
            alert(`Family Pack (serves 3–4) — PKR 800 x ${quantity}\nTotal: ${800*quantity}`)
        }
        else{
            alert('Invalid Quanitity')
        }
    }
    else{
        alert('Invalid Option')
    }
}
else{
    alert('Incorrect Value. Refresh the page to try again')
}
}