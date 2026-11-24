const firstBtn = document.getElementById('firstBtn');
const secondBtn = document.getElementById('secondBtn');
const imgContainer = document.getElementById('imgContainer');

// First button click: show second button
firstBtn.addEventListener('click', () => {
 const img = document.createElement('img');
  img.src = 'images/Sal.jpg'; // example image URL
  img.alt = 'Spawned Image';
  img.style.width = '200px';
  img.style.margin = '5px';
  imgContainer.appendChild(img);
  secondBtn.style.display = 'block';
});

// Second button click: spawn an image
secondBtn.addEventListener('click', () => {
  const img = document.createElement('img');
  img.src = 'images/Kanye.webp'; // example image URL
  img.alt = 'Spawned Image';
  img.style.width = '200px';
  img.style.margin = '5px';
  imgContainer.appendChild(img);
});