const form=document.getElementById('add-trip-form');
const container=document.getElementById('trips-container');

window.onload=()=>{
    const trips=JSON.parse(localStorage.getItem('trips')) || [];
    trips.forEach(trip=>createCard(trip));

};

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name=document.getElementById('trip-name').value;
    const date=document.getElementById('trip-date').value;
    const img=document.getElementById('trip-img').value;
    const type=document.getElementById('trip-type').value;
    
    const trip={name,date,img,type};
    

    let trips=JSON.parse(localStorage.getItem('trips')) || [];
    trips.push(trip);
    localStorage.setItem('trips',JSON.stringify(trips));

    createCard(trip);
    form.reset();
});

function createCard(trip){
    const card=document.createElement('div');
    card.className="col-md-4";

    card.innerHTML = `
    <div class="trip-card">
        <img src="${trip.img}" alt="${trip.name}" class="card-img-top">
        <div class="card-body">
            <h3>${trip.name}</h3>
            <p>Tarih: ${trip.date}</p>
            <div class="d-flex justify-content-center gap-2">
                <a href="trip-detail.html" class="btn btn-warning">
                Detaylar
                </a>
                <button class="remove-btn">
                Sil
                </button>
            </div>
        </div>
    </div>
    `;
    card.dataset.type=trip.type;
    card.querySelector('.detail-btn').addEventListener('click',()=>{
        localStorage.setItem('SelectedTrip',JSON.stringify(trip));
    });


    card.querySelector('.remove-btn').addEventListener('click',()=>{
        card.remove();
        let trips=JSON.parse(localStorage.getItem('trips')) || [];
        trips=trips.filter(t=>t.name !== trip.name);
        localStorage.setItem('trips',JSON.stringify(trips));

    });
    container.appendChild(card);
}
function filterTrips(type){
    const cards=document.querySelectorAll(".trip-card");
    cards.forEach(card=>{
        if (type==="all"){
            card.style.display="block";
        }
        else {if(
            card.dataset.type===type
        ){
            card.style.display="block";

        }
        else {
            card.style.display="none";
        }
        }
    });
}