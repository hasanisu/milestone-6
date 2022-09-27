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
        <div class="card">
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

loadData();