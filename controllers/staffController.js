const Staff = require('../model/Staff');

// Add a new staff member
exports.addStaff = async (req, res) => {
  try {
    const { name, role } = req.body;
    const staff = new Staff({ name, role });
    await staff.save();
    res.status(201).json(staff);
  } catch (error) {
    res.status(500).json({ error: 'Error adding staff member' });
  }
};

// Update an existing staff member
exports.updateStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, role } = req.body;
    const updatedStaff = await Staff.findByIdAndUpdate(
      id,
      { name, role },
      { new: true }
    );
    if (!updatedStaff) {
      return res.status(404).json({ error: 'Staff member not found' });
    }
    res.json(updatedStaff);
  } catch (error) {
    res.status(500).json({ error: 'Error updating staff member' });
  }
};

// Delete a staff member by ID
exports.deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStaff = await Staff.findByIdAndRemove(id);
    if (!deletedStaff) {
      return res.status(404).json({ error: 'Staff member not found' });
    }
    res.json({ message: 'Staff member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting staff member' });
  }
};
