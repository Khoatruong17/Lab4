var express = require('express');
var router = express.Router();

//render home page (views/index.hbs)
router.get('/', (req, res) => {
  res.render('fpt')
})

router.get('/greenwich', (req, res) => {
  res.render('greenwich')
});

router.get('/demo', (req, res) => {
  var city = 'hanoi'
  var district = 'Cau Giay'
  var street = 'Pham Van Dong'
  var image = "https://vcdn-vnexpress.vnecdn.net/2022/06/03/Image-249300564-ExtractWord-0-8746-7982-1654231437.png"
  var year = 2023
  var check = false
  res.render('demo', {
    city,
    district,
    duong: street,
    image: image,
    year: year
  })
});

router.get('/test', (req, res) => {
  var countries = ['VietNam','Singapore','Usa','China']
  var sport = ['Football','Basketball','Swimming','Badminton']
  res.render('country', {
    layout: 'layout1.hbs',
    countries: countries,
    sport: sport
  })
})

module.exports = router