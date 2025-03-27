//* Begin | Images div creator
const iDC = {
    items: [
        {tb:1,  id: `masatata`,         name:'Maşatata',         src:'./img/mapGame/masatata.jpeg', welayat:'balkan'},
        {tb:7,  id: `amulGalasy`,       name:'Amul galasy',      src:'./img/mapGame/amulGalasy.jpeg', welayat:'lebap'},
        {tb:10, id: `merw`,             name:'Merw',             src:'./img/mapGame/merw.jpg', welayat:'mary'},
        {tb:6,  id: `dayahatyn`,        name:'Daýahatyn',        src:'./img/mapGame/dayahatyn.jpeg', welayat:'lebap'},
        {tb:15, id: `seyitJemaleddin`,  name:'Seýit Jemaleddin', src:'./img/mapGame/seyitJemaleddin.jpeg', welayat:'ahal'},
        {tb:4,  id: `ysmamytAta`,       name:'Ysmamyt ata',      src:'./img/mapGame/ysmamytAta.jpeg', welayat:'dashoguz'},
        {tb:12, id: `manebaba`,         name:'Mänebaba',         src:'./img/mapGame/manebaba.jpeg', welayat:'ahal'},
        {tb:8,  id: `gonurdepe`,        name:'Goňurdepe',        src:'./img/mapGame/gonurdepe.jpg', welayat:'mary'},
        {tb:14, id: `ulugdepe`,         name:'Ulugdepe',         src:'./img/mapGame/ulugdepe.jpeg', welayat:'ahal'},
        {tb:11, id: `sarahsGalasy`,     name:'Sarahs galasy',    src:'./img/mapGame/sarahsGalasy.jpeg', welayat:'ahal'},
        {tb:2,  id: `yzmyksir`,         name:'Yzmykşir',         src:'./img/mapGame/yzmyksir.jpeg', welayat:'dashoguz'},
        {tb:17, id: `dehistan`,         name:'Dehistan',         src:'./img/mapGame/dehistan.jpeg', welayat:'balkan'},
        {tb:3,  id: `koneurgench`,      name:'Köneürgenç',       src:'./img/mapGame/koneurgench.jpeg', welayat:'dashoguz'},
        {tb:9,  id: `astanababa`,       name:'Astanababa',       src:'./img/mapGame/astanababa.jpeg', welayat:'lebap'},
        {tb:13, id: `altyndepe`,        name:'Altyndepe',        src:'./img/mapGame/altyndepe.jpeg', welayat:'ahal'},
        {tb:5,  id: `aksaraydin`,       name:'Aksaraýdiň',       src:'./img/mapGame/aksaraydin.jpeg', welayat:'dashoguz'},
        {tb:16, id: `nusayGalasy`,      name:'Nusaý galasy',     src:'./img/mapGame/nusayGalasy.jpeg', welayat:'ahal'},
    ],
    imagesToChooseFrom: document.getElementById('imagesToChooseFrom'),
    iTiTC(item){
        //* For div
        const div = document.createElement("div");
        div.setAttribute("id", item.id);
        div.setAttribute("class", 'img');
        div.setAttribute("onclick", `clickedImage('${item.id}')`);
        //* For img
        const img = document.createElement("img");
        img.setAttribute("src", item.src);
        img.setAttribute("alt", item.name);
        img.setAttribute("width", "100%");
        //* For p
        const p = document.createElement("p");
        p.innerHTML = item.name;
        //* Appending to main imagesToChooseFrom
        this.imagesToChooseFrom.appendChild(div);
        div.appendChild(img);
        div.appendChild(p);
    }
}
iDC.items.forEach(iDC.iTiTC);
//* End | Images div creator

//* Begin | Place on map system
const balkanFloat = document.getElementById('balkan');
const maryFloat = document.getElementById('mary');
const ahalFloat = document.getElementById('ahal');
const lebapFloat = document.getElementById('lebap');
const dashoguzFloat = document.getElementById('dashoguz');
let currentImage = '';
let foundCounter = [];
function clickedImage(id){
    currentImage = `${id}`;
    balkanFloat.style.display = 'block';
    maryFloat.style.display = 'block';
    ahalFloat.style.display = 'block';
    lebapFloat.style.display = 'block';
    dashoguzFloat.style.display = 'block';
    document.getElementById('nameOfCurrent').innerHTML = `${sendTheFullName(id)}`;
};
let forMary = ['merw', 'gonurdepe'];
let forLebap = ['dayahatyn', 'amulGalasy', 'astanababa'];
let forBalkan = ['masatata', 'dehistan'];
let forDashoguz = ['yzmyksir','koneurgench','ysmamytAta','aksaraydin'];
let forAhal = ['sarahsGalasy', 'manebaba', 'altyndepe', 'ulugdepe', 'seyitJemaleddin', 'nusayGalasy'];
function checkIfCorrect(state){
    if(state === 'mary'){
        if(forMary.includes(currentImage)){
            correctSituation(currentImage, state);
        }
        else{
            wrongSituation(state);
        }
    }
    if(state === 'ahal'){
        if(forAhal.includes(currentImage)){
            correctSituation(currentImage, state);
        }
        else{
            wrongSituation(state);
        }
    }
    if(state === 'lebap'){
        if(forLebap.includes(currentImage)){
            correctSituation(currentImage, state);
        }
        else{
            wrongSituation(state);
        }
    }
    if(state === 'balkan'){
        if(forBalkan.includes(currentImage)){
            correctSituation(currentImage, state);
        }
        else{
            wrongSituation(state);
        }
    }
    if(state === 'dashoguz'){
        if(forDashoguz.includes(currentImage)){
            correctSituation(currentImage, state);
        }
        else{
            wrongSituation(state);
        }
    }
}
function correctSituation(imageName, state){
    document.getElementById(`${imageName}`).style.display = 'none';
    //* Parent 
    let parent = document.getElementById(`foundElementPlace${state}`);
    parent.style.display = 'block';
    //* Span | Child 
    let p = document.createElement('p');
    p.innerHTML = ` ${sendTheFullName(imageName)}`;
    p.style.textAlign = 'center';
    parent.appendChild(p);
    //* Hiding floating welayats 
    balkanFloat.style.display = 'none';
    maryFloat.style.display = 'none';
    ahalFloat.style.display = 'none';
    lebapFloat.style.display = 'none';
    dashoguzFloat.style.display = 'none';
    foundCounter.push(imageName);
    document.getElementById('counter').innerHTML = `${foundCounter.length}/${iDC.items.length}`;
    currentImage = '';
    document.getElementById('nameOfCurrent').innerHTML = ``;
    if(foundCounter.length === iDC.items.length){wonTheGame()};
}
function wonTheGame(){
    document.getElementById('firstRow').style.display = 'none';
    document.getElementById('counter').style.display = 'none';
    document.getElementById('introduction').style.display = 'none';
    document.getElementById('hiddenRow').style.display = 'flex';
}
function sendTheFullName(imageName){
    let answer = '';
    iDC.items.forEach(findTheFullName);
    function findTheFullName(){
        for(key of iDC.items){
            if(key.id === imageName){
                answer = key.name;
            }
        }
    }
    return answer;
}
function wrongSituation(state){
    document.getElementById(`${state}`).style.display = 'none';
    document.getElementById('wrongAlert').style.display = 'flex';
}
function removewrongAlert(){
    document.getElementById('wrongAlert').style.display = 'none';
}