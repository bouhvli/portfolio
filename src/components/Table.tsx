import React from 'react';
import TableRow from './TableRow';

interface Job {
  id: string;
  name: string;
  status: string;
  progress: number;
  createdAt: string;
}

interface TableProps {
  jobs: Job[];
}

const Table: React.FC<TableProps> = ({ jobs }) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-[#f8f9fc]">
      <table className="w-full">
        <thead>
          <tr className="bg-[#f8f9fc]">
            <th className="px-4 py-3 text-left text-[#0e121b] text-sm font-medium">Job ID</th>
            <th className="px-4 py-3 text-left text-[#0e121b] text-sm font-medium">Name</th>
            <th className="px-4 py-3 text-left text-[#0e121b] text-sm font-medium">Status</th>
            <th className="px-4 py-3 text-left text-[#0e121b] text-sm font-medium">Progress</th>
            <th className="px-4 py-3 text-left text-[#0e121b] text-sm font-medium">Created At</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <TableRow key={job.id} job={job} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
