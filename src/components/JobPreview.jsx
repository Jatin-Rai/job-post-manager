import { useJobContext } from '../context/JobContext';

const JobPreview = () => {
  const { selectedJob, showFields } = useJobContext();

  const { jobTitle,
    introduction,
    rolesResponsibilities,
    experience,
    qualifications,
    salary,
    callToAction,
    company,
    jobLocation,
    jobType,
    labels, } = showFields;
  
  console.log(selectedJob.labels)

  return (
    <div className='relative p-10 shadow hover:shadow-xl'>

      <span className='absolute top-1 left-8 bg-gray-500 text-white rounded-full px-4'>Live Preview</span>

      {selectedJob && (
        <div className='text-justify text-sm'>

          <div className='mb-6'>
            {jobTitle &&
              <h3 className='text-3xl text-gray-600'>{selectedJob.jobTitle}</h3>
            }

            {labels && <p>{selectedJob.labels}</p>

            }
          </div>

          {introduction &&
            <p className='flex flex-col mb-4'><strong className='text-xl mb-2'>About Us</strong> {selectedJob.introduction}</p>
          }

          {rolesResponsibilities &&
            <p className='flex flex-col mb-4'><strong className='text-xl mb-2'>Roles & Responsibilities</strong> {selectedJob.rolesResponsibilities}</p>
          }

          {experience &&
            <p className='mb-4'><strong className='text-xl'>Preferred Experience:</strong> {selectedJob.experienceRangeMin} to {selectedJob.experienceRangeMax} yrs</p>
          }

          {qualifications &&
            <p className='mb-4'><strong className='text-xl'>Qualifications:</strong> {selectedJob.qualifications}</p>
          }

          {salary &&
            <p className='mb-4'><strong className='text-xl'>Salary:</strong> {selectedJob.salaryRange}</p>
          }

          {callToAction
            && <p className='flex flex-col mb-4'><strong className='text-xl mb-2'>Concluding Statement:</strong> {selectedJob.callToAction}</p>
          }

          {company &&
            <p className="mb-4"><strong className='text-xl'>Company:</strong> {selectedJob.company}</p>
          }

          {jobLocation &&
            <p className="mb-4"><strong className='text-xl'>Job Location:</strong> {selectedJob.jobLocation}</p>
          }

          {jobType &&
            <p className="mb-4"><strong className='text-xl'>Job Type:</strong> {selectedJob.jobType}</p>
          }
        </div>
      )}
    </div>
  );
};

export default JobPreview;
