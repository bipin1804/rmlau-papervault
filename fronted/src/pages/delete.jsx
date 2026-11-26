
import { useLocation, useNavigate } from "react-router-dom";
import apiclient from "../api/api.js";

export default function Delete() {
  const location = useLocation();
  const navigate = useNavigate();

  const paper = location.state?.paper;

  const getdel = async () => {
    try {
      if (!paper?._id) {
        console.log("Paper ID nahi mili");
        return;
      }

      const response = await apiclient.delete(
        `/papers/delete/${paper._id}`
      );

      console.log(response.data);
      navigate(-1);

    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold mb-4">
          Delete Paper
        </h2>

        <p className="mb-4">
          Are you sure you want to delete paper?
        </p>

        <button
          onClick={getdel}
          className="bg-red-600 text-white px-4 py-2 rounded mr-2"
        >
          Yes, Delete
        </button>

        <button
          onClick={() => navigate("/viewpaper")}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
