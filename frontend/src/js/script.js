// Initialisation quand la page est prête
document.addEventListener("DOMContentLoaded", function () {
  feather.replace();

  // Création de la carte centrée sur Paris
  const map = initMap();

  // --- Données brute en attendant l’API ---
  const schools = [
    {
      name: "Lycée Louis-le-Grand",
      lat: 48.8486,
      lng: 2.3444,
      type: "Lycée",
      status: "Public",
    },
    {
      name: "Collège Stanislas",
      lat: 48.8462,
      lng: 2.3305,
      type: "Collège",
      status: "Privé",
    },
    {
      name: "École Alsacienne",
      lat: 48.8423,
      lng: 2.3315,
      type: "École",
      status: "Privé",
    },
  ];

  // Affichage des écoles sur la carte
  renderSchools(map, schools);
});

// Initialiser la carte
function initMap() {
  const map = L.map("map").setView([48.8566, 2.3522], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  return map;
}

// Afficher les écoles
function renderSchools(map, schools) {
  schools.forEach((school) => {
    L.marker([school.lat, school.lng]).addTo(map).bindPopup(`
        <div class="p-2">
          <h3 class="font-bold text-lg">${school.name}</h3>
          <p class="text-gray-600">${school.type} - ${school.status}</p>
          <button onclick="location.href='#contact'" 
            class="mt-2 bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition">
            Contacter
          </button>
        </div>
      `);
  });
}
