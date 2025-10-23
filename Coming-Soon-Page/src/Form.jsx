import React, { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Form = () => {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const error =
    touched && !emailRegex.test(email)
      ? "Please enter a valid email address"
      : null;

  function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    if (emailRegex.test(email)) {
      // proceed (send to server etc.)
      alert("Submitted: " + email);
      setEmail("");
      setTouched(false);
    }
  }

  return (
    <div className="w-full mx-auto text-center">
      <form
        onSubmit={handleSubmit}
        className="w-full px-5 md:px-0 flex flex-col md:flex-row items-center max-w-md mx-auto mt-8"
      >
        <div className="w-full md:w-3/5 flex gap-4">
          <input
            className={`w-full bg-transparent placeholder:text-Gray-400 font-thin border rounded-4xl focus:outline-none text-Gray-700 mr-3 py-4 px-5 ${
              error ? "border-Red-400" : "border-Blue-200"
            } `}
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
          />
          {error && <p className="font-thin text-xs text-Red-400">{error}</p>}
        </div>
        <button
          className="mt-2 ml-3 w-full md:ml-0 md:mt-0 md:inline md:w-1/3 bg-Blue-500 hover:bg-Blue-200 cursor-pointer text-sm text-white py-4 px-5 rounded-4xl"
          type="submit"
          disabled={!email || !!error}
          onClick={handleSubmit}
        >
          Notify Me
        </button>
      </form>
    </div>
  );
};

export default Form;
