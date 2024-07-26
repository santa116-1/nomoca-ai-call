import CallAmount from '../../component/dashboard/widgets/CallAmount';
import ClinicCallTime from '../../component/dashboard/widgets/ClinicCallTime';
import AICallTime from '../../component/dashboard/widgets/AICallTime';
import ChartDate from '../../component/dashboard/widgets/ChartDate';
import ChartTimme from '../../component/dashboard/widgets/ChartTimme';
import CustomDonutChart from '../../component/dashboard/CustomDonutChart';
import DetailsTable from '../../component/dashboard/DetailsTable';
import SearchInput from '../../component/dashboard/SearchInput';
import Container from '../../component/dashboard/Container';

function HomeTab() {
  return (
    <Container>
      <SearchInput />
      <div className=' grid grid-cols-2 gap-5'>
        <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-5'>
          <div className='col-span-2  grid grid-rows-1 sm:grid-rows-1 md:grid-rows-2 gap-5'>
            <CallAmount />
            <AICallTime />
            <ClinicCallTime />
          </div>
          <div className="col-span-3">
            <CustomDonutChart />
          </div>
        </div>
        <div>
          <DetailsTable />
        </div>
      </div>
      <div className=' grid grid-cols-2 gap-5 mt-5'>
        <ChartDate />
        <ChartTimme />
      </div>
    </Container>
  );
}

export default HomeTab;
