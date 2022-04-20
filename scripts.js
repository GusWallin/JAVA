// 1 Redogör för följande begrepp och ge exempel (1 poäng: rimlig redogörelse, 1 poäng: relevant och korrekt exempel)
// Minst 8 poäng krävs för G (maxpoäng: 16)
// a) variabel - "behållare" för ett värde av olika datatyper (string int boolean etc.). Deklareras med hjälp av exempelvis let. Exempel: let nummer = 10;
// b) array - datastruktur i form av en "lista" där varje element kan refereras med index. exempel : let lista = [1,2,3,4]. För att få fram första elementet: lista[0] där "0" anger idex i array.
// c) funktion
// d) string, integer, boolean - Datatyper, string är text: "string", integer är heltal: 10, boolean är true eller false.
// e) if och else - om och eller för att kunna göra villkor i kod. t.ex. om (x<10){gör något} annars{gör detta}. kan även utökas till flera vilkor genom att lägga till "else if" satser.
// f) for - loop som upprepar kod tills dess angivna slut har nåtts. t.ex. for (x=1 to 10) {gör något} - uprepar denna kod 10ggr. Detta går även att applicera i arrayer för att gå igenom alla element: for (each x in array) {array[x] +1}
// g) length - längden på något, exempelvis antal element i en array; array.letht? eller längded på en string string.legth som då ger antal tecken.
// h) skillnaden mellan document.getElementById och document.getElementsByClassName

// Färdigställ följande funktioner
// Minst fyra av dessa måste fungera för G

function swap_text() {
  let input_text = document.getElementById("input_text").value;
  console.log(input_text);
  let tags = document.getElementById("text").getElementsByTagName("span");

  for (let tag of tags) {
    tag.innerText = input_text;
  }

  document.getElementById("text").innerHTML = document
    .getElementById("text")
    .innerHTML.replaceAll("robotic mower", input_text);
}

function swap_color_and_font() {
  let fontcolor = document.getElementById("font_color").value;
  let fontstyle = document.getElementById("font_family").value;
  console.log(fontstyle);
  let titles = document.querySelectorAll("h2, h1, title");

  for (let t of titles) {
    t.style.color = fontcolor;
    t.style.fontFamily = fontstyle;
  }
}

function multiply() {
  let number1 = document.getElementById("number_1").value;
  let number2 = document.getElementById("number_2").value;
  console.log(typeof number1);

  if (
    Number(number1) < 1000 &&
    number2 < 1000 &&
    number1 >= 0 &&
    number2 >= 0
  ) {
    document.getElementById("result").innerText = number1 * number2;
  } else {
    document.getElementById("result").innerText = "felaktiga nummer i rutorna";
  }
}

function count_chars_and_words() {
  let text = document.getElementById("text_count").value;

  //let characters = text.length;
  //let words = text;

  document.getElementById("char_count").innerText = text.length;
  document.getElementById("word_count").innerText = text.split(" ").length - 1;
}

function convert_to_list() {
  let list = document.getElementById("csv_text").value;
  console.log(list);
  let split_list = list.split(",");
  console.log(split_list);

  let i = 1;
  for (let split of split_list) {
    if (i == 1) {
      console.log("Första");
      console.log(split);
      document.getElementById("converted_list").innerHTML =
        "<ul><li>" + split + "</li>";
    } else if (i < split_list.length - 1) {
      console.log("andra");
      document.getElementById("converted_list").innerHTML +=
        "<li>" + split + "</li>";
    } else {
      console.log("sista");
      document.getElementById("converted_list").innerHTML +=
        "<li>" + split + "</li></ul>";
    }
    i++;
  }
}

function converter() {
  // (F - 32) / 1.8 = Celsius
  // cup * 0.236 = liter
  // lb * 0.454 = kg

  let value = parseInt(document.getElementById("to_convert").value);
  let unit = document.getElementById("unit").value;
  console.log(value);

  if (isNaN(value)) {
    alert("Not a number, try again");
    return;
  }

  switch (unit) {
    case "F":
      document.getElementById("converted").value = (value - 32) / 1.8;
      break;

    case "cup":
      if (value <= 0) {
        alert("cannot convert negative volumes, try again");
        return;
      } else {
        document.getElementById("converted").value = value * 0.236;
      }
      break;

    case "lb":
      document.getElementById("converted").value = value * 0.454;
      break;
  }
}

// Skapa funktioner som fungerar med rutorna "Åtta frukter" eller "Månader"
// Minst en av dessa måste fungera för G

function fruits() {
  document.getElementById("fruits").innerHTML = ""; // clear tidigare knapptryck.. annars läggs bara en ny lista till om och om igen.
  console.log("klick");
  let fruits = [
    "apples",
    "oranges",
    "mango",
    "fruit2",
    "fruit3",
    "fruit4",
    "fruit5",
    "fruit6",
  ];
  console.log(fruits);

  for (let fruit of fruits) {
    //kan även göras med append list items till dOM strukturen. kolla föreläsningen.

    document.getElementById("fruits").innerHTML += "<li>" + fruit + "</li>";
  }
}

function get_month() {
  console.log("months initiated");
  let month = document.getElementById("month_number").value;
  console.log(month);

  switch (month) {
    case "1":
      document.getElementById("month").value = "januari";
      break;

    case "2":
      document.getElementById("month").value = "feb";
      break;
  }
}
// Åtta frukter: Skapa en array med 8 strängvärden (8 fruktnamn).
// Generera en HTML-lista (ol eller ul) med ett script där varje frukt placeras i ett li-element

// Månader: Skapa en array med årets månader. När en användare väljer ett nummer från listan ska motsvarande månad skrivas ut.
// Använd en array på formen ["Januari", "Februari", "Mars", ...]
// Notera att arrayens index börjar på 0. Om 1 väljs ska alltså inte Februari skrivas ut.
