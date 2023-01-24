
const searchStr = document.location.search;

const queries = new URLSearchParams(searchStr);

const topText = queries.get('top_text'); 
const bottom = queries.get('bot_text'); 
const img = queries.get('img_upload'); 

console.log(topText);
console.log(bottom);
console.log(img);

const insertQueries = () => {
    document.getElementById('top_text')
    .innerText = topText;

    document.getElementById('bottom_text')
    .innerText = bottom;

    document.querySelector('.meme')
    .style.backgroundImage = `url(${img})`;

}

