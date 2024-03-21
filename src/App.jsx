import { useState, useCallback } from "react";

export default function App() {
  const [length, setLength] = useState(10);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGen = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      // eslint-disable-next-line no-unused-vars
      str += "!@#$%^&*()";
    }
    for (let i = 0; i < length; i++) {
      // eslint-disable-next-line no-unused-vars
      password += str.charAt(Math.floor(Math.random() * str.length));
    }
    return password;
  }, [length, numAllowed, charAllowed]);

  return (
    <>
      <h1 className=" text-white text-center text-5xl  relative top-20 mx-[1rem] ">
        Password Generator
      </h1>
      <p className="text-center relative top-[18vh] text-gray-300">
        Generate garbage password on the Go!
      </p>
      <div className="w-full h-[100vh] flex justify-center items-center ">
        <div className="bg-gray-400 w-[80%] flex flex-col justify-center items-center py-8 rounded-xl">
          <div className="flex flex-row shadow-xl font-['oswald']">
            <input
              type="text"
              placeholder="Password"
              className="p-2 rounded-lg rounded-e-none outline-none w-[60vw]"
              value={passwordGen()}
            />
            <button className="bg-yellow-300 p-2 rounded-lg rounded-s-none hover:cursor-pointer">
              Copy
            </button>
          </div>
          <div className="md:flex-row flex flex-col items-center gap-3 mt-5">
            <input
              type="range"
              min={5}
              max={90}
              className="p-1 w-[40vw]"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-white">
              length : <span className="text-yellow-300 ">{length}</span>
            </label>
            <input
              onChange={() => setCharAllowed(!charAllowed)}
              type="checkbox"
              id="char"
            />
            <label htmlFor="char" className="font-['poppins']">
              Character
            </label>
            <input
              onChange={() => setNumAllowed(!numAllowed)}
              type="checkbox"
              id="num"
            />
            <label htmlFor="num" className="font-['poppins']">
              Number
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
