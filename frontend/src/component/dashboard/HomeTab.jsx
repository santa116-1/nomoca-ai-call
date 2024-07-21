import SummaryWidget from './widgets/SummaryWidget';
import OverdueWidget from './widgets/OverdueWidget';
import IssuesWidget from './widgets/IssuesWidget';
import GithubIssuesWidget from './widgets/GithubIssuesWidget';
import CallAmount from './widgets/CallAmount';
import ClinicCallTime from './widgets/ClinicCallTime';
import AICallTime from './widgets/AICallTime';
import ChartDate from './widgets/ChartDate';
import ChartTimme from './widgets/ChartTimme';

function HomeTab() {
  return (
    <div
      className=" w-full min-w-0 p-24"

    >
      <div className=' grid grid-cols-2 gap-5'>
        <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-5'>
          <div className='col-span-2  grid grid-rows-1 sm:grid-rows-1 md:grid-rows-2 gap-5'>
            <CallAmount />
            <AICallTime />
            <ClinicCallTime />
          </div>
          <div className="col-span-3">
            <AICallTime />
          </div>
        </div>
        <div>
          <AICallTime />
        </div>
      </div>

      <div className=' grid grid-cols-2 gap-5 mt-5'>
        <ChartDate />
        <ChartTimme/>
      </div>
    </div>
  );
}

export default HomeTab;
