
const refs = {
    categories: document.querySelector('.categoryList'),
    products: document.querySelector('.products-list'),
    info: document.querySelector('#product-info'),
    btn: document.querySelector('#buyBtn'),
}

const products = [
    {id: 1, category: 'category-1', name: 'Product-1', size: 'small', country: 'USA', year: 2022},
    {id: 2, category: 'category-2', name: 'Product-1', size: 'large', country: 'China', year: 2020},
    {id: 3, category: 'category-3', name: 'Product-1', size: '50x70', country: 'USA', year: 2023},
    {id: 4, category: 'category-4', name: 'Product-1', size: '200 mm', country: 'China', year: 2020},
    {id: 5, category: 'category-5', name: 'Product-1', size: 'medium', country: 'Italy', year: 2007},
    {id: 6, category: 'category-6', name: 'Product-1', size: 'one size', country: 'Canada', year: 2022},
    {id: 7, category: 'category-1', name: 'Product-2', size: 'medium', country: 'USA', year: 2021},
    {id: 8, category: 'category-3', name: 'Product-2', size: '30x80', country: 'China', year: 2023},
]



function hideActiveCategory (event) {
    //підсвічування активної категорії
    const currentActiveCategory = event.currentTarget.querySelector('.active-category');

    //перемикання категорій між собою
    if (currentActiveCategory) {
        currentActiveCategory.classList.remove('active-category')
    }

    event.target.classList.add('active-category');

    if (event.target === currentActiveCategory) {
        event.target.classList.remove('active-category');
    }
}



function openProductsList (event) {
    const nextActiveCategory = event.target;
    
    hideActiveCategory(event);

    
    //список продуктів ==============================<<<
    if (!nextActiveCategory.classList.contains('active-category')) {
        refs.products.innerHTML = '';
        refs.info.classList.add('hidden')
        return;
    }

    if (nextActiveCategory.nodeName === 'LI') {
        refs.products.innerHTML = '';
    }

    const currentCategory = nextActiveCategory.getAttribute('data-category');

    products.filter(prod => prod.category === currentCategory).forEach(prod => {
        const li = document.createElement('li');
        li.textContent = prod.name;
        li.setAttribute('data-product-id', prod.id);

        refs.products.appendChild(li);
    })
}



function openProductInfo (event) {
    hideActiveCategory(event);

    refs.info.classList.remove('hidden');

    //заповнення таблиці данних
    const currentProductId = event.target.getAttribute('data-product-id')
    const searchingProduct = products.find(prod => prod.id == currentProductId)

    tableRefs = {
        name: document.querySelector('.paste-name'),
        size: document.querySelector('.paste-size'),
        country: document.querySelector('.paste-produce'),
        year: document.querySelector('.paste-year'),
    }

    tableRefs.name.textContent = searchingProduct.name;
    tableRefs.size.textContent = searchingProduct.size;
    tableRefs.country.textContent = searchingProduct.country;
    tableRefs.year.textContent = searchingProduct.year;
}

function buyingAndClear () {
    alert('You buy a product!');

    refs.products.innerHTML = '';
    refs.info.classList.add('hidden');
    refs.categories.querySelector('.active-category').classList.remove('active-category');
}


refs.categories.addEventListener('click', openProductsList)
refs.products.addEventListener('click', openProductInfo)
refs.btn.addEventListener('click', buyingAndClear)
