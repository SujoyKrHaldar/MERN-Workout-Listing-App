import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

function PageNotFound() {
  return (
    <>
      <Layout>
        <div className="w-full h-[88.5vh] py-16 flex items-center justify-start">
          <div className="max-w-md text-center mx-auto">
            <h1 className="text-8xl">404</h1>
            <h2 className="mb-4">
              Page not <span className="font-bold">Found</span>!
            </h2>
            <Link to="/">
              <p className="bg-black text-white px-6 py-3 text-base inline-block">
                Back to home
              </p>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default PageNotFound;
