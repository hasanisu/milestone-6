const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = photos =>{
    console.log(photos);
    const photosArea = document.getElementById('photo-area');
    photos.forEach ( photo=>{
        console.log(photo);
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('col');
        photoDiv.innerHTML=`
        <div onclick="loadingData(${photo.id})" class="card">
        <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${photo.title}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `
        photosArea.appendChild(photoDiv);
    })
  
    
}
const loadingData = (id) =>{
  // console.log('get the id', id);
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(data => displayingData(data))
}

const displayingData = photo =>{
  const detailsArea = document.getElementById('details-area');
  detailsArea.innerHTML='';
  const cretDiv = document.createElement('div');
  cretDiv.classList.add('card');
  cretDiv.innerHTML=`
            <img src="${photo.url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${photo.title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
  `
  detailsArea.appendChild(cretDiv);
}

loadData();