const app = Vue.createApp({
    data() {
        return {
            product: 'Boots',
            description: 'Feel the power of nature with our new sustainable boots',
            image: './assets/images/socks_green.jpg',
            url: 'https://vuejs.org/',
            inventory: 5,
            onSale: true
        }
    }
});