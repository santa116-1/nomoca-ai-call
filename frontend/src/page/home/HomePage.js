import React, { useState } from "react";
import Header from "../../component/common/header";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Notification from "../../component/common/notification";


function createData(title, amount, category, status, keyword, ranking, date) {
  return { title, amount, category, status, keyword, ranking, date };
}

const rows = [
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
  createData(
    "最新相場で高く売れる!車買取おすすめ業者ランキング 100",
    "3,211",
    "車買取の基礎知識",
    "下書き",
    "車買取",
    3,
    "2024/02/02 12:00:00"
  ),
];

const HomePage = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const content = props.content ? props.content : "";

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="relative flex flex-col flex-1 items-start px-40">
        <h1 className="heading font text-[calc(10px+2vmin)] font-semibold mt-16">
          受電結果
        </h1>
        <Paper sx={{ width: "100%", paddingTop: "1rem", marginTop: "2rem" }}>
          {/* <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align} sx={{ paddingY: "2rem" }}>
                              {column.id === "status" ? (
                                <>
                                  <FiberManualRecordIcon
                                    sx={{ color: "#005ed7" }}
                                  />
                                  {value}
                                </>
                              ) : column.id === "ranking" ? (
                                <div className=" flex justify-end items-center gap-2">
                                  <span>3</span>
                                  <div className="bg-[#F5FCFB] py-2 px-4 rounded-full">
                                    <TrendingUpIcon sx={{ color: "#07B9A5" }} />
                                    <span className="ml-2 text-[#07B9A5]">
                                      5
                                    </span>
                                  </div>
                                </div>
                              ) : column.format && typeof value === "number" ? (
                                column.format(value)
                              ) : (
                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer> */}
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
      <Notification content={content} />
    </div>
  );
};

export default HomePage;
