app.component('product-details', {
    props: {
        description: {
            type: String,
            required: true
        }
    },
    template:
    /* html */
    `<div>
        <p>{{ description }}</p>
        <ul>
        <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <ul>
        <li v-for="(size,index) in sizes" :key="index">{{ size }}</li>
        </ul>
    </div>`,
    data() {
        return {
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL']
        }
    }
})