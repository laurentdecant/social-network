import User from "../models/userModel";

async function findAll(req, res) {
  const users = await User.find();
  res.send(users);
}

async function findOne(req, res) {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  res.send(user);
}

async function create(req, res) {
  const user = await User.create(req.body);
  res.send(user);
}

async function update(req, res) {
  const { id } = req.params;
  const user = await User.findOneAndUpdate(
    { _id: id },
    { $set: req.body },
    { new: true }
  );
  res.send(user);
}

async function _delete(req, res) {
  const { id } = req.params;
  const user = await User.findOneAndDelete({ _id: id });
  res.send(user);
}

export { findAll, findOne, create, update, _delete as delete };
