import React from 'react';

interface Job {
  id: string;
  name: string;
  status: string;
  progress: number;
  createdAt: string;
}

interface TableRowProps {
  job: Job;
}

const TableRow: React.FC<TableRowProps> = ({ job }) => {
  return (
    <tr className="border-t">
      <td className="px-4 py-2">{job.id}</td>
      <td className="px-4 py-2">{job.name}</td>
      <td className="px-4 py-2">
        <button className="rounded-xl h-8 px-4 bg-[#e7ebf3] text-[#0e121b]">{job.status}</button>
      </td>
      <td className="px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="w-[88px] bg-[#d0d7e7]">
            <div className="h-1 bg-[#195de6]" style={{ width: `${job.progress}%` }}></div>
          </div>
          <p>{job.progress}</p>
        </div>
      </td>
      <td className="px-4 py-2">{job.createdAt}</td>
    </tr>
  );
};

export default TableRow;
