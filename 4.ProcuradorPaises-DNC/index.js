function Procurar() {
  let name = document.getElementById("inputCountry").value;

  let apiAdress = `https://restcountries.com/v3.1/name/${name}?fullText=true`;

  fetch(apiAdress)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      let population = data[0].population;
      let countryName = data[0].name.common;
      let capital = data[0].capital[0];
      let continent = data[0].continents[0];
      let flagImg = data[0].flags.svg;
      let flagAlt = data[0].flags.alt;

      document.getElementById("bandeira").src = flagImg;
      document.getElementById("bandeira").alt = flagAlt;
      document.getElementById("pais").innerText = countryName;
      document.getElementById("capital").innerText = capital;
      document.getElementById("continent").innerText = continent;
      document.getElementById("population").innerText =
        new Intl.NumberFormat().format(population);

      document.getElementById("card").classList.remove("d-none");
    });
}
