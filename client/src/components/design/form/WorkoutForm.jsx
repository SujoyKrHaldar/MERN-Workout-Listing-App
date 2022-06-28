import { useState } from "react";

function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setResp] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();

    const data = { title, load, reps };

    const response = await fetch("http://localhost:8000/api/workout", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jsonRes = await response.json();

    if (!response.ok) {
      setErr(true);
      return setMsg(jsonRes.error);
    }
    setErr(false);
    setMsg(jsonRes.message);

    setLoad("");
    setTitle("");
    setResp("");
  };

  return (
    <>
      <form className="p-8 shadow-sm bg-white" onSubmit={handelSubmit}>
        <h1 className="text-2xl mb-8 font-bold">Create a Workout</h1>
        <div className="mb-4">
          <p className="font-medium mb-2">Title</p>
          <input
            type="text"
            className="bg-[#bbbbbb44] w-full px-4 py-3 "
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            // required
          />
        </div>

        <div className="mb-4">
          <p className="font-medium mb-2">Load in Kg</p>
          <input
            type="number"
            className="bg-[#bbbbbb44] w-full px-4 py-3"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            // required
          />
        </div>

        <div className="mb-4">
          <p className="font-medium mb-2">Reps</p>
          <input
            type="number"
            className="bg-[#bbbbbb44] w-full px-4 py-3"
            onChange={(e) => setResp(e.target.value)}
            value={reps}
            // required
          />
        </div>

        <button
          type="submit"
          className="bg-[#2f2f2f] text-white w-full px-8 py-3 mt-8 font-bold"
        >
          Create
        </button>

        {msg && (
          <p
            className={`p-3 border-2 mt-4 ${
              err
                ? "bg-red-300 border-red-500 "
                : "bg-green-300  border-green-500 "
            }  `}
          >
            {msg}
          </p>
        )}
      </form>
    </>
  );
}

export default WorkoutForm;
