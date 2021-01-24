const more = document.getElementById("more");
 
 fetch("https://rickandmortyapi.com/api/character/")
    .then((res)=>res.json())
    .then((data)=>Cards(data.results));


    function Cards(data){
        const cardContainer = document.getElementById('card-group')
        console.log(data)
        data.forEach(char=>{
            cardContainer.innerHTML=
            cardContainer.innerHTML+

            `<div class="card">
            <img src=${char.image} class="card-img-top"></img>
                <div class="card-stats">
                 <h1>${char.name}</h1>
                 <br>
                 <span>${char.status}</span> - <span>${char.species}</span>
                 <p style="font-size:17px">Last know location:<br> <span>${char.location.name}</span></p>
                 <br>
                 <p style="font-size:17px">First seen in:<br> <span>${char.origin.name}</span></p>
                </div>
            </div>
            `
        })
        if (data.next || data.prev) {
            more.innerHTML = `
                 ${data.prev ? `<button class="btn" onclick="getMoreChars('${data.prev}')">Prev</button>`: ""}
                 ${data.next? `<button class="btn" onclick="getMoreChars('${data.next}')">Next</button>`: ""}`;
        } else {
            more.innerHTML = "";
        }
    }

    async function getMoreChars(url) {
        const res = await fetch(`${url}`);
        const data = await res.json();
        console.log('data', data);
        
    };






