import '../InfoCard/InfoCard.scss'
import HomeCardImage from '../../style/images/home-image.jpg'

function InfoCard() {
  return (
    <div className="card-main">
      <div className="title-block">
        <span>FEATURED POST</span>
      </div>
      <div className="info-image">
        <img src={HomeCardImage} />
      </div>
      <div className="info-text">
        <div className="date">
          <div className="date-time">Nov 29, 2022</div>
          <div className="circle"></div>
          <div className="read-time">2 min</div>
        </div>
        <div className="title">
          Back to Fiction: What I'm Reading This Summer
        </div>
        <div className="article">
          Create a blog post subtitle that summarizes your post in a few short,
          punchy sentences and entices your audience to continue reading....
        </div>
      </div>
    </div>
  )
}

export default InfoCard
