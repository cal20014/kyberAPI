const mongoose = require("mongoose");
const KyberData = require("../models/kyberDataModel");

const kyberDataController = {};

// GET all kyberData
kyberDataController.getAllKyberData = async (req, res) => {
  try {
    const kyberData = await KyberData.find();
    res.json(kyberData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET kyberData by kyber id not mongo object id
kyberDataController.getKyberDataByKyberId = async (req, res) => {
  try {
    const kyberDataArray = await KyberData.find({});
    for (let kyberData of kyberDataArray) {
      const kyber = kyberData.kybers.find(
        (kyber) => kyber.id === parseInt(req.params.id)
      );
      if (kyber) {
        return res.json(kyber);
      }
    }
    return res.status(404).json({ message: "Cannot find kyber" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// // POST new kyberData
// kyberDataController.addKyberData = async (req, res) => {
//   const kyberData = new KyberData(req.body);
//   try {
//     const newKyberData = await kyberData.save();
//     res.status(201).json(newKyberData);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // PUT update kyberData
// kyberDataController.updateKyberData = async (req, res) => {
//   try {
//     const updatedKyberData = await KyberData.findOneAndUpdate(
//       { _id: req.params.id },
//       req.body,
//       { new: true }
//     );
//     if (updatedKyberData) {
//       res.json(updatedKyberData);
//     } else {
//       res.status(404).json({ message: "KyberData not found" });
//     }
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // DELETE kyberData
// kyberDataController.deleteKyberData = async (req, res) => {
//   try {
//     const kyberData = await KyberData.findOne({ _id: req.params.id });
//     if (kyberData) {
//       await KyberData.deleteOne({ _id: req.params.id });
//       res.json({ message: "Deleted kyberData" });
//     } else {
//       res.status(404).json({ message: "KyberData not found" });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

module.exports = kyberDataController;
