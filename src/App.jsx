import { Header, JobList, JobForm, JobPreview } from './components';
import { useJobContext } from './context/JobContext';

const App = () => {
  const { livePreviewToggle } = useJobContext();
  return (
    <>
      <Header />
      <div className='flex p-8 gap-14'>

        <div className='w-1/6'>
          <JobList />
        </div>
        <div className='w-2/6'>
          <JobForm />
        </div>
        <div className='w-3/6'>
          {livePreviewToggle && <JobPreview />}
        </div>

      </div>
    </>
  );
};

export default App;
