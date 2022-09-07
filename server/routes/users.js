var express = require('express');
var router = express.Router();
const Model = require('../models/models');


/* GET users listing. */
router.get('/', function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
    id: 1,
    username: "samsepi0l"
  }, {
    id: 2,
    username: "D0loresH4ze"
  }]);
});

router.post('/', async (req, res) => {
  const data = new Model({
      category: req.body.category,
      manufaturer: req.body.manufaturer,
      model: req.body.model,
      description: req.body.description,
      upc: req.body.upc,
      serial_number: req.body.serial_number,
      grade: req.body.grade,
      packing: req.body.packing,
      buy_price: req.body.buy_price,
      qty: req.body.qty,
      buy_date: req.body.buy_date,
      est_retail_price: req.body.est_retail_price,
      sale_price: req.body.sale_price,
      sale_date: req.body.sale_date,
      observation: req.body.observation
  })

  try {
      const dataToSave = await data.save();

      res.status(200).json(dataToSave)
      
      
      console.log(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})

//Get by ID Method
router.get('/all', async (req, res) => {
  try{
      const data = await Model.find();
      res.json(data)

  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

router.get('/:id', async (req, res) => {
  try{
      const data = await Model.findById(req.params.id);
      res.json(data)

  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

module.exports = router;
