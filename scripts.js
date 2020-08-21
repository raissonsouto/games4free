fetch('http://localhost:5000/')
    .then(res => res.json())
    .then(res =>{
        document.getElementById('grid').innerHTML += res.title
        document.getElementById('grid').innerHTML += `
        <img src="data:image/jpeg;base64,${res.img}" alt="base64 test">
        `
})

 