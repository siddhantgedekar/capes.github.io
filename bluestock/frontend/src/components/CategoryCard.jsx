import { Link } from "react-router-dom";

const CategoryCard = ({image, head, text, link}) => {
  return (
    <div className='col my-2'>
        <div className='stock-card p-3 shadow-lg d-flex rounded'>
            <img src={image} alt="salary" className='m-2 cate-card'/>
            <div>
            <h5>{head}</h5>
            <small className="text">
                {text}
            </small>
            <hr />
            <a href={link} className='text-decoration-none'>View Details</a>
            {/* <div className="links d-flex justify-content-end">
            </div> */}
            </div>
        </div>
    </div>
  )
}

export default CategoryCard