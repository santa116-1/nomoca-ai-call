import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TextField, IconButton, TablePagination
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const data = [
  { type: '新規予約(当日)', phone: '-', name: '田中一郎', ticket: '-', detail: '-', date: '04/23 12:39:29', status: '完了', caller: '090-4578-6737' },
  { type: '新規予約(明日以降)', phone: '090-4578-6737', name: '田中二郎', ticket: '-', detail: '5月10日 10時00分', date: '05/05 13:27:38', status: '完了', caller: '090-4578-6737' },
  { type: '新規予約(明日以降)', phone: '090-4578-6733', name: '田中三郎', ticket: 'A12345', detail: '5月11日 10時45分', date: '05/10 19:27:38', status: '完了', caller: '090-4578-6733' },
  { type: '新規予約(明日以降)', phone: '090-4578-6740', name: '伊藤', ticket: '-', detail: '6月6日 14時30分', date: '05/05 13:27:38', status: '完了', caller: '090-4578-6740' },
  { type: '新規予約(当日)', phone: '-', name: '佐藤', ticket: '-', detail: '-', date: '04/23 12:39:29', status: '完了', caller: '090-4578-6737' },
  { type: '新規予約(明日以降)', phone: '090-4578-6738', name: '田中二郎', ticket: '-', detail: '5月10日 10時00分', date: '05/05 13:27:38', status: '完了', caller: '090-4578-6737' },
  { type: '新規予約(明日以降)', phone: '090-4578-6739', name: '田中三郎', ticket: 'A12345', detail: '5月11日 10時45分', date: '05/10 19:27:38', status: '完了', caller: '090-4578-6733' },
  { type: '新規予約(明日以降)', phone: '090-4578-6741', name: '伊藤', ticket: '-', detail: '6月6日 14時30分', date: '05/05 13:27:38', status: '完了', caller: '090-4578-6740' },
];

const DashTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>確認</TableCell>
            <TableCell>用件(概要)</TableCell>
            <TableCell>折り返し先番号</TableCell>
            <TableCell>名前</TableCell>
            <TableCell>診察券番号</TableCell>
            <TableCell>用件(詳細)</TableCell>
            <TableCell>希望日</TableCell>
            <TableCell>希望時間</TableCell>
            <TableCell>受電時刻</TableCell>
            <TableCell>電話転送</TableCell>
            <TableCell>発信者番号</TableCell>
            <TableCell>音声</TableCell>
            <TableCell>転送前音声</TableCell>
            <TableCell>メモ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.ticket}</TableCell>
              <TableCell>{row.detail}</TableCell>
              <TableCell>
                <IconButton sx={{ borderRadius: 2, backgroundColor: "#EAEFF9", color: "primary.main" }}>
                  <CalendarMonthIcon />
                </IconButton>
              </TableCell>
              <TableCell>{row.detail.split(' ')[1]}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.caller}</TableCell>
              <TableCell>
                <IconButton sx={{ borderRadius: 2, backgroundColor: "#EAEFF9", color: "primary.main" }} >
                  <PhoneIcon/>
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton sx={{ borderRadius: 2, backgroundColor: "#EAEFF9", color: "primary.main" }}>
                  <PhoneIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <TextField variant="outlined" size="small" placeholder="Memo" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default DashTable;
