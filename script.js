let filterarray = [];

let galleryarray = [
    {
        id: 1,
        name: "Sherlock Holmes",
        src: "https://res.cloudinary.com/dm5tgfpr3/image/upload/v1701478666/833a3c58750420ca4d891a256c280d8d_bg9qyr.jpg",
        desc: "Robert Downey Jr. as Sherlock Holmes, a bohemian scientist and eccentric detective-for-hire who becomes a wanted fugitive in his hunt for Lord Blackwood while constantly being followed by the presence of Professor Moriarty."
    },
    {
        id: 2,
        name: "Dr. John Watson",
        src: "https://res.cloudinary.com/dm5tgfpr3/image/upload/v1701477765/a10802d29490f575781556d581a21c2b_nfvcj7.jpg",
        desc: "Jude Law as Dr. John Watson, Holmes' companion and close friend who is also a surgeon and a veteran of the Second Afghan War."
    },
    {
        id: 3,
        name: "Lord Henry Blackwood",
        src: "https://res.cloudinary.com/dm5tgfpr3/image/upload/v1701460893/d6893d8ce939e05df624f4e4aeda9b02_trbmgi.jpg",
        desc: "Mark Strong as Lord Henry Blackwood, an aristocratic serial killer dabbling in the occult to compel others to do his bidding. Having returned after his execution, Blackwood concocts a plan to gain control of Britain. "
    },
    {
        id: 4,
        name: "Irene Adle",
        src: "https://res.cloudinary.com/dm5tgfpr3/image/upload/v1701460893/846281ce8c7157d4cf11cb35e91966f9_kanyz2.jpg",
        desc: "Rachel McAdams as Irene Adler, an American femme fatale from New Jersey who outwitted Holmes twice, as chronicled in Doyle's story A Scandal in Bohemia."
    },
    {
        id: 5,
        name: "Mary Morstan",
        src: "https://res.cloudinary.com/dm5tgfpr3/image/upload/v1701460893/af6393c3e2106b2e82b2231c7a67385c_tfy0vo.jpg",
        desc: "Kelly Reilly as Mary Morstan, a governess whom Watson wishes to marry, causing a conflict with Holmes."
    },
];

function showgallery(currarray){
    for(var i=0;i<currarray.length;i++){
        document.getElementById("card").innerHTML += `
        <div class= "col-md-4 m-3">
        <div class= "card p-3">
            <img src="${currarray[i].src}" alt="${currarray[i].name}" class="card-img-top">
            <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
            <p class="text-center">${currarray[i].desc}</p>
        </div>
        </div>
        `
    }
}

function filterData(){
    var inputdata = document.getElementById("myinput").value.toLowerCase();
    filterarray = galleryarray.filter(data => data.name.toLowerCase().includes(inputdata));

    if(filterarray.length == 0){
        document.getElementById("para").style.display = "";
    } else {
        document.getElementById("para").style.display = "none";
    }

    document.getElementById("card").innerHTML = "";
    showgallery(filterarray);
}

filterData();

