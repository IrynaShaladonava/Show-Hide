document.getElementById('showImagesButton').addEventListener('click', toggleImages); // show/hide pictures
document.getElementById('swapImagesButton').addEventListener('click', shuffleImages);//shuffle pictures

function toggleImages(){ //ф-ция для показа и скрытия картинок
  var imgContainer=document.getElementById('imgContainer'); //получаем эл-т контейнера с изображениями
  imgContainer.style.display=(imgContainer.style.display==='none' || imgContainer.style.display==='')?'block':'none';//если конт видим, скрываем его, если не видим отображаем
  if(imgContainer.style.display==='block'){ 
    showImages();
  }
}

function showImages(){  //функция для показа картнок
  var imagePaths = [ //указываю пути к картинкам
    'img/8fcd8947d0f85ccd912d326e7d65e79c.jpeg',
    'img/1662113934_33-sportishka-com-p-krasivaya-priroda-gori-krasivo-39.jpg',
    'img/1662113971_28-sportishka-com-p-krasivaya-priroda-gori-krasivo-34.jpg',
    'img/1667568988_53-sportishka-com-p-samie-krasivie-vidi-prirodi-oboi-59.jpg',
    'img/1667569002_8-sportishka-com-p-samie-krasivie-vidi-prirodi-oboi-8.jpg',
    'img/e492830eb852edbef6c88838bb08e377.jpeg',
    'img/nastol.com.ua-182343.jpg',
    'img/ozero-gory-ostrov-vosxod.jpg'
  ];
  var imgContainer = document.getElementById('imgContainer');
    imgContainer.innerHTML='';
    for (var i = 0; i<imagePaths.length; i++){
      var image = document.createElement('img');
      image.src = imagePaths[i];
      image.style.maxWidth="100%";
      image.style.height="auto";
      image.style.width="20%";
      image.style.display='inline-block';
      image.style.boxSizing="border-box";
      image.style.margin="5px";
      imgContainer.appendChild(image);
  }
};

function shuffleImages(){ //функция для смены порядка фото в случайном порядке
  var images = document.querySelectorAll('#imgContainer img');
  images=Array.from(images);
  var shuffledImages = shuffleArray(images);
  var imgContainer=document.getElementById('imgContainer');
  imgContainer.innerHTML='';
  shuffledImages.forEach(function(image){
    imgContainer.appendChild(image);
  })
}
function shuffleArray(array){
  for(var i=array.length-1; i>0;i--){
    var j = Math.floor(Math.random()*(i+1));
    var temp = array[i];
    array[i] = array[j];
    array[j]=temp;
  }
  return array;
}