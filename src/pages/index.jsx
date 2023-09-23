import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <h1 className="text-4xl">Cat viewer</h1>
      <h2 className="text-2xl">
        Click the link to view your cat.
      </h2>
      <div className="mt-12">
        <Link
          className="text-xl hover:bg-blue-100 transition-all bg-blue-200 p-4 rounded-lg text-blue-600"
          to="/cat">
          View your cat
        </Link>
      </div>
    </>
  );
}
