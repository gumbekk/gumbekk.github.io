const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];

document.write("Shopping list is " + shopping.length + " items long")
document.write("<br>")
document.write("<br>");
document.write("the first item is " + shopping[0])
document.write("<br>")
document.write("<br>");
document.write("adding an item <br>")
shopping.unshift("eggs")
document.write(shopping)
document.write("<br>")
document.write("<br>");
document.write("removing an item <br>")
shopping.shift()
document.write(shopping)