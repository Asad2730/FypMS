import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Hodhome from "../pages/Hod/Home";
import HodLayout from "../layout/hodLayout";
import Hodfeedback from "../pages/Hod/Feedback";
import Users from "../pages/Hod/users";
import ProjectDetail from "../pages/Hod/Projectdetail";
import Adduser from "../pages/Hod/adduser";
import StudentLayout from "../layout/studentLayout";
import StudentHome from "../pages/Student/Studenthome";
import Addproposal from "../pages/Student/Addpropsal";
import Plans from "../pages/Student/Plans";
import Studentstasks from "../pages/Student/Tasks";
import SupervisorLayout from "../layout/supervisorLayout";
import Supervisorhome from "../pages/supervisor/supervisorhome";

import Addidea from "../pages/supervisor/addidea";
import Addtask from "../pages/supervisor/addtask";
import Evaluatorlayout from "../layout/evaluaterLayout";
import Evaluatorhome from "../pages/evaluator/evaluatorhome";
import Projectdetails from "../pages/evaluator/projectdetails";
import Addfeedback from "../pages/supervisor/addfeedback";
import Supervisorfeedback from "../pages/supervisor/ideas";
import Proposals from "../pages/supervisor/task";
import Supervisortask from "../pages/supervisor/supervisortasks";
import Evaluteform from "../pages/evaluator/evaluateform";
import Evaluatorfeedback from "../pages/evaluator/evaluatorfeedback";
import Efeedbackform from "../pages/evaluator/feedbackform";
import Coordinatorlayout from "../layout/coordinatorLayout";
import Coordinatorhome from "../pages/coordinator/coordinatorhome";
import Taskhistory from "../pages/coordinator/taskhistory";
import Coordinatorfeedback from "../pages/coordinator/coordinatorfeedback";
import Coordinatorfeedbackform from "../pages/coordinator/coordinatorfeedbackform";
import Coordinatorplans from "../pages/coordinator/coordinatorplan";
import CoordinatorProposals from "../pages/coordinator/coordinatorproposals";
import AddStudent from "../pages/supervisor/addStudent/addStudent";
import Studentideas from "../pages/Student/ideas";
import Addperson from "../pages/coordinator/addperson";

const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<HodLayout />}>
          <Route path="/hodhome" element={<Hodhome />} />
          <Route path="/feedback" element={<Hodfeedback />} />
          <Route path="/users" element={<Users />} />
          <Route path="/projectdetail" element={<ProjectDetail />} />
          <Route path="/adduser" element={<Adduser />} />
        </Route>
        <Route element={<StudentLayout />}>
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/addproposal" element={<Addproposal />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/tasks" element={<Studentstasks />} />
          <Route path="/ideas" element={<Studentideas />} />
        </Route>

        <Route element={<SupervisorLayout />}>
          <Route path="/supervisorhome" element={<Supervisorhome />} />
          <Route path="/supervisorfeedback" element={<Supervisorfeedback />} />
          <Route path="/Addfeedback" element={<Addfeedback />} />
          <Route path="/Proposals" element={<Proposals />} />
          <Route path="/Addidea" element={<Addidea />} />
          <Route path="/Addtask" element={<Addtask />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/Supervisortasks" element={<Supervisortask />} />
        </Route>

        <Route element={<Evaluatorlayout />}>
          <Route path="/evaluatorhome" element={<Evaluatorhome />} />
          <Route path="/projectdetails" element={<Projectdetails />} />
          <Route path="/evaluate" element={<Evaluteform />} />
          <Route path="/evaluatorfeedback" element={<Evaluatorfeedback />} />
          <Route path="/evaluatorfeedbackform" element={<Efeedbackform />} />
        </Route>
        <Route element={<Coordinatorlayout />}>
          <Route path="/coordinatorhome" element={<Coordinatorhome />} />
          <Route path="/coordinatorplan" element={<Coordinatorplans />} />
          <Route path="/addperson" element={<Addperson />} />

          <Route path="/taskhistory" element={<Taskhistory />} />
          <Route
            path="/coordinatorfeedback"
            element={<Coordinatorfeedback />}
          />
          <Route
            path="/coordinatorfeedbackform"
            element={<Coordinatorfeedbackform />}
          />
          <Route path="/coordinatorplan" element={<Coordinatorplans />} />
          <Route
            path="/coordinatorproposals"
            element={<CoordinatorProposals />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;
