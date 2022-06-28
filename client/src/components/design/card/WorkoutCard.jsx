function WorkoutCard({ data }) {
  return (
    <>
      <div
        className="group p-6 bg-white  mb-4 last:mb-0 
      shadow-sm hover:shadow-lg "
      >
        <h2 className="text-xl text-black group-hover:text-green-500 font-bold mb-3">
          {data.title}
        </h2>
        <p>
          <strong>Load (Kg) :</strong> {data.load}
        </p>
        <p>
          <strong> Reps :</strong> {data.reps}
        </p>

        <p className="text-sm mt-4 ">
          {new Date(data.createdAt).toDateString()}
        </p>
      </div>
    </>
  );
}

export default WorkoutCard;
