import Typography from '@mui/material/Typography';

function CallAmount() {


  return (
    <div className=" flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
      <div className="bg-[#f8f8fb] h-full p-4">
        <p className="text-xl font-semibold">受電件数</p>
        <div className="text-center">
        <Typography className="pt-5 text-2xl font-bold tracking-tight leading-non" fontSize={"28px"}>
          350件
        </Typography>
      </div>
      </div>
    </div>
  );
}

export default CallAmount;
