import Typography from '@mui/material/Typography';

function AICallTime() {


  return (
    <div className=" flex flex-col flex-auto shadow rounded-2xl overflow-hidden h-full">
      <div className="bg-[#f8f8fb] h-full p-4">
        <p className="text-xl font-semibold">AI 通話時間</p>
        <div className="text-center">
          <Typography className="pt-5 text-2xl font-bold tracking-tight leading-non" fontSize={"28px"}>
            16時間35分
          </Typography>
        </div>
      </div>

    </div>
  );
}

export default AICallTime;
