import './Home.scss'
import { components } from '../../components/allComponents'

function Home() {
  const { InfoCard, Liner } = components
  return (
    <div className="home-main">
      <InfoCard />
      <Liner />
    </div>
  )
}

export default Home
