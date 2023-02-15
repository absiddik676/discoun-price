function getElementText(elementID){
    const element  = document.getElementById(elementID);
    const elementTextString = element.innerText;
    const elementValue = parseFloat(elementTextString);
    return elementValue
}
document.getElementById('apply-btn').addEventListener('click',function(){
    const getCoupon = document.getElementById('input').value;
    if(getCoupon == 'DISCO30'){
        const price = getElementText('price');
        const discount = (price*30)/100;
        const finalPrice = price - discount
        const finalPriceElement = document.getElementById('final-price');
        finalPriceElement.innerText = finalPrice
    }
    else{
        alert('SORRY YOUR COUPON IS INVALID')
        const price = getElementText('price');
        const finalPriceElement = document.getElementById('final-price');
        finalPriceElement.innerText = price
    }
})