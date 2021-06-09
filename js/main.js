const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('topnav');
hamburger.addEventListener('click', () =>{
    navigation.classList.toggle('shov');
});