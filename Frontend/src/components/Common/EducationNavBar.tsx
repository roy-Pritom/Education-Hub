import Link from "next/link";

const EducationNavBar = () => {
    return (
        <div className="flex items-center  justify-center gap-5 pb-2">
        <Link href={`/courses/${2}`} className="hover:text-red-500">
            <button className="border-none ">Courses</button>
          </Link>
        <Link href={`/courses/exams/${2}`} className="hover:text-red-500">
            <button className="border-none ">Exams</button>
          </Link>
        <Link href={`/session`} className="hover:text-red-500">
            <button className="border-none ">Live Sessions</button>
          </Link>
        <Link href={`/revesion/${2}`} className="hover:text-red-500">
            <button className="border-none ">Revisions</button>
          </Link>
        </div>
    );
};

export default EducationNavBar;