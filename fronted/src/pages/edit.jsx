
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiclient from "../api/api.js";

export default function Edit() {
  const location = useLocation();
  const navigate = useNavigate();

  const paper = location.state?.paper;

  // paperinfo populated object ya array ho sakta hai
  const info = Array.isArray(paper?.paperinfo)
    ? paper.paperinfo[0]
    : paper?.paperinfo;

  const [form, setForm] = useState({
    subject: paper?.subject || "",
    Branch: paper?.Branch || "CS",
    year: paper?.year || 1,
    semester: paper?.semester || 1,
    paperyear: info?.paperyear || ""
  });

  const [pdf, setPdf] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!paper?._id || !info?._id) {
        setMessage("Paper ID ya Paper Info ID nahi mili.");
        return;
      }

      // 1. Paper ki details update
      await apiclient.put(`/papers/update/${paper._id}`, {
        subject: form.subject,
        Branch: form.Branch,
        year: Number(form.year),
        semester: Number(form.semester)
      });

      // 2. PDF ya paper year update
      if (
        String(form.paperyear) !== String(info.paperyear) ||
        pdf
      ) {
        const data = new FormData();

        data.append("paperyear", form.paperyear);

        if (pdf) {
          data.append("pdf", pdf);
        }

        await apiclient.put(
          `/papers/update-info/${info._id}`,
          data
        );
      }

      setMessage("Paper updated successfully!");
      setTimeout(() => navigate(-1), 1500);

    } catch (error) {
      setMessage(
        error.response?.data?.message || "Update failed"
      );
    }
  };

  

  if (!paper) {
    return <p className="p-6">Paper details nahi mili.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">
          Edit Paper
        </h1>

        <div>
          <label className="block mb-1">Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Branch</label>
          <select
            name="Branch"
            value={form.Branch}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            <option value="Computer Science ">CS</option>
            <option value="Information Technology">IT</option>
            <option value="Mechanical Engineering">ME</option>
            <option value="Civil Engineering">Civil</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Year</label>
          <select
            name="year"
            value={form.year}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Semester</label>
          <select
            name="semester"
            value={form.semester}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Paper Year</label>
          <input
            type="number"
            name="paperyear"
            value={form.paperyear}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block mb-1">
            New PDF (optional)
          </label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setPdf(e.target.files[0] || null)}
            className="w-full border rounded-lg p-2"
          />
          <p className="text-sm text-gray-500 mt-1">
            PDF select nahi karoge to purani PDF rahegi.
          </p>
        </div>

        {message && (
          <p className="text-sm text-blue-700">{message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Update Paper
        </button>
      </form>
    </div>
  );
}
