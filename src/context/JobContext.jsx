/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {

    const [jobs, setJobs] = useState([
        { id: 1, jobTitle: 'Job 1', introduction: 'Introduction 1', rolesResponsibilities: 'Roles & Responsibilities 1', experienceRangeMin: '', experienceRangeMax: '', qualifications: '', salaryRange: '', callToAction: '', company: '', jobLocation: '', jobType: '', labels: '', showTitleInPreview: false, showDescriptionInPreview: false },
    ]);

    const [showFields, setShowFields] = useState({
        jobTitle: true,
        introduction: true,
        rolesResponsibilities: true,
        experience: true,
        qualifications: true,
        salary: true,
        callToAction: true,
        company: true,
        jobLocation: true,
        jobType: true,
        labels: true,
    });

    const [selectedJob, setSelectedJob] = useState(null);

    const [livePreviewToggle, setLivePreviewToggle] = useState(false);

    const handleSelectJob = (job) => {
        setSelectedJob(job);
    };

    const handleAddJob = (newJob) => {
        setJobs([...jobs, newJob]);
        setSelectedJob(newJob);
    };

    const toggleField = (fieldName) => {
        setShowFields((prevFields) => ({
            ...prevFields,
            [fieldName]: !prevFields[fieldName],
        }));
    };

    const handleJobFormChange = (updatedJob) => {
        const updatedJobs = jobs.map(job => {
            if (job.id === updatedJob.id) {
                return updatedJob;
            }
            return job;
        });
        setJobs(updatedJobs);
        setSelectedJob(updatedJob);
    };

    const handleDuplicateJob = (duplicatedJob) => {
        setJobs([...jobs, duplicatedJob]);
        setSelectedJob(duplicatedJob);
    };

    const handleDeleteJob = (jobId) => {
        setJobs(jobs.filter(job => job.id !== jobId));
        setSelectedJob(null);
    };

    const handleLivePreviewToggle = () => {
        setLivePreviewToggle(toggle => !toggle);
    }

    return (
        <JobContext.Provider value={{ jobs, selectedJob, handleSelectJob, handleAddJob, handleJobFormChange, showFields, toggleField, handleDuplicateJob, handleDeleteJob, livePreviewToggle, handleLivePreviewToggle }}>
            {children}
        </JobContext.Provider>
    );
};

export const useJobContext = () => useContext(JobContext);
