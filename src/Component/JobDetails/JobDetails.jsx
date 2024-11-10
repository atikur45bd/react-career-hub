import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job)
    const handelApplyJob = () => {
        saveJobApplication(idInt);
        toast("You have applied successfully")
    }
    return (
        <div>
            <div className="">
                <h2 className="text-4xl">Details Job</h2> <br /> <br />

            </div>

            <div className="grid gap-4 md:grid-cols-4">
                
                <div className=" md:col-span-3">

                    <h2 className="text-2xl">Job Details of : {job.job_title}</h2>
                    <p className="text-bold">{job.company_name}</p>
                    <p><span className="font-extrabold">Job Description : </span>{job.job_description}</p><br />
                    <p><span className="font-extrabold">Job Responsibility : </span>{job.job_responsibility}</p><br />
                    <p><span className="font-extrabold">Educational Requirements : </span> <br /> {job.educational_requirements}</p> <br />
                    <p><span className="font-extrabold">Experiences : </span>{job.experiences}</p>
                </div>
                <div className=" bg-indigo-100 p-4 rounded-md  ">
                    <h2 className="text-2xl font-bold my-2">Job Details </h2>
                    <hr />
                    <p><span className="font-bold ">Salary :</span>{job.salary}</p>
                    <p><span className="font-bold">Job Title : </span>{job.job_title}</p> 
                    <h4 className=" font-extrabold my-2">Contact Information</h4>
                   
                    <p><span className="font-bold">Phone  : </span>{job.contact_information.phone}</p>
                    <p><span className="font-bold">Email : </span>{job.contact_information.email}</p>
                    <p><span className="font-bold">Address : </span>{job.contact_information.address}</p>
                    

                    <button onClick={handelApplyJob} className="btn btn-primary w-full mt-4" >Apply Now</button> 
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;