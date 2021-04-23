/*
  Version: 0.0.1
  Fake Name Generator, copyright (c) by Michael Schwartz
  Distributed under the MIT license: https://github.com/michaelsboost/Fake-Name-Generator/blob/gh-pages/LICENSE
  This is Fake Credit Card Generator (https://michaelsboost.github.io/Fake-Name-Generator), A simple app that generates a fake name.
*/

var output = document.getElementById('output');
var maleSex     = '<svg viewBox="0 0 384 512"><path d="M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12zM144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>';
var femaleSex   = '<svg viewBox="0 0 288 512"><path d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V368H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.5 112-71.9 112-140.4zm-224 0c0-44.1 35.9-80 80-80s80 35.9 80 80-35.9 80-80 80-80-35.9-80-80z"></path></svg>';
var firstMArr   = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Daniel", "Matthew", "Anthony", "Donald", "Mark", "Paul", "Steven", "Andrew", "Kenneth", "Joshua", "Kevin", "Brian", "George", "Edward", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan", "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon", "Benjamin", "Samuel", "Frank", "Gregory", "Raymond", "Alexander", "Patrick", "Jack", "Dennis", "Jerry", "Tyler", "Aaron", "Jose", "Henry", "Adam", "Douglas", "Nathan", "Peter", "Zachary", "Kyle", "Walter", "Harold", "Jeremy", "Ethan", "Carl", "Keith", "Roger", "Gerald", "Christian", "Terry", "Sean", "Arthur", "Austin", "Noah", "Lawrence", "Jesse", "Joe", "Bryan", "Billy", "Jordan", "Albert", "Dylan", "Bruce", "Willie", "Gabriel", "Alan", "Juan", "Logan", "Wayne", "Ralph", "Roy", "Eugene", "Randy", "Vincent", "Russell", "Louis", "Philip", "Bobby", "Johnny", "Bradley"];
var firstFArr   = ["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen", "Nancy", "Lisa", "Margaret", "Betty", "Sandra", "Ashley", "Dorothy", "Kimberly", "Emily", "Donna", "Michelle", "Carol", "Amanda", "Melissa", "Deborah", "Stephanie", "Rebecca", "Laura", "Sharon", "Cynthia", "Kathleen", "Amy", "Shirley", "Angela", "Helen", "Anna", "Brenda", "Pamela", "Nicole", "Samantha", "Katherine", "Emma", "Ruth", "Christine", "Catherine", "Debra", "Rachel", "Carolyn", "Janet", "Virginia", "Maria", "Heather", "Diane", "Julie", "Joyce", "Victoria", "Kelly", "Christina", "Lauren", "Joan", "Evelyn", "Olivia", "Judith", "Megan", "Cheryl", "Martha", "Andrea", "Frances", "Hannah", "Jacqueline", "Ann", "Gloria", "Jean", "Kathryn", "Alice", "Teresa", "Sara", "Janice", "Doris", "Madison", "Julia", "Grace", "Judy", "Abigail", "Marie", "Denise", "Beverly", "Amber", "Theresa", "Marilyn", "Danielle", "Diana", "Brittany", "Natalie", "Sophia", "Rose", "Isabella", "Alexis", "Kayla", "Charlotte"];
var lastArr     = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzales", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez", "Phillips", "Welsh", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris", "Morales", "Murphy", "Irish", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennet", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez"];

// generate a random number
function randomNumber(n) {
  return Math.floor(Math.random() * n);
}

// generate a random first and last name (male)
function genMName() {
  var rNum1 = randomNumber(firstMArr.length);
  var rNum2 = randomNumber(lastArr.length);
  mName = firstMArr[rNum1] + " " + lastArr[rNum2];
  output.textContent = mName;
}
// generate a random first and last name (female)
function genFName() {
  var rNum1 = randomNumber(firstFArr.length);
  var rNum2 = randomNumber(lastArr.length);
  fName = firstFArr[rNum1] + " " + lastArr[rNum2];
  output.textContent = fName;
}

// give icons a random Color
function randomColor() {
  document.querySelector('.sex').style.fill = 'hsl('+ Math.random() * 260 +', 100%, 70%)';
}

// render new name onclick
var detectSex = document.querySelector("[data-gender]");
detectSex.onclick = function() {
  if (this.getAttribute('data-gender') === 'male') {
    this.setAttribute('data-gender', 'female');
    this.innerHTML = femaleSex;

    // generate a female name
    genFName();
  } else {
    this.setAttribute('data-gender', 'male');
    this.innerHTML = maleSex;
    
    // give icons a random Color
    randomColor();

    // generate a male name
    genMName();
  }
}
detectSex.click();