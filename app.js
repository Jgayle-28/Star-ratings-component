// Initial Ratings
const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  phillips: 4.1
};

// Total stars
const starsTotal = 5;

// Run getRatings when DOM loads
document.addEventListener("DOMContentLoaded", getRatings);

// Form Elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Initialize product
let product;

// Product select change event listener
productSelect.addEventListener('change', (e) => {
  product = e.target.value;
  // Enable rating control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

// Rating Control change
ratingControl.addEventListener('blur', (e) =>{
  const rating = e.target.value;

  // Make sure 5 or under
  if(rating > 5 ){
    alert('Please rate 1 - 5');
    return;
  }

  // Change the rating
  ratings[product] = rating;
  getRatings();
});


// Get Ratings
// to get the key just pass in rating
// To get the value pass in theobject and the iteration it is on "ratings[rating]"
function getRatings() {
  for (let rating in ratings) {
    // Get % value
    const starPercentage = (ratings[rating] / starsTotal ) * 100;
    // Round percentage to nearest ten
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    // Set width of stars-inner to %
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

    // Add number rating
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];

  }
}
