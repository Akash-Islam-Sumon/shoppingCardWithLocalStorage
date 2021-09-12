const addToCard = () => {
    const inputTex = document.getElementById('product-name');
    const name = inputTex.value;
    if (!name) {
        return;
    }
    displayProducts(name)
    addLocalStorageProducts(name)


    inputTex.value = '';
};
const displayProducts = (name) => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
};

const getCard = () => {
    let cardobj;
    const card = localStorage.getItem('card');
    if (card) {
        cardobj = JSON.parse(card)
    } else {
        cardobj = {};
    }
    return cardobj;
};

const addLocalStorageProducts = (name) => {
    const card = getCard()
    if (card[name]) {
        card[name] = card[name] + 1;
    } else {
        card[name] = 1;
    }

    const cardStr = JSON.stringify(card)
    localStorage.setItem('card', cardStr);
};

const displayFromStorage = () => {
    const cards = getCard();
    for (const name in cards) {
        displayProducts(name);
    }
};
const pueses = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('card')
}
displayFromStorage();