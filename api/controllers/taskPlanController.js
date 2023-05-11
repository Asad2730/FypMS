const TaskPlan = require("../models/task_plan");
const User = require("../models/user");

const taskPlan_all = async (req, res) => {
  try {
    let rs = [];
    const uid = req.params.uid;
    const taskPlans = await TaskPlan.find();

    for (let i = 0; i < taskPlans.length; i++) {
      let id = taskPlans[i]["asgby"];
      let user = await User.findById(id);
      if (user) {
        let taskPlan = taskPlans[i];
        let data = { taskPlan, user };
        rs.push(data);
      }
    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error });
  }
};

const taskPlan_details = async (req, res) => {
  try {
    let rs = [];
    const uid = req.params.uid;
    const taskPlans = await TaskPlan.find({
      asgby: req.params.id,
    });

    for (let i = 0; i < taskPlans.length; i++) {
      let id = taskPlans[i]["asgto"];
      let user = await User.findById(id);
      if (user) {
        let taskPlan = taskPlans[i];
        let data = { taskPlan, user };
        rs.push(data);
      }
    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error });
  }
};

const taskPlan_add = async (req, res) => {
  console.log(req.body);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "profileImage") is used to retrieve the uploaded file
  let sampleFile = req.files.proposalFile;

  // Use the mv() method to place the file somewhere on your server
  await sampleFile.mv("./uploads/" + sampleFile.name, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
  });
  const taskPlan = new TaskPlan({
    name: req.body.name,
    asgto: req.body.asgto,
    asgby: req.body.asgby,
    description: req.body.description,
    file: sampleFile.name,
    status: "pending",
    proposalId: req.body.proposalId,
    deadline: Date(req.body.deadline),
    // type: req.body.type,
    marks: req.body.marks,
    remarks: req.body.remarks,
  });
  try {
    const savedtaskPlan = await taskPlan.save();

    res.send(savedtaskPlan);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const taskPlan_delete = async (req, res) => {
  try {
    const removetaskPlan = await TaskPlan.findByIdAndDelete(req.params.id);
    res.json(removetaskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const taskPlan_update = async (req, res) => {
  try {
    const { id } = req.params;
    const taskplan = { status: "completed" };
    const updatedPlan = await TaskPlan.findByIdAndUpdate({ _id: id }, taskplan);
    console.log(
      "🚀 ~ file: taskPlanController.js:100 ~ consttaskPlan_update= ~ updatedPlan:",
      updatedPlan
    );
    await updatedPlan.save();
    res.json("updated").status(200);
  } catch (error) {}
};

const singleTask = async (req, res) => {
  try {
    let id = req.params.id;
    const taskPlan = await TaskPlan.findById(id);
    res.json(taskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getProposalTask = async (req, res) => {
  try {
    let rs = [];
    let id = req.params.id;
    const taskPlan = await TaskPlan.find({ proposalId: id });
    for (let i = 0; i < taskPlan.length; i++) {
      let id = taskPlan[i]["asgto"];
      let user = await User.findById(id);
      if (user) {
        let ob = taskPlan[i];
        let jsn = { user, ob };
        rs.push(jsn);
      }
    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const studentTask = async (req, res) => {
  try {
    let id = req.params.id;
    const taskPlan = await TaskPlan.find({
      asgto: id,
      status: "pending",
    });
    res.json(taskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const changeTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedtaskPlan = await TaskPlan.findByIdAndUpdate(
      { _id: id },
      { status: status }
    );
    res.json(updatedtaskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const taskHistory = async (req, res) => {
  try {
    const { id } = req.params;

    let rs = [];
    const taskPlans = await TaskPlan.find({ _id: id });

    for (let i = 0; i < taskPlans.length; i++) {
      let asgto = taskPlans[i]["asgto"];

      let user = await User.findById(asgto);
      if (user) {
        let taskPlan = taskPlans[i];
        let data = { taskPlan, user };
        rs.push(data);
        console.log(data);
      }
    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error });
  }
};

const updateTask = async (req, res) => {
  try {
    let { remarks, marks } = req.body;
    let id = req.params.id;
    const taskPlan = await TaskPlan.findByIdAndUpdate(
      { _id: id },
      { remarks: remarks, marks: marks }
    );
    res.json(taskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  taskPlan_all,
  taskPlan_details,
  taskPlan_add,
  taskPlan_delete,
  taskPlan_update,
  singleTask,
  studentTask,
  changeTaskStatus,
  taskHistory,
  getProposalTask,
  updateTask,
};
