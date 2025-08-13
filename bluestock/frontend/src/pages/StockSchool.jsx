import CategoryCard from '../components/CategoryCard'
import Navbars from "../components/Navbars"
import Salary from '../salary.png'
import TechPage from './TechPage'

const StockSchool = () => {
  return (
    <div>
        <Navbars />
        <div className="mx-5">
            <div className="mt-5">
                <a href="/" className='text-decoration-none'>Home</a>
                <a className='mx-2 text-decoration-none text-secondary'>&gt;</a>
                <a className='text-secondary text-decoration-none'>Stock School</a>
            </div>

            <div className="categories my-5">
                <h2 className="fw-bold">Categories</h2>
                <small>Begin your financial market education by exploring a variety of categories.</small>
            </div>

        <div className="row d-flex justify-content-center align-items-center">
            <CategoryCard image={Salary} head={"Basic Finance"} text={"Learn to manage money, choose investments wisely and achieve financial stability."} link={"/techpage"}/>
            <CategoryCard image={Salary} head={"Beginners Stock Market"} text={"Learn stock market terminologies, macroeconomic indicators, IPOs and c..."} link={TechPage}/>
            <CategoryCard image={Salary} head={"Stock Investing"} text={"Explore stock investment basics, analysis, modelling and strategies"} link={TechPage}/>
            <CategoryCard image={Salary} head={"Technical Analysis"} text={"Explore basic to advanced topics for effective trading"} link={"/techpage"}/>
            <CategoryCard image={Salary} head={"Derivatives"} text={"Become familiar with the principles and strategies of derivatives trad..."} link={TechPage}/>
            <CategoryCard image={Salary} head={"Mutual Funds"} text={"Learn important mutual fund concepts for effective financial planning"} link={"/mutualfunds"}/>
            <CategoryCard image={Salary} head={"Derivatives"} text={"Become familiar with the principles and strategies of derivatives trad..."} link={TechPage}/>
            <CategoryCard image={Salary} head={"Derivatives"} text={"Become familiar with the principles and strategies of derivatives trad..."} link={TechPage}/>
            <CategoryCard image={Salary} head={"Derivatives"} text={"Become familiar with the principles and strategies of derivatives trad..."} link={TechPage}/>
            <CategoryCard image={Salary} head={"Derivatives"} text={"Become familiar with the principles and strategies of derivatives trad..."} link={TechPage}/>
            <CategoryCard image={Salary} head={"Derivatives"} text={"Become familiar with the principles and strategies of derivatives trad..."} link={TechPage}/>
          </div>
        </div>
    </div>
  )
}

export default StockSchool