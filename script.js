 /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

       const changeTitle = function () {
        const title= document.querySelector('h1')
        title.innerText = 'Nuovo titolo FS0924';
    
       }

       changeTitle()

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
      //  const addClassToTitle = function () {
      //   const title = document.getElementById('h1')
      //   title.classList.add('myHeading');
      //  }    
       
      //  addClassToTitle();
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
        //ci sono due div con i figli p da cambiare
       */

          const changePcontent = function () {
            const changeP = document.querySelectorAll("div p");
            for (let i = 0; i < changeP.length; i++) {
              changeP[i].innerText = "ciao a tutti!";
            }
          };
          changePcontent();
  
        
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
      //  const changeUrls = function () {
      //  const link = document.querySelectorAll("a:not(footer a)")
      //  for (let i = 0; link.length; i++) {
      //   link[i].href = "https://www.google.com"
      //  }
      // }
      //  changeUrls()
       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
     
       const addToTheSecond = function () {
        const secondList = document.getElementById("secondList")
        const li = document.createElement("li")
        li.innerText = 'Nueaksndk'
        secondList.appendChild(li)
    
       }
       addToTheSecond()
  
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
       const addParagraph = function () {
        const primoDiv = document.querySelectorAll('div') [0];
        const p = document.createElement ('p');
        p.innerHTML = " asdasdas"
        primoDiv.appendChild(p)
       }
       addParagraph()
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
       const hideFirstUl = function () {
        const ul = document.getElementById("firstList")
        ul.remove();
       }
       hideFirstUl()
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {
        const unicaList = document.getElementById("secondList");
        unicaList.style.background ="green"
       }
       paintItGreen()
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 
        const makeItClickable = function () {
          const title = document.querySelector("h1");
          title.onclick = function () {
            title.textContent = title.textContent.slice(0, -1);  // Rimuove l'ultima lettera
          };
        };
        
        makeItClickable();
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {
        const footerAlert = document.querySelector('footer')
        footerAlert.onclick = function () {
          alert('sdjknskjdfjsdn')
        } 
        // alert(URL)
       }
       revealFooterLink()
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
       const generateTable = function () {
        const tableArea = document.getElementById("tableArea");
        const table = document.createElement("table");
        const tr = document.createElement("tr");
        tr.innerText = "imgDiProva";
        const immagine = document.createElement ("th");
        immagine.innerText = "img";
        // const nome = document.createElement ("th");
        // nome.innerText = "nome";
        const quantità = document.createElement ("th");
        quantità.innerText = "quantità";
        const prezzo = document.createElement ("th");
        prezzo.innerText = "prezzo";

        const images = [
          "https://m.media-amazon.com/images/I/81yJf4K+L1L._AC_SY450_.jpg",
          "https://m.media-amazon.com/images/I/61MRTh9xotL._AC_SX679_.jpg",
          "https://www.tradeinn.com/f/13805/138054505/samsung-smartphone-galaxy-s21-5g-8gb-128gb-6.2.jpg",
          "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1661333885.70133010!500x500.png",
          "https://tomatosmartphone.it/wp-content/uploads/2022/06/EU-IN_Green.png",
        ];

        tr.appendChild(immagine);
        // tr.appendChild(nome);
        tr.appendChild(quantità);
        tr.appendChild(prezzo);
        table.appendChild(tr)

        for (let i = 0; i < images.length; i++) {
          const nuevaRiga = document.createElement("tr");
          const tdImgages = document.createElement("td");
          tdImgages.innerHTML = `<img src=${images[i]} alt ="tlf" height ="50" width"50" />`
          const tdProduct = document.createElement("td");
          tdProduct.innerText= "Telefoni"
          const tdQuantità = document.createElement("td");
          tdQuantità.innerText = Math.floor(Math.random()*50);
          const tdPrezzo = document.createElement("td");
          tdPrezzo.innerText = Math.floor(Math.random()*500) + "€";

          nuevaRiga.appendChild(tdImgages);
          nuevaRiga.appendChild(tdProduct);
          nuevaRiga.appendChild(tdQuantità);
          nuevaRiga.appendChild(tdPrezzo);
          table.appendChild(nuevaRiga)

        }
        tableArea.appendChild(table)
        
       }
       generateTable()
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {}
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {
        const images = document.querySelectorAll("img");
        for (let i = 0; i < images.length; i++) {
          images[i].style.display = "none";
        }
      };

      hideAllImages()
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {}