import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserPropsals } from "../../../DB/db";

const Supervisorhome = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  localStorage.setItem("sid1", "-1");
  localStorage.setItem("sid2", "-1");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    let res = await getUserPropsals();
    setData(res);
  };

  return (
    <>
      {" "}
      <div className="rounded-lg mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((i) => (
          <>
            <div className="max-w-sm rounded shadow py-7  bg-gray-800">
              <div
                onClick={() => {
                  localStorage.setItem("proposalId", i.proposal._id);
                  localStorage.setItem("sid1", i.std1._id);
                  localStorage.setItem("sid2", i.std2._id);
                  navigate("/Supervisortasks");
                }}
                className="px-8 flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl font-bold leading-10 text-center mt-6 text-gray-800 dark:text-gray-100">
                  {i.proposal.title}
                </p>
                <p className="text-base sm:text-lg leading-9 text-center mt-4 text-gray-500 dark:text-gray-400">
                  {i.std1.firstName} {i.std1.lastName}
                </p>
                <p className="text-base sm:text-lg leading-9 text-center mt-4 text-gray-500 dark:text-gray-400">
                  {i.std2.firstName} {i.std2.lastName}
                </p>
              </div>

              <div className="flex  p-2  items-center justify-center px-4 sm:px-16">
                <div className="flex space-x-4">
                  <button className="px-8 sm:py-2 py-1 bg-indigo-700 hover:bg-indigo-600 rounded sm:text-base text-sm font-semibold leading-9 text-center text-white">
                    Follow
                  </button>
                  <button className="px-8 sm:py-2 py-1 bg-indigo-700 hover:bg-indigo-600 rounded sm:text-base text-sm font-semibold leading-9 text-center text-white">
                    Follow
                  </button>
                </div>
              </div>
            </div>
            {/* <div
              onClick={() => {
                localStorage.setItem("proposalId", i.proposal._id);
                localStorage.setItem("sid1", i.std1._id);
                localStorage.setItem("sid2", i.std2._id);
                navigate("/Supervisortasks");
              }}
              className="rounded-lg max-w-sm  relative shadow bg-white dark:bg-gray-800"
            >
              <img
                className="h-48 w-96"
                src="https://www.techrepublic.com/wp-content/uploads/2022/03/project-management-software-best-update.jpeg"
              />

              <div className="border-t-2 px-6 pt-5 p-5 sm:mt-3 border-gray-200 dark:border-gray-800">
                <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
                  {i.proposal.title}
                </p>

                <p className="sm:text-sm text-xs leading-5 text-gray-500 dark:text-gray-400 pt-2">
                  {i.std1.firstName} {i.std1.lastName}
                </p>
                <p className="sm:text-sm text-xs leading-5 text-gray-500 dark:text-gray-400 pt-2">
                  {i.std2.firstName} {i.std2.lastName}
                </p>
              </div>
            </div>{" "} */}
          </>
        ))}
      </div>
    </>
  );
};

export default Supervisorhome;
