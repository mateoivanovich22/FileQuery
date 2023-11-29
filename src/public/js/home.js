const fileInput = document.querySelector('.input');
const uploadMessage = document.querySelector('.upload-message');

const closeMessage = document.querySelector('.success__close svg');

const loader = document.querySelector('.loader');

const titleCard = document.querySelector('.titleCard');

const inputDiv  = document.querySelector('.input-div');

const noUploadMessage = document.querySelector('.no-upload-message');

const error__close = document.querySelector('.error__close svg');

closeMessage.addEventListener('click', () => {
    uploadMessage.style.display = 'none';
});

error__close.addEventListener('click', () => {
    noUploadMessage.style.display = 'none';
});


fileInput.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        if (file.name.endsWith('.csv')) {
            const formData = new FormData();
            formData.append('file', file);

            fetch('/file-content', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                inputDiv.style.display = "none";
                titleCard.style.display = "none";
                loader.style.display = 'flex';
                setTimeout(() => {
                    uploadMessage.style.display = 'flex';
                }, 3000);
                
                if (data && data.message === 'Archivo recibido exitosamente') {
                    setTimeout(() => {
                        window.location.href = '/file/categories';
                    }, 5000);       
                }
            })
            .catch(error => {
                console.error('Error al enviar el archivo:', error);
            });
        } else {
            noUploadMessage.style.display = 'flex';
            
            this.value = '';
        }
    }
});


