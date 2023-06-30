


function checkClass() {
    var element = document.getElementsByClassName("taskRowBase__link")[0];
    var curentRole = document.querySelectorAll("span.controlWithDropdownMainButtonContent__text, span.controlWithDropdown__text")[0]
    
    if (curentRole.textContent != 'Личные') {
       if(element.innerText == "Обращение клиента [Doner 42]")  {
            
        new Notification('Новое обращение', {
            body: "В чат кто-то написал!",
           
        })
        }
    }
}
window.addEventListener('load', function() {
    setInterval(checkClass, 20000);
}); 

