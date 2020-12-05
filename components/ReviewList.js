app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /* html */
    `<div class="review-container">
      <h3>Reviews:</h3>
      <ul>
        <li v-for="review in reviews">
          {{ review.name }} gives {{ review.rating }} stars
          <br />
          "{{ review.review }}"
          <br />
          Recommended: {{ review.recommend }}
        </li>
      </ul>
    </div>`
})