const app = Vue.createApp({
    data() {
        return {
            product: 'Boots',
            description: 'Feel the power of nature with our new sustainable boots',
            image: './assets/images/socks_green.jpg',
            url: 'https://vuejs.org/',
            inventory: 5,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue'}
            ]
        }
    }
});