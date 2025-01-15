import { Audience } from './components/chart/Audience'
import { DailyPlayer } from './components/chart/DailyPlayer'
import { RepartitionPieChart } from './components/chart/RepartitionPieChart'
import { KeyNumber } from './components/Heading/KeyNumber'
import { FilterBar } from './components/ui/FitlerBar'
import { SideBar } from './components/ui/SideBar'


export default function App() {
  return (
    <div className='flex'>
      <div>
        <SideBar />
      </div>
      <div className='p-10'>
        <h1 className='text-2xl py-10'>
          Bievenue sur votre Récap du mois
        </h1>
        <FilterBar />
        <KeyNumber />
        <div>
        </div>
        <div className='flex'>
          <div className='w-2/3'>
            <Audience />
          </div>
          <DailyPlayer />
        </div>
        <div>
          <div>
            <RepartitionPieChart/>
          </div>
        </div>
      </div>
    </div >
  )
}