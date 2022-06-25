import { useEffect, useState } from "react";
import WorkoutCard from "../design/card/WorkoutCard";
import Loading from "../design/others/Loading";

function Home() {
  const [data, setData] = useState([]);
  const [Load, setLoad] = useState(false);

  const fetchData = async (url) => {
    setLoad(true);
    const responce = await fetch(url);
    const resData = await responce.json();

    console.log(responce);
    console.log(resData);

    responce.ok && setData(resData);

    setLoad(false);
  };

  useEffect(() => {
    fetchData("http://localhost:8000/api/workout");
  }, []);

  return (
    <>
      <div className="bg-[#f2f2f2] border-[1rem] border-white w-full min-h-[93vh] h-auto">
        <div className="container w-full h-full  py-28  ">
          <h1 className="text-2xl mb-4">
            All <span className="font-bold">Workouts</span>
          </h1>
          {Load && <Loading />}
          {data.length > 0 ? (
            <div className="grid grid-cols-3 gap-4 mt-4">
              {data.map((d) => (
                <WorkoutCard key={d._id} data={d} />
              ))}
            </div>
          ) : (
            <p>No Workouts</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
