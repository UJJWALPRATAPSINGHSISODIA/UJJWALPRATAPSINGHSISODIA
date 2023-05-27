
/* Dictionary Script starts */

const dictionary_url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const dictionary_result = document.getElementById("dictionary-result");
const dictionary_btn = document.getElementById("dictionary-search-btn");

dictionary_btn.addEventListener("click", () => {
    let dictionary_inpWord = document.getElementById("dictionary-inp-word").value;
    fetch(`${dictionary_url}${dictionary_inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            dictionary_result.innerHTML = `
            <div class="dictionary-word">
                    <h3>${dictionary_inpWord}</h3>
                </div>
                <div class="dictionary-details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="dictionary-word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="dictionary-word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
        })
        .catch(() => {
            dictionary_result.innerHTML = `<h3 class="dictionary-error">Couldn't Find The Word</h3>`;
        });
});

/* Dictionary Script ends */