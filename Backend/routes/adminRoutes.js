const express = require ("express")
const authMiddleware = require("../middlewares/authMiddleware")

const adminMiddleware = require("../middlewares/adminMiddleware");
const { getDonarsListController, getHospitalListController, getOrgListController, deleteDonarController } = require("../controllers/adminController");

//Routes Object
const router = express.Router()


//Get || Hospital List
router.get('/hospital-list',
authMiddleware,
adminMiddleware, 
getHospitalListController );

//Get || Donar List
router.get('/donar-list',
authMiddleware,
adminMiddleware, 
getDonarsListController );


//Get || ORG List
router.get('/org-list',
authMiddleware,
adminMiddleware, 
getOrgListController );

// #################################################

// DELETE Donar || Get
router.delete('/delete-donar/:id', authMiddleware, adminMiddleware, deleteDonarController )

//Export

module.exports = router;