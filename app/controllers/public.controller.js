exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
exports.NotFound404 = (req, res) =>{
  res.status(404).send("Oops, 404 not found")
}