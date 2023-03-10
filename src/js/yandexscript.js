function init() {
	let map = new ymaps.Map('map', {
		center: [55.706814184746186,37.70948361904908],
		zoom: 17
	});
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
  
}
ymaps.ready(init);
let headerCard = document.querySelector('.header__card');
let cardBlock = document.querySelector('.card__block');
headerCard.addEventListener('mouseover', function(){
    cardBlock.classList.add('card__block-active');
});
headerCard.addEventListener('mouseout', function (){
    cardBlock.classList.remove('card__block-active');
 
})
