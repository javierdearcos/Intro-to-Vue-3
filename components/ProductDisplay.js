app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /* html */
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :class="{ 'out-of-stock-img': !inStock }" :src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-show="onSale">{{ sale }}</p>
          <p>Shipping: {{ shipping }}</p>
          <p v-if="inStock > 10">In Stock</p>
          <p v-else-if="inStock > 0">Almost sold out!</p>
          <p v-else>Out of Stock</p>
          <product-details :description="description"></product-details>
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
            @mouseover="updateVariant(index)">
          </div>
          <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            @click="addToCart">
            Add to Cart
          </button>
          <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            @click="removeFromCart">
            Remove Item
          </button>
        </div>
      </div>
    </div>`,
    data() {
        return {
            brand: 'Vue Mastery',
            product: 'Boots',
            description: 'Feel the power of nature with our new sustainable boots',
            selectedVariant: 0,
            onSale: true,
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ]
        }
    },
    methods: {
        updateVariant(index) {
            this.selectedVariant = index;
        },
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
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
        shipping() {
            if (this.premium) {
                return 'Free';
            }
            return '2.99';
        }
    }
})