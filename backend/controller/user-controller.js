import User from '../models/userModel.js';
import Journal from '../models/journalModel.js';
import jwt from 'jsonwebtoken';
import passport from 'passport';


// User Signup
export const userSignup = async (req, res) => {
  try {
    let exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return res.status(200).json({ msg: 'User already exists!' });
    }
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// User Login
export const userLogin = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ message: 'Invalid login', error: info });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        return res.send(err);
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return res.status(200).json({ user, token });
    });
  })(req, res, next);
};

// Get All Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    const { username } = req.params;

    // Find the user by username
    const user = await User.findOneAndDelete({ username });
    console.log(user);
    if (!user) {
      return res.status(404).json({ msg: 'User not found!' });
    }

    // Delete all journals associated with the user
    await Journal.deleteMany({ _id: { $in: user.journals } });

    return res.status(200).json({ msg: 'User and associated journals deleted successfully!' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update User
export const updateUser = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ msg: 'User not found!' });
    }
    // Update user fields (only the ones provided in the request body)
    Object.assign(user, req.body);
    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
