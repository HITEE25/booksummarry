let home = document.getElementById("home");
let mybook = document.getElementById("mybook");
let genres = document.getElementById("genres");
let recommend = document.getElementById("recommend");
let give = document.getElementById("giveaway");
let newr = document.getElementById("newr");
let book1 = document.getElementsByClassName("book1");
let book2 = document.getElementsByClassName("book2");
let ask = document.getElementById("askauthor")
let people = document.getElementById("people");
let quotes = document.getElementById("quotes");
let art = document.getElementById("art1");
let biography = document.getElementById("biography");
let fiction = document.getElementById("fiction");
let horror = document.getElementById("horror");
let mystry = document.getElementById("mystry");
let non_fiction = document.getElementById("non_fiction");
let religion = document.getElementById("religion");
let romance = document.getElementById("romance");
let science = document.getElementById("science");
let sports = document.getElementById("sports");

const stars = document.querySelectorAll('#simple-rating span');
const ratingDisplay = document.getElementById('selected-rating');

let currentRating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    const selectedRating = parseInt(star.getAttribute('data-rating'));

    // If the same star is clicked again, remove the rating
    if (currentRating === selectedRating) {
      currentRating = 0;
      stars.forEach(s => s.classList.remove('selected'));
      ratingDisplay.textContent = `You rated: 0`;
    } else {
      currentRating = selectedRating;
      stars.forEach(s => s.classList.remove('selected'));
      for (let i = 0; i < selectedRating; i++) {
        stars[i].classList.add('selected');
      }
      ratingDisplay.textContent = `You rated: ${selectedRating}`;
    }
  });
});

home.addEventListener("click", function (e) {
  e.preventDefault(); // prevent default anchor behavior
  window.location.href = "index.html"; // or your actual home page URL
});

genres.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "genres.html";
});

recommend.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "recommend.html";
});

give.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "giveaways.html";
});

newr.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "newreleases.html";
});

mybook.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "mybook.html";
});

ask.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "askthea.html";
});

quotes.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "quotes.html";
});

people.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "people.html";
});

biography.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "biography.html";
});

fiction.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "fiction.html";
});

horror.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "horror.html";
});

mystry.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "mystry.html";
});

non_fiction.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "non_fiction.html";
});

religion.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "religion.html";
});

sports.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "sports.html";
});


science.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "science.html";
});

romance.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "romance.html";
});

const form = document.getElementById("signInForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please enter both fields");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }
  if (!email.endsWith('@gmail.com')) {
    alert("Please enter a valid Gmail address");
    return false;
  }

  // Redirect or log success
  alert("Login successful!");
  window.location.href = "index.html";
  return true;
});






