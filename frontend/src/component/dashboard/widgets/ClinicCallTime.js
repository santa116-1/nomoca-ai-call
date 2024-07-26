import Typography from '@mui/material/Typography';

function ClinicCallTime() {
  return (
    <div className=" flex flex-col flex-auto shadow overflow-hidden rounded-2xl">
      <div className="bg-[#f8f8fb] h-full p-4">
        <p className="text-xl font-semibold">医院通話時間 (転送)</p>
        <div className="text-center">
          <Typography className=" pt-5 text-2xl font-bold tracking-tight leading-non" fontSize={"28px"}>
            3時間10分
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ClinicCallTime;
