let wishes = [
  {
    name: "Thailand",
    image:
      "https://cdn.pixabay.com/photo/2016/06/12/03/48/thailand-1451382_960_720.jpg"
  },
  {
    name: "Trinidad",
    image: "http://dummyimage.com/217x191.bmp/ff4444/ffffff"
  }
];
let memories = [];

const getAllWishes = (req, res) => {
  res.json(wishes);
};

const addWish = (req, res) => {
  wishes.push(req.body);
  res.json(wishes);
};

const deleteWish = (req, res) => {
  //   const index = wishes.findIndex(wish => wish.name === req.params.name);
  //   wishes.splice(index, 1);
  wishes = wishes.filter(wish => wish.name !== req.params.name);
  res.json(wishes);
};

module.exports = {
  getAllWishes,
  addWish,
  deleteWish
};
