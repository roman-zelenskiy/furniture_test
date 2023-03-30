let burgerMainMenu = document.getElementsByClassName('burger_main_menu')[0];
let burgerMenuProduct = document.getElementsByClassName('burger_menu_product')[0];
let collapseMain = document.getElementsByClassName('collapse_main')[0];
let collapseProducts = document.getElementsByClassName('collapse_products')[0];


burgerMainMenu.addEventListener('click', onClickBurgerMainMenu);
burgerMenuProduct.addEventListener('click', onClickBurgerProductsMenu);

function onClickBurgerMainMenu() {
    collapseMain.classList.toggle('collapse_d_block');
    burgerMainMenu.classList.toggle('active');
     burgerMenuProduct.classList.remove('active');
    collapseProducts.classList.remove('collapse_d_block')
}
function onClickBurgerProductsMenu() {
    collapseProducts.classList.toggle('collapse_d_block')
    burgerMenuProduct.classList.toggle('active');
    burgerMainMenu.classList.remove('active');
    collapseMain.classList.remove('collapse_d_block');
}