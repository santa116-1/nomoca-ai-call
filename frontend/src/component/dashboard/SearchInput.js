
// import React from 'react';
// const SearchInput = () => {

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <div className="w-1/3">
//           <label className="block text-gray-700 mb-2">医院名</label>
//           <select className="w-full p-2 border border-gray-300 rounded">
//             <option>UR内科クリニック</option>
//             {/* Add more options as needed */}
//           </select>
//         </div>
//         <div className="flex space-x-4">
//           <div>
//             <label className="block text-gray-700 mb-2">受電時刻 (FROM)</label>
//             <input type="date" className="w-full p-2 border border-gray-300 rounded" />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-2">受電時刻 (TO)</label>
//             <input type="date" className="w-full p-2 border border-gray-300 rounded" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchInput;


import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const SearchInput = () => {
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
            受電時刻 (FROM)
          </Typography>
          <DatePicker
            label="YYYY/MM/DD"
            value={fromDate}
            onChange={(newValue) => setFromDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
            inputFormat="yyyy/MM/dd"
          />
        </Box>

        <Typography variant="h6" sx={{ marginX: 2 }}>
          ～
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
            受電時刻 (TO)
          </Typography>
          <DatePicker
            label="YYYY/MM/DD"
            value={toDate}
            onChange={(newValue) => setToDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
            inputFormat="yyyy/MM/dd"
          />
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default SearchInput;
