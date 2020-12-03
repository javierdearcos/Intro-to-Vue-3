const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Boots',
            description: 'Feel the power of nature with our new sustainable boots',
            image: './assets/images/socks_green.jpg',
            url: 'https://vuejs.org/',
            inventory: 5,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeItem() {
            this.cart -= 1;
        },
        updateImage(variantImage) {
            this.image = variantImage;
        }
    }
});