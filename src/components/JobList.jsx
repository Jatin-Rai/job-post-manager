import { useJobContext } from '../context/JobContext';
import { FaTrashAlt, FaCopy } from "react-icons/fa";

const JobList = () => {
    const { jobs, handleSelectJob, handleAddJob, handleDeleteJob, handleDuplicateJob } = useJobContext();

    const handleJobClick = (job) => {
        handleSelectJob(job);
    };

    const handleAddNewJob = () => {
        const newJob = {
            id: Date.now(),
            jobTitle: `Job ${jobs.length + 1}`,
            introduction: '',
            rolesResponsibilities: '',
            experienceRangeMin: '',
            experienceRangeMax: '',
            qualifications: '',
            salaryRange: '',
            callToAction: '',
            company: '',
            jobLocation: '',
            jobType: '',
            labels: [],
            showTitleInPreview: false,
            showDescriptionInPreview: false
        };
        handleAddJob(newJob);
    };

    const handleDuplicate = (job) => {
        const duplicatedJob = { ...job, id: Date.now() };
        handleDuplicateJob(duplicatedJob);
    };

    const handleDelete = (jobId) => {
        handleDeleteJob(jobId);
    };

    return (
        <div>
            <button
                className='w-full text-gray-500 rounded shadow p-2 mb-2 hover:bg-green-400 hover:text-white' onClick={handleAddNewJob}
            >
                New Job +
            </button>

            <ul className='text-center bg-gray-100 cursor-pointer'>

                {jobs.map(job => (
                    <li key={job.id} className='flex justify-between items-center border-b-2 border-gray-700 text-gray-700 p-2 hover:bg-gray-400'>
                        
                        <span onClick={() => handleJobClick(job)}>{job.jobTitle}</span>

                        <div className='flex'>
                            <FaCopy onClick={() => handleDuplicate(job)} className="text-blue-500 mr-4" />
                            <FaTrashAlt onClick={() => handleDelete(job.id)} className="text-red-500 mr-2" />
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default JobList;
