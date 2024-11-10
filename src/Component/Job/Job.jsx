import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, 
        salary } = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className="max-w-24"
                        src={logo} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="mt-4">
                        <button className="px-5 py-2 font-extrabold border rounded text-indigo-400  border-indigo-400 mr-4">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded text-indigo-400  border-indigo-400 mr-4">{job_type}</button>
                    </div>
                    <div className="mt-4 mb-4 flex gap-4">
                        <h2 className="flex gap-2"><MdOutlineLocationOn className="text-2xl" />
                            {location}</h2>
                        <h2 className="flex gap-2"><AiOutlineDollar className="text-2xl" />
                            {salary}</h2>

                    </div>
                    <div className="card-actions ">
                        <Link to={`job/${id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;