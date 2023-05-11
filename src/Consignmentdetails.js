import React, { useEffect, useState } from "react";
import Add from "./add2";
import Edit from "./edit";
function Details() {
  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("sd")));
  }, []);
  const [data, setdata] = useState([]);
  const [imagePath, setImagePath] = useState("");
  function handledelete(i) {
    console.log(i);
    const a = data.filter((user) => {
      return user.email !== i;
    });
    console.log(a);
    setdata(a);
    localStorage.setItem("sd", JSON.stringify(a));
    console.log(localStorage.getItem("sd"));
  }
  function handleedit(d) {
    setdata(d);
  }
  function handleadd(d) {
    setdata(d);
  }
  const handleImage = (event) => {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      setImagePath(src);
      localStorage.setItem("src", src);
    }
  }

  function handlechange(e) {
    if (e.target.value === "") {
      setdata(JSON.parse(localStorage.getItem("sd")))
    }
    else {
      console.log("lol")
      const sdata = JSON.parse(localStorage.getItem("sd"))
      const a = sdata.filter((user) => {
        return user.name.toLowerCase().includes(e.target.value) 
      })
      setdata(a)
    }
  }


  return (
    <>
      <form>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input onChange={handlechange} type="search" id="default-search" class="block py-4 px-8 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />

        </div>
      </form>
      <div>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Consignment Id
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      //  >
                      //    Email
                      // // </th>
                      // // <th
                      //   scope="col"
                      //   class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                       >
                        Customer Id
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Delivery Status
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Operations
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        {" "}
                        <Add onadd={handleadd} />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((users, index) => (
                      <tr
                        class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        key={index}
                      >
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {users.name}
                        </td>
                        {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {users.email}
                        </td> */}
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {users.mobile}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {users.address}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         

                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {" "}
                          <button
                            onClick={() => handledelete(users.email)}
                            class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 "
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            Delete
                          </button>
                          <Edit
                            style={{ marginLeft: "1.5rem" }}
                            onedit={handleedit}
                            index={index}
                            user={users}
                          />
                        </td>
                      </tr>
                    ))}
                     
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Details
