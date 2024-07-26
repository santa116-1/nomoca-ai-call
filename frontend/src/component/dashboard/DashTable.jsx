import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TextField, IconButton, TablePagination
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PropTypes from 'prop-types';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import { Button } from '@mui/base/Button';
import { styled } from '@mui/system';

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
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer>
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
                <IconButton
                  sx={{ borderRadius: 2, backgroundColor: "#EAEFF9", color: "primary.main" }}

                  onClick={handleOpen}
                >
                  <CalendarMonthIcon />
                </IconButton>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  slots={{ backdrop: StyledBackdrop }}
                >
                  <Fade in={open}>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white rounded-lg border border-gray-200 shadow-lg p-6">
                      <h2 id="transition-modal-title" className="text-blue-700 font-semibold mb-2">
                        用件(詳細)
                      </h2>
                      <p id="transition-modal-description" className="text-gray-800 mb-2">
                        インフルエンザの予防接種の予約を取りたいの
                        でお電話いたしました。 出来れば今月の平日午
                        後に予約取りたいのですが可能でしょうか?
                      </p>
                      <div className='flex justify-end'>
                        <Button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700" onClick={handleClose}>OK</Button>
                      </div>
                    </div>
                  </Fade>
                </Modal>
              </TableCell>
              <TableCell>{row.detail.split(' ')[1]}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.caller}</TableCell>
              <TableCell>
                <IconButton sx={{ borderRadius: 2, backgroundColor: "#EAEFF9", color: "primary.main" }}
                >
                  <PhoneIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton sx={{ borderRadius: 2, backgroundColor: "#EAEFF9", color: "primary.main" }}
                >
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

const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});

Backdrop.propTypes = {
  open: PropTypes.bool,
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.1);
  -webkit-tap-highlight-color: transparent;
`;

export default DashTable;
