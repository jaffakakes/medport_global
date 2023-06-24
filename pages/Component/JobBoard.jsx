import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '@/utils/firebase'; 

const JobsBoard = () => {
    const [jobs, setJobs] = useState([]);
  
    useEffect(() => {
      const fetchJobs = async () => {
        const snapshot = await getDocs(collection(db, "jobs"));
        const jobsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setJobs(jobsData);
      };
  
      fetchJobs();
    }, []);
  
    return (
        <div className="max-w-5xl mx-auto mt-12 bg-white min-h-screen">
          {jobs.map((job) => (
            <div key={job.id} className="mb-10 shadow-lg p-8 rounded">
              <h2 className="text-3xl font-bold mb-2 text-main">{job.JobTitle}</h2>
              <h3 className="text-xl font-semibold mb-2">{job.Company_Name}</h3>
              <p className="mb-4 text-gray-500">Location: {job.Location}</p>
              <p className="mb-4 text-gray-500">Employment Type: {job.Employment_type}</p>
              <p className="mb-6">{job.JobDescription}</p>
              <button 
                className="py-2 px-4 bg-main text-white rounded hover:bg-blue-600 transition"
                onClick={() => window.open(job.link, "_blank")}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      );
      
};
  
export default JobsBoard;
