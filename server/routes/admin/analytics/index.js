const express = require('express');
const router = express.Router();
const User = require('../../../models/user');

//routes for populating analytical data.

/*EXAMPLE:
"field" comes from a dropdown menu of known fields that exist on an item.
    ex: location

this route will send a json object of {location: #ofSales}, easily to populate a graph.

router.get('most-sales/:field', function(req, res, next){
    const locations[];

    FOR EACH sale DO
        location = sale.location;

        IF location IS IN  locations[];
            indexOf location++;
        Else
            push location on locations[];
            indexOf this location++;
    
    res.send(locations[]);

});*/


module.exports = router;