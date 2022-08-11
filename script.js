/* .js files add interaction to your website */
//Facts from https://dworakpeck.usc.edu/news/15-mental-health-facts-you-should-know
//List of facts about mental health
var factList = [
  "One in five Americans has experienced some form of mental illness, with one in 25 experiencing serious mental illness, such as bipolar disorder or schizophrenia.",
  "Suicide accounts for over 800,000 deaths globally each year, with over 41,000 in the U.S. alone. It is the second leading cause of death worldwide for 15-29 year olds.",
  "The rate of mental health disorders doubles for those who have been to war or lived through a major disaster.",
  "People with a mental health issue are generally nonviolent. In fact, only 3-5% of violent acts can be attributed to people with a serious mental illness.",
  "Many people do not seek treatment for mental illness due to the associated stigma. Only 44% of adults with diagnosable mental illnesses receive treatment.",
  "Members of the LGBTQ community are twice as likely as straight individuals to have a mental health condition.",
  "70-90% of people who seek proper treatment for mental health disorders witness a significant reduction in symptoms.",
  "Most people living with mental illness lead productive lives despite their challenges.",
  "Treatment for mental health problems doesn’t only consist of prescribed or OTC medication. Therapy, yoga, meditation and holistic treatments can all help to assuage symptoms."
];

//Retrieve elements by ID
var fact = document.getElementById("fact");
var myButton = document.getElementById("button");

//Count the number of times the generate button is clicked
var count = 0;

//Check if the generate button was clicked
myButton.addEventListener("click", displayFact);


//Runs if the generate button is clicked
//Purpose: Change the <p> tag "Generate a fact about mental health!" to a mental health fact when the generate button is clicked
function displayFact() {
  fact.innerHTML = factList[count];
  count += 1;
//Checks if the last item in the array has been displayed and if so, resets count to 0
  if (count == factList.length) {
    count = 0;
  }
}
