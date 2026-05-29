window.onload= () => {
    const trip=JSON.parse(localStorage.getItem('selectedTrip'));
    const container=document.getElementById('trip-detail');
    if (trip){
        container.innerHTML= `
        <img src="${trip.img}" width="300">
        <h2>${trip.name}</h2>
        <p>Tarih:${trip.date}</p>
        `;
    }
};