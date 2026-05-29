const homeContainer=document.getElementById("home-trips");

if(homeContainer){
    const trips=JSON.parse(localStorage.getItem("trips"))|| [];
    trips.slice(0,3).forEach(trip=>{
        const card=document.createElement("div");
        card.classList.add("trip-card");

        card.innerHTML= `
        <img src="${trip.img}" class="card-img-top">
        <div class="card-body">

        <h3>${trip.name}</h3>
        <p>Tarih:${trip.date}</p>
        <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-warning">
                 Detaylar
            </button>
            <button class="remove-btn" onclick="removeTrip(${index})">
                Sil
            </button>
        </div>
    </div>
`;
        
         homeContainer.appendChild(card);
    });
}