const user = require('../models/User');

const getUserDetails = async (req, res) => {
    try {
      const user = req.user;  // `req.user` is populated by authMiddleware
      res.status(200).json({
        user: { id: user._id, name: user.name, email: user.email , friends: user.friends , rating: user.rating , avatar: user.avatar},
      });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user details' });
    }
};

const getAllUsers = async (req,res) =>{
  try{
    const users = await user.find();
    res.status(200).json({users});
  } catch (e) {
    res.status(500).json({message: 'Error fetching users'});
  }
}

const addFriend = async (req, res) => {
  const uid = req.query.me;  // Current user's ID
  const fid = req.query.fid; // Friend's ID


  try {
    // Retrieve the current user
    const currentUser = await user.findById(uid);
    if (!currentUser) {
      return res.status(404).json({ message: 'Current user not found' });
    }

    // Retrieve the friend user by the given friend ID
    const friendUser = await user.findById(fid);
    if (!friendUser) {
      return res.status(404).json({ message: 'Friend not found' });
    }

    // Check if the friend is already added to the list
    const isFriendExists = currentUser.friends.some(friend => friend.uid === fid);
    if (isFriendExists) {
      return res.status(400).json({ message: 'Friend already added' });
    }

    // Add the friend to the current user's friend list
    currentUser.friends.push({ uid: fid, name: friendUser.name });
    await currentUser.save();  // Save updated user

    // Also add the current user to the friend's friend list
    friendUser.friends.push({ uid: uid, name: currentUser.name });
    await friendUser.save();  // Save updated friend
    console.log('both are added in the db');
    res.status(200).json({ message: 'Friend added successfully', currentUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
module.exports = {getUserDetails,getAllUsers,addFriend};
