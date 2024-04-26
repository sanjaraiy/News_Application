import newsImage from '../assets/news.jpg';


function NewsCard({ title, author, description, url, image }) {
  return (
   
      <div className="card mb-3 my-3 mx-3 px-2 px-2" style={{ maxWidth: "345px" }}>
        <img src={image? image : newsImage} style={{height:"200px",width:"360px"}} className="card-img-top" alt="..." />
        <h1>{author}</h1>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description?description.slice(0,90):"Current event. It is information about something that has just happened."}</p>
          <a href={url} className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    
  );
}

export default NewsCard;
