const returnBack = document.querySelector(".return-back");

returnBack.addEventListener("click", () => {
    window.location.href = "/file/categories";
});


document.addEventListener('DOMContentLoaded', () => {

    const teamList = document.querySelector('.team-names');
    const answearContainer = document.querySelector('.answear h2');

    teamList.addEventListener('click', (event) => {
        if (event.target.classList.contains('team-link')) {
            event.preventDefault();

            const selectedName = event.target.textContent.trim();
            const category = document.querySelector('.categoriaOculta').textContent

            fetch(`/file/${category}/${selectedName}`)
                .then(response => response.json())
                .then(data => {
                    answearContainer.textContent = `Answear: ${data.data}`;

                })
                .catch(error => {
                    console.error('Error al obtener detalles del equipo:', error);
                });
        }
    });
});


