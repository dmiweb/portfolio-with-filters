const ProjectList = ({ projects }) => {
  return (
    <div className="portfolio__gallery gallery">
      {projects.map((item, index) => {
        return <img key={index} src={item.img} className="gallery__image" alt={true} />
        })}
    </div>
  )
}

export default ProjectList;