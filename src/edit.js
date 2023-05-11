import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

export default function Edit(props) {
  const [data, setdata] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });
  function handleclick(index) {
    const sd = JSON.parse(localStorage.getItem("sd"));
    console.log(sd);
    for (let i = 0; i < sd.length; i++) {
      if (i === index) {
        sd[i] = data;
      }
    }
    props.onedit(sd);
    localStorage.setItem("sd", JSON.stringify(sd));
  }
  function handleedit() {
    setdata(props.user);
  }
  function handlechange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={handleedit}
          className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-gray-700 shadow-sm "
        >
          <a
            href="#_"
            class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Edit
            </span>
            <span class="relative invisible">Edit</span>
          </a>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          style={{ height: "190px", paddingTop: "4px" }}
          className="absolute right-100 z-10 h-96 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div
            style={{ height: "100px" }}
            className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
          >
            <div className="w-full max-w-md space-y-8">
              <div></div>
              <form className="mt-8 space-y-6">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div className="input-div">
                    <label className="sr-only">Name</label>
                    <input
                      onChange={handlechange}
                      value={data.name}
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email
                    </label>
                    <input
                      onChange={handlechange}
                      value={data.email}
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Mobile
                    </label>
                    <input
                      onChange={handlechange}
                      value={data.mobile}
                      name="mobile"
                      type="text"
                      autoComplete="mobile"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Mobile"
                    />
                  </div>
                  <div>
                    <label className="sr-only">Address</label>
                    <input
                      onChange={handlechange}
                      value={data.address}
                      name="address"
                      type="text"
                      autoComplete="address"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Address"
                    />
                  </div>
                  <beutton
                    onClick={() => handleclick(props.index)}
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Submit
                  </beutton>
                </div>

                <div style={{ marginTop: "30px" }}></div>
              </form>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
