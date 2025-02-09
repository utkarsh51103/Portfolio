import React from "react";
import { useState } from "react";
import {useForm , ValidationError} from '@formspree/react'

function index() {
  const [submit, handleSubmit] = useForm("xvgzqpop");

  if(submit.succeeded){
    return( 
        <div className="flex items-center justify-center text-white">
            <h1>Your Response has been submitted</h1>
        </div> 
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-2"
    >
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        className="p-2 rounded-md placeholder:text-white bg-gray-800 placeholder:font-light"
      />
      <ValidationError
       prefix="name"
       field="name"
       errors={submit.errors}
      />
      <input
        type="number"
        id="number"
        name="number"
        placeholder="Phone Number"
        className="p-2 rounded-md placeholder:text-white bg-gray-800 placeholder:font-light"
      />
      <ValidationError
       prefix="number"
       field="number"
       errors={submit.errors}
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className="p-2 rounded-md placeholder:text-white bg-gray-800 placeholder:font-light"
      />
      <ValidationError
       prefix="email"
       field="email"
       errors={submit.errors}
      />
      <div className="h-20">
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Message"
          className="p-2 h-full rounded-md placeholder:text-white bg-gray-800 placeholder:font-light text-clip"
        />
        <ValidationError
       prefix="message"
       field="message"
       errors={submit.errors}
      />
      </div>
      <button className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-purple-500 px-5 py-2 rounded-lg" type="submit" disabled={submit.submitting}>
        Submit
      </button>
    </form>
  );
}

export default index;
