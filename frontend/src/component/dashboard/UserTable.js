import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton,
  TablePagination
} from '@mui/material';
import PropTypes from 'prop-types';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

const users = [
  { name: 'AAAAAクリニック', category: '内科', email: 'aaaaa@example.com', personInCharge: '田中一郎', permission: '利用者' },
  { name: 'ユニロボット株式会社', category: '利用者', email: 'dev@unirobot.com', personInCharge: '郷内政則', permission: '管理者' },
  { name: 'BBBBBクリニック', category: '外科', email: 'BBBBB@example.com', personInCharge: '田中二郎', permission: '利用者' },
  { name: 'CCCCCクリニック', category: '利用者', email: 'ccccc@example.com', personInCharge: '田中三郎', permission: '利用者' },
  { name: 'DDDDDクリニック', category: '小児科', email: 'dddd@example.com', personInCharge: '田中四郎', permission: '利用者' },
  { name: 'EEEEEクリニック', category: '内科', email: 'eeeee@example.com', personInCharge: '田中一郎', permission: '利用者' },
  { name: 'FFFFFクリニック', category: '内科', email: 'fffff@example.com', personInCharge: '田中一郎', permission: '利用者' },
  { name: 'GGGGGクリニック', category: '内科', email: 'ggggg@example.com', personInCharge: '田中一郎', permission: '利用者' },
  { name: 'HHHHHクリニック', category: '耳鼻科', email: 'hhhhh@example.com', personInCharge: '田中一郎', permission: '利用者' },
  { name: 'IIIIIクリニック', category: '整形外科', email: 'iiiii@example.com', personInCharge: '田中一郎', permission: '利用者' }
];

const columns = [
  { id: 'name', label: '利用者名', minWidth: 230 },
  { id: 'sex', label: '種別', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'contact_name',
    label: '担当者名',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'authority',
    label: '権限',
    minWidth: 200,
    align: 'right',
    format: (value) => value.toFixed(2),
  },

];

const UserTable = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isActive, setIsActive] = useState(true);
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
    <div>
      <div className=' flex justify-between mt-5'>
        <div className="flex items-center space-x-2">
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button
              className={`px-4 py-2 ${isActive ? 'bg-gray-200 font-bold' : 'bg-gray-100'}`}
              onClick={() => setIsActive(true)}
            >
              Active
            </button>
            <button
              className={`px-4 py-2 ${!isActive ? 'bg-gray-200 font-bold' : 'bg-gray-100'}`}
              onClick={() => setIsActive(false)}
            >
              Inactive
            </button>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="ml-2 px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}>
            利用者追加
          </Button>
        </div>
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
                利用者情報追加
              </h2>
              <p id="transition-modal-description" className="text-gray-800 mb-2">
                Add image
              </p>
              <div className='flex justify-end'>
                <Button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700" onClick={handleClose}>OK</Button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ borderBottom: "2px solid #ddd" }}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{ borderBottom: "none" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                  <TableRow key={index} sx={{ borderBottom: "1px solid #ddd" }}>
                    <TableCell sx={{ borderBottom: "none" }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{
                          width: 36, height: 36, borderRadius: '50%', backgroundColor: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 8
                        }}>
                          <span style={{ color: 'white' }}>{user.name.charAt(0)}</span>
                        </div>
                        {user.name}
                      </div>
                    </TableCell>

                    <TableCell sx={{ borderBottom: "none" }}>{user.category}</TableCell>
                    <TableCell align="right" sx={{ borderBottom: "none" }}>{user.email}</TableCell>
                    <TableCell align="right" sx={{ borderBottom: "none" }}>{user.personInCharge}</TableCell>
                    <TableCell align="right" sx={{ borderBottom: "none" }}>
                      {user.permission === '管理者' ? (
                        <span style={{ color: 'white', background: '#E31717', padding: '3px', borderRadius: '2px' }}>
                          {user.permission}
                        </span>
                      ) : (
                        <span style={{ background: '#ECF0F1', padding: '3px', borderRadius: '2px' }}>
                          {user.permission}
                        </span>
                      )}
                    </TableCell>
                    <TableCell sx={{ display: "flex", justifyContent: "flex-end", borderBottom: "none", gap: "5px" }}>
                      <IconButton aria-label="edit" sx={{ borderRadius: 2, backgroundColor: "#EAEFF9", color: "primary.main" }}>
                        <MdOutlineEdit className='w-4 h-4' />
                      </IconButton>
                      <IconButton color='error' aria-label="delete" sx={{ borderRadius: 2, backgroundColor: "#FCEBEB" }}>
                        <RiDeleteBin6Line className='w-4' />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

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
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;
export default UserTable;
