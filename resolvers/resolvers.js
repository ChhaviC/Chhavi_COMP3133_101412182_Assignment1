const User = require("../models/User");
const Employee = require("../models/Employee");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const resolvers = {
  Query: {
    login: async (_, { username, email, password }) => {
      const user = await User.findOne({ $or: [{ username }, { email }] });
      if (!user) throw new Error("User not found");
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) throw new Error("Invalid credentials");
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      return { token, user };
    },
    getAllEmployees: async () => await Employee.find(),
    getEmployeeById: async (_, { eid }) => await Employee.findById(eid),
    searchEmployee: async (_, { designation, department }) => await Employee.find({ $or: [{ designation }, { department }] }),
  },
  Mutation: {
    signup: async (_, { username, email, password }) => {
      const user = new User({ username, email, password });
      await user.save();
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      return { token, user };
    },
    addEmployee: async (_, args) => {
      const employee = new Employee(args);
      return await employee.save();
    },
    updateEmployee: async (_, { eid, ...updates }) => {
      return await Employee.findByIdAndUpdate(eid, updates, { new: true });
    },
    deleteEmployee: async (_, { eid }) => {
      await Employee.findByIdAndDelete(eid);
      return "Employee deleted successfully";
    },
  },
};

module.exports = resolvers;
