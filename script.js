document.open();

window.onload = function() {
    let pojistenci = localStorage.getItem('pojistenci');
    if (!pojistenci) {
      pojistenci = [];
      localStorage.setItem('pojistenci', JSON.stringify(pojistenci));
    } else {
      pojistenci = JSON.parse(pojistenci);
    }
  
    let sablona = "";
    let prepinac = 0;
  
    for (let i = 0; i < pojistenci.length; i++) {
      let jmeno = pojistenci[i].jmeno;
      let prijmeni = pojistenci[i].prijmeni;
      let vek = pojistenci[i].vek;
      let telefon = pojistenci[i].telefon;
  
      if (prepinac === 0) {
        sablona += `
          <tr>
              <td>${jmeno} ${prijmeni}</td>
              <td>${vek}</td>
              <td>${telefon}</td>
          </tr>`;
        prepinac = 1;
      } else {
        sablona += `
          <tr class='sudy'>
              <td>${jmeno} ${prijmeni}</td>
              <td>${vek}</td>
              <td>${telefon}</td>
          </tr>`;
        prepinac = 0;
      }
    }
  
    tabulka.innerHTML += sablona;
  };

let pridejStiskem = document.querySelector('#btn');
let vymazData = document.querySelector('#btn-delete');
let tabulka = document.querySelector('#tab');

let vlozitJmeno = document.querySelector('#jmeno');
let vlozitPrijmeni = document.querySelector('#prijmeni');
let vlozitVek = document.querySelector('#vek');
let vlozitTelefon = document.querySelector('#telefon');
let h3 = document.querySelector('h3');
let posledniPojistenec = localStorage.getItem('ulozPojistence')

pridejStiskem.addEventListener('click', function (event) {
    event.preventDefault();

    let pojistenec = {
    jmeno: vlozitJmeno.value,
    prijmeni: vlozitPrijmeni.value,
    vek: vlozitVek.value,
    telefon: vlozitTelefon.value,
    };
    
    let pojistenci = localStorage.getItem('pojistenci');

    pojistenci = JSON.parse(pojistenci);
    
    pojistenci.push(pojistenec);
    localStorage.setItem('pojistenci', JSON.stringify(pojistenci));
        
    location.reload();

    prepinac = prepinac === 0? 1:0;
    let jmeno = vlozitJmeno.value;
    let prijmeni = vlozitPrijmeni.value;
    let vek = vlozitVek.value;
    let telefon = vlozitTelefon.value;
    let sablona = '';

    if(prepinac === 1) {
        sablona = `
        <tr>
            <td>${jmeno} ${prijmeni}</td>
            <td>${vek}</td>
            <td>${telefon}</td>
        </tr>`;
    } else {
        sablona = `
        <tr class='sudy'>
            <td>${jmeno} ${prijmeni}</td>
            <td>${vek}</td>
            <td>${telefon}</td>
        </tr>`;
    }

    tabulka.innerHTML += sablona;

    vlozitJmeno.value = '';
    vlozitPrijmeni.value = '';
    vlozitVek.value = '';
    vlozitTelefon.value = '';   

});

vymazData.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
});


