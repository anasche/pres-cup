import React from 'react';
import { Link } from 'react-router-dom';

interface PersonnelTableProps {
  headers: { key: string; label: string; align?: 'left' | 'center' | 'right' }[];
  data: any[];
  linkPrefix: string;
}

const PersonnelTable: React.FC<PersonnelTableProps> = ({ headers, data, linkPrefix }) => {
  return (
    <section className="pb-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="bg-[#0A1045] text-white">
                {headers.map((header, idx) => (
                   <th 
                    key={idx} 
                    className={`p-4 text-[9px] font-bold uppercase tracking-[0.15em] first:rounded-l-md last:rounded-r-md whitespace-nowrap ${
                      header.align === 'center' ? 'text-center' : header.align === 'right' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIdx) => (
                <tr key={rowIdx} className="bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  {headers.map((header, colIdx) => (
                    <td 
                      key={colIdx} 
                      className={`p-5 first:rounded-l-2xl last:rounded-r-2xl border-y border-transparent group-hover:border-gray-100 first:border-l last:border-r ${
                        header.align === 'center' ? 'text-center' : header.align === 'right' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {header.key === 'rank' ? (
                        <span className="text-gray-400 font-bold text-xs">{row[header.key]}</span>
                      ) : header.key === 'name' || header.key === 'horse' ? (
                        <Link 
                          to={`${linkPrefix}/${row.id || '1'}`}
                          className="text-gray-900 font-bold text-xs underline decoration-gray-300 hover:decoration-blue-600 transition-all uppercase tracking-wider"
                        >
                          {row[header.key]}
                        </Link>
                      ) : header.key === 'rating' ? (
                        <span className="inline-block bg-[#1A2F1A] text-white text-[10px] font-black px-3 py-1 rounded-full border border-green-500/50">
                          {row[header.key]}
                        </span>
                      ) : (
                        <span className="text-gray-900 font-bold text-xs tracking-tighter">
                          {row[header.key]}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PersonnelTable;
