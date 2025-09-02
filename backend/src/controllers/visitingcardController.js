import Profile from "../models/profile.js";

export const CreateVisitingCard = async (req, res) => {
  try {
    const { name, email, phoneNumber, linkedInProfile, imageId } = req.body;
    const profile = new Profile({
      name,
      email,
      phoneNumber,
      linkedInProfile,
      imageId,
    });
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    console.log(`Error in Create Visiting Card, ${error}`);
    res.status(500).json({ error: "Error in Create Profile" });
  }
};

export const getVisitingCards = async (req, res) => {
  try {
    const profiles = await Profile.find().populate("imageId");
    res.status(200).json(profiles);
  } catch (error) {
    console.log(`Error in getting Visiting cards, ${error}`);
    res.status(500).json({ error: `Error In Getting Profiles, ${error}` });
  }
};
