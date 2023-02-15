
function getElementText(elementID){
    const element  = document.getElementById(elementID);
    const elementTextString = element.innerText;
    const elementValue = parseFloat(elementTextString);
    return elementValue
}
document.getElementById('apply-btn').addEventListener('click',function(){
    const price = getElementText('price');
    const discount= (price*30)/100;
    const finalPrice = price - discount;
    console.log(finalPrice);
    const finalPriceElement = document.getElementById('final-price');
    // const finalPriceSting = finalPriceElement.innerText;
    finalPriceElement.innerText = finalPrice
})