import React from "react";

export default function RegisterForm() {
  const handleInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <div class="bg-white p-4 rounded-lg mt-4">
      <h3>Register Form</h3>
      <div class="relative bg-inherit mt-4">
        <input
          type="text"
          id="username"
          name="username"
          class="peer bg-transparent h-10 w-72 rounded-lg text-gray-700 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          placeholder="Type inside me"
          onChange={handleInput}
        />
        <label
          for="username"
          class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
        >
          Username
        </label>
      </div>
      <div class="relative bg-inherit mt-4">
        <input
          type="text"
          id="email"
          name="email"
          class="peer bg-transparent h-10 w-72 rounded-lg text-gray-700 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          placeholder="Type inside me"
          onChange={handleInput}
        />
        <label
          for="email"
          class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
        >
          Email
        </label>
      </div>
    </div>
  );
}
