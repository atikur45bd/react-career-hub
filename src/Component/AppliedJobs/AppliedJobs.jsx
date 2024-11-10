import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStorage";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied =jobs.filter(job => storedJobIds.includes(job.id));
            // setAppliedJobs();
            // console.log(jobsApplied)
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }

            }
            setAppliedJobs(jobsApplied);
            console.log(jobsApplied)

        }
    }, [])
    return (
        <div>
            <h2 className="text-2xl">Jobs I applied: {appliedJobs.length}</h2>
            <div>
                {
                    appliedJobs.map(job => <div key={job.id} className="p-4 lg:flex border gap-4 rounded-md mb-4 overflow-hidden	">
                        <div className=" flex w-48 h-48 bg-slate-500 items-center justify-center p-4">
                            <img src={job.logo} alt="" className="max-w-28" />
                        </div>
                        <div className="mt-4">
                            <p>{job.job_title} </p>
                            <p>{job.company_name}</p>
                            <div className="mt-4">
                                <button className="px-5 py-2 font-extrabold border rounded text-indigo-400  border-indigo-400 mr-4">{job.remote_or_onsite}</button>
                                <button className="px-5 py-2 font-extrabold border rounded text-indigo-400  border-indigo-400 mr-4">{job.job_type}</button>
                            </div>
                            <div className="mt-4 mb-4 flex gap-4">
                                <h2 className="flex gap-2"><MdOutlineLocationOn className="text-2xl" />
                                    {job.location}</h2>
                                <h2 className="flex gap-2"><AiOutlineDollar className="text-2xl" />
                                    {job.salary}</h2>

                            </div>

                        </div>
                        <div className="lg:flex justify-center items-center lg:ml-96">
                            <button className="btn btn-primary">View Details</button>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;