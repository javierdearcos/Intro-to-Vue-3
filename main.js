const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            url: 'https://vuejs.org/'
        }
    },
    methods: {
        addToCart(id) {
            this.cart.push(id);
        },
        removeFromCart(id) {
            const index = this.cart.indexOf(id);
            if (index > -1) {
                this.cart.splice(index, 1)
            }
        }
    }
});