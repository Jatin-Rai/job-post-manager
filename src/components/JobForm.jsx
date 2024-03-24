import { useJobContext } from '../context/JobContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const JobForm = () => {
    const { selectedJob, handleJobFormChange, toggleField, handleLivePreviewToggle, livePreviewToggle } = useJobContext();

    const handleChange = (e) => {
        const { name, value, checked, options, type } = e.target;

        const updatedData = {
            ...selectedJob,
            [name]: type === 'checkbox' ? checked : name === 'labels' ? Array.from(options).filter(option => option.selected).map(option => option.value) : value,
        };
        handleJobFormChange(updatedData);
    };


    return (
        <div className='flex flex-col p-6 shadow hover:shadow-lg'>

            <label className='flex gap-4'>
                <input type="checkbox" onChange={() => toggleField("jobTitle")} defaultChecked />

                <input type="text" name="jobTitle" className='p-2 border border-gray-400 rounded' value={selectedJob?.jobTitle || ''} onChange={handleChange} placeholder="Job Title" />

                {selectedJob && <button type="button" className='flex justify-center items-center gap-2 px-4 py-1 bg-green-400 rounded-full text-white' onClick={handleLivePreviewToggle}>{livePreviewToggle ? <FaEyeSlash /> : <FaEye />} Preview</button>}
            </label>

            <br />

            <label className='flex gap-4'>
                <input type="checkbox" onChange={() => toggleField("introduction")} defaultChecked />
                <textarea name="introduction" className='p-2 border border-gray-400 rounded w-full' value={selectedJob?.introduction || ''} onChange={handleChange} placeholder="Introduction"></textarea>
            </label>

            <br />

            <label className='flex gap-4'>
                <input type="checkbox" onChange={() => toggleField("rolesResponsibilities")} defaultChecked />
                <textarea name="rolesResponsibilities" className='p-2 border border-gray-400 rounded w-full' value={selectedJob?.rolesResponsibilities || ''} onChange={handleChange} placeholder="Roles & Responsibilities"></textarea>
            </label>

            <br />

            <label className='flex justify-between'>
                <input type="checkbox" onChange={() => toggleField("experience")} defaultChecked />
                Experience Range (yrs)
                <select name="experienceRangeMin" className='border border-gray-400 rounded p-1' value={selectedJob?.experienceRangeMin || ''} onChange={handleChange}>
                    <option value="">Min</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                </select>
                to
                <select name="experienceRangeMax" className='border border-gray-400 rounded p-1' value={selectedJob?.experienceRangeMax || ''} onChange={handleChange}>
                    <option value="">Max</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                </select>
            </label>

            <br />

            <label className='flex gap-4'>
                <input type="checkbox" onChange={() => toggleField("qualifications")} defaultChecked />
                <input type="text" name="qualifications" className='p-2 border border-gray-400 rounded w-full' value={selectedJob?.qualifications || ''} onChange={handleChange} placeholder="Qualifications" />
            </label>

            <br />

            <label className='flex gap-4'>
                <input type="checkbox" onChange={() => toggleField("salary")} defaultChecked />
                <input type="text" name="salaryRange" className='p-2 border border-gray-400 rounded w-full' value={selectedJob?.salaryRange || ''} onChange={handleChange} placeholder="Salary Range" />
            </label>

            <br />

            <label className='flex gap-4'>
                <input type="checkbox" onChange={() => toggleField("callToAction")} defaultChecked />
                <textarea type="text" name="callToAction" className='p-2 border border-gray-400 rounded w-full' value={selectedJob?.callToAction || ''} onChange={handleChange} placeholder="Call To Action" />
            </label>

            <br />

            <label className='flex gap-4'>
                <input type="checkbox" onChange={() => toggleField("company")} defaultChecked />
                <input type="text" name="company" className='p-2 border border-gray-400 rounded w-full' value={selectedJob?.company || ''} onChange={handleChange} placeholder="Company" />
            </label>

            <br />

            <label className='flex gap-4'>
                <input type="checkbox" onChange={() => toggleField("jobLocation")} defaultChecked />
                <input type="text" name="jobLocation" className='p-2 border border-gray-400 rounded w-full' value={selectedJob?.jobLocation || ''} onChange={handleChange} placeholder="Job Location" />
            </label>

            <br />

            <label className='flex gap-4'>
                <input type="checkbox" onChange={() => toggleField("jobType")} defaultChecked />
                <select name="jobType" className='p-2 border border-gray-400 rounded w-full' value={selectedJob?.jobType || ''} onChange={handleChange}>
                    <option value="">Select Job Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                </select>
            </label>

            <br />

            <label className='flex gap-4'>
                <input type="checkbox" onChange={() => toggleField("labels")} defaultChecked />
                <select name="labels" className='p-2 border border-gray-400 rounded w-full' value={selectedJob?.labels || []} onChange={handleChange}>
                    <option value="">Labels</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Work from office">Work from office</option>
                </select>
            </label>

        </div>
    );
};

export default JobForm;
