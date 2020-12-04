const app = Vue.createApp({
    data() {
        return {
            brand: 'Vue Mastery',
            product: 'Boots',
            description: 'Feel the power of nature with our new sustainable boots',
            selectedVariant: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            cart: 0,
            url: 'https://vuejs.org/'
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeItem() {
            this.cart -= 1;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale';
            }
            return '';
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        emptyCart() {
            return this.cart == 0;
        }
    }
});