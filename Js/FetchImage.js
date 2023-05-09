console.log("Vi er i fetchImage fra egen database")

const IMAGE_REST_API = 'http://localhost:9090/image/info{name}';
class APIService {
    getImage(){
        return fetch(IMAGE_REST_API,{
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            'credentials': 'same-origin'
        })
            .then(res => res.json());
    }

}

export default new APIService();



/*
const container = document.getElementById('image.container');

fetch('http://localhost:9090/{name}')
 .then(response => response.json())
 .then(data => {
  data.forEach(imageData => {
   const imageUrl = URL.createObjectURL(imageData);
   const img =document.createElement('img');
    img.src = imageUrl;
    container.appendChild(img);
    });
    });

 */