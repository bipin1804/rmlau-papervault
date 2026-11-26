
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ShareIcon from "@mui/icons-material/Share";
import { assert } from "../assets/assert";


export default function About() {
  const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];

  return (
    <div className="min-h-[600px] bg-slate-50 px-3 py-8 md:px-8 md:py-1">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto">

        {/* Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden
          rounded-3xl bg-white border border-blue-100 shadow-xl">

          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col bg-blue-50">

            {/* Profile Image */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[620px] overflow-hidden">

              <img
                src={assert.bipin}
                alt="Bipin Kumar"
                className="w-full h-full object-cover object-[center_25%]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t
                  from-blue-950/80 via-transparent to-transparent" />

              {/* Image Text */}
              <div className="absolute bottom-7 left-7 sm:left-10 text-white">

                <p className="text-blue-200 uppercase tracking-[3px]
                    text-xs sm:text-sm font-medium">
                  Developer & Creator
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                  Bipin Kumar
                </h2>

                <p className="text-white/80 mt-2 text-sm sm:text-base">
                  Full Stack Web Developer
                </p>

                <div className="w-16 h-1 bg-blue-500 rounded-full mt-4" />

              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-3 divide-x divide-blue-200
                px-3 py-7 sm:px-6 sm:py-9">

              {/* Education */}
              <div className="px-2 sm:px-4">

                <div className="w-11 h-11 bg-blue-100 rounded-full
                    flex items-center justify-center text-blue-600 mb-3">
                  <SchoolIcon />
                </div>

                <p className="text-xs sm:text-sm text-slate-500">
                  Education
                </p>

                <h3 className="text-sm sm:text-base font-semibold
                    text-slate-800 mt-2">
                  Btech (CS)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-5">
                  Computer Science
                </p>

              </div>

                


            

              {/* Location */}
              <div className="px-2 sm:px-4">

                <div className="w-11 h-11 bg-blue-100 rounded-full
                    flex items-center justify-center text-blue-600 mb-3">
                  <LocationOnIcon />
                </div>

                <p className="text-xs sm:text-sm text-slate-500">
                  Location
                </p>

                <h3 className="text-sm sm:text-base font-semibold
                    text-slate-800 mt-2">
                  Ayodhya
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Uttar Pradesh
                </p>

              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">

            {/* About Heading */}
            <div>

              <span className="inline-flex items-center gap-2 bg-blue-50
                  text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                <CodeIcon fontSize="small" />
                About Me
              </span>

              <h1 className="text-3xl sm:text-4xl font-bold
                  text-slate-800 mt-5 leading-tight">
                Hi, I'm{" "}
                <span className="text-blue-600">
                  Bipin Kumar
                </span>
              </h1>

              <h2 className="text-lg sm:text-xl font-semibold
                  text-blue-600 mt-3">
                Full Stack Web Developer
              </h2>

              <p className="text-slate-600 leading-7 mt-4 text-sm sm:text-base">
                I'm a Computer Science student who enjoys building web
                applications and solving real-world problems through code.
                I'm passionate about web development, learning new
                technologies and turning ideas into useful applications.
              </p>


            </div>

            {/* What I Do */}
            <div className="mt-7">

              <h3 className="text-lg font-bold text-slate-800 mb-4">
                What I Do
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                {/* Web Development */}
                <div className="border border-blue-100 bg-white
                    hover:bg-blue-50/60 rounded-2xl p-4
                    transition duration-300">

                  <div className="w-11 h-11 rounded-full bg-blue-50
                      flex items-center justify-center text-blue-600">
                    <CodeIcon />
                  </div>

                  <h4 className="font-semibold text-slate-800 mt-3 text-sm">
                    Web Development
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600
                      leading-5 mt-2">
                    Building responsive and user-friendly websites.
                  </p>

                </div>

                {/* Backend */}
                <div className="border border-blue-100 bg-white
                    hover:bg-blue-50/60 rounded-2xl p-4
                    transition duration-300">

                  <div className="w-11 h-11 rounded-full bg-blue-50
                      flex items-center justify-center text-blue-600">
                    <StorageIcon />
                  </div>

                  <h4 className="font-semibold text-slate-800 mt-3 text-sm">
                    Backend Development
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600
                      leading-5 mt-2">
                    Creating APIs and working with databases.
                  </p>

                </div>

                {/* Problem Solving */}
                <div className="border border-blue-100 bg-white
                    hover:bg-blue-50/60 rounded-2xl p-4
                    transition duration-300">

                  <div className="w-11 h-11 rounded-full bg-blue-50
                      flex items-center justify-center text-blue-600">
                    <RocketLaunchIcon />
                  </div>

                  <h4 className="font-semibold text-slate-800 mt-3 text-sm">
                    Problem Solving
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600
                      leading-5 mt-2">
                    Improving logic and solving DSA problems.
                  </p>

                </div>

              </div>
            </div>

            {/* Skills */}
            <div className="mt-7">

              <h3 className="text-lg font-bold text-slate-800 mb-4">
                Technologies & Skills
              </h3>

              <div className="flex flex-wrap gap-2">

                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-full border border-blue-100
                      bg-white text-slate-700 text-xs sm:text-sm
                      hover:bg-blue-50 hover:border-blue-300
                      transition duration-200"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>

            {/* Social Links */}
            <div className="mt-7">

              <h3 className="flex items-center gap-2 text-lg
                  font-bold text-slate-800 mb-4">
                <ShareIcon className="text-blue-600" fontSize="small" />
                Connect With Me
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

                {/* GitHub */}
                <a
                  href="https://github.com/bipin1804"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2
                    border border-blue-100 rounded-xl py-3
                    hover:bg-blue-50 transition"
                >
                  <GitHubIcon className="text-slate-800" />
                  <span className="text-xs sm:text-sm text-slate-600">
                    GitHub
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/bipinkumar1804"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2
                    border border-blue-100 rounded-xl py-3
                    hover:bg-blue-50 transition"
                >
                  <LinkedInIcon className="text-blue-600" />
                  <span className="text-xs sm:text-sm text-slate-600">
                    LinkedIn
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/kumarbipin1804/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2
                    border border-blue-100 rounded-xl py-3
                    hover:bg-blue-50 transition"
                >
                  <InstagramIcon className="text-pink-500" />
                  <span className="text-xs sm:text-sm text-slate-600">
                    Instagram
                  </span>
                </a>



              </div>
            </div>


          </div>


        </div>

        {/* Quote Footer */}
        <div className="flex justify-center items-center gap-2
            text-slate-500 mt-6 px-4 text-center">

          <FormatQuoteIcon className="text-blue-500" />

          <p className="text-sm sm:text-base">
            Learning today, building tomorrow.
          </p>
          <FormatQuoteIcon className="text-blue-500 rotate-180" />

        </div>

      </div>
    </div>
  );
}
