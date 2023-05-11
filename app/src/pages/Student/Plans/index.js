import axios from "axios";
import React, { useEffect, useState } from "react";
const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    remarks: "remarks",
  },
  // More people...
];
const Plans = () => {
  const [getPlans, setgetPlans] = useState([]);
  const getmyPlans = async () => {
    const url = "http://localhost:8000/api/taskplan/";
    const { data } = await axios.get(url);
    console.log("🚀 ~ file: index.js:17 ~ getmyPlans ~ data:", data);
    setgetPlans(data);
  };
  useEffect(() => {
    getmyPlans();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base mt-3  font-semibold leading-6 text-gray-900">
              Plans
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <table className="w-full text-left">
            <thead className="bg-white">
              <tr>
                <th
                  scope="col"
                  className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Name
                  <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
                  <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell"
                >
                  File
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Deadline
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Remarks
                </th>
                <th scope="col" className="relative py-3.5 pl-3">
                  <span className="sr-only">Apply</span>
                </th>
                <th scope="col" className="relative py-3.5 pl-3">
                  <span className="sr-only">Download</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {getPlans.map((plans) =>
                plans.taskPlan.type == "plan" ? (
                  <tr key={plans.taskPlan._id}>
                    <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
                      {plans.taskPlan.name}
                      <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                      <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                      {plans.taskPlan.description}
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">
                      {plans.taskPlan.file}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {plans.taskPlan.deadline.split("T")[0]}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500"></td>
                    <td className="relative py-4 pl-3 text-right text-sm font-medium">
                      {plans.taskPlan.status != "completed" ? (
                        <button className=" bg-blue-600 hover:bg-blue-500 text-white px-2 py-2 rounded-lg ">
                          Apply
                        </button>
                      ) : (
                        <div></div>
                      )}
                    </td>
                    <td className="relative py-4 space-x-4 text-right text-sm font-medium">
                      <button className=" bg-green-600 hover:bg-green-500 text-white px-2 py-2 rounded-lg ">
                        Download
                      </button>
                      <button className=" bg-gray-800 hover:bg-gray-600 text-white px-2 py-2 rounded-lg ">
                        Submit
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr></tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Plans;
