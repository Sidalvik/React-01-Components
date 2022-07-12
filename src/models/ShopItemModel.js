import PropTypes from 'prop-types';

class ShopItemModel {
    constructor(brand, title, description, descriptionFull, price, currency) {
        this.brand = brand; //  — название производителя товара,
        this.title = title; //   — название товара,
        this.description = description; //  — краткое описание товара,
        this.descriptionFull = descriptionFull; //  — подробное описание товара,
        this.price = +Number(price).toFixed(2); //  — цена товара,
        this.currency = currency;   //  — валюта товара.
    }
}


ShopItemModel.propTypes = {
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}

export default ShopItemModel;