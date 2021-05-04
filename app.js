console.log('uwu')

const LugarId = document.querySelector('#LugarId');
const FechaId = document.querySelector('#FechaId');
const DescripciónId = document.querySelector('#DescripciónId');
const CosteId = document.querySelector('#CosteId');
const buttonGuardar = document.querySelector('#button-Guardar');
const buttonCancel = document.querySelector('#button-cancel');
const planesJuntos = document.querySelector('#planes-juntos')

const createNewPlanesJuntos = (lugar, fecha, descripción, coste) => {
    const ionCard = document.createElement('ion-card')
    const newPlanesJuntos = document.createElement('ion-card-content');
    newPlanesJuntos.textContent = lugar + ' ' + fecha +  ' ' + descripción +  ' ' + coste + '€' ;
    ionCard.appendChild(newPlanesJuntos);
    planesJuntos.appendChild(ionCard);

};

const clearInputs = () => {
    LugarId.value = '';
    FechaId.value = '';
    DescripciónId.value = '';
    CosteId.value = '';
}

const isEmpty = str => !str.trim().length;

buttonGuardar.addEventListener('click', () => {
    const lugar = LugarId.value;
    const fecha = FechaId.value;
    const descripción = DescripciónId.value;
    const coste = CosteId.value;

    if (isEmpty(lugar) || isEmpty(fecha) || isEmpty(descripción) || isEmpty(coste)) {
        console.log('Not valid data')
        return;
    }
    
    createNewPlanesJuntos(lugar, fecha, descripción, coste);
    clearInputs();

})

buttonCancel.addEventListener('click', clearInputs)