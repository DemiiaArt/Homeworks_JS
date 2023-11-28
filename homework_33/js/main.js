const refs = {
    categories: document.querySelector('#categories'),
    products: document.querySelector('#products-list'),
    info: document.querySelector('#product-info'),
}

refs.categories.addEventListener('click', openProductsList)

function openProductsList (event) {
    // let activeCat = event.target;
    // console.log(activeCat);

    //підсвічування активної категорії
    const currentActiveCategory = event.currentTarget.querySelector('.active-category');
    
    if (currentActiveCategory) {
        currentActiveCategory.classList.remove('active-category')
    }

    const nextActiveCategory = event.target;
    nextActiveCategory.classList.toggle('active-category');

    if (nextActiveCategory === currentActiveCategory) {
        nextActiveCategory.classList.remove('active-category');
    }

    //допилити незакриття сабменюшек
    closeAllSubMenus(nextActiveCategory.nextElementSibling);
    
    
    // console.log(event);
    nextActiveCategory.nextElementSibling.classList.toggle('sub-menu-active')
}

function closeAllSubMenus (current = null) {
    const subMenu = document.querySelectorAll('#categories ul');
    Array.from(subMenu).forEach(item => {
        if (item !== current) {
            item.classList.remove('sub-menu-active')
        }
    });
}