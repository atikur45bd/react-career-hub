import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList.Jsx";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJob></FeaturedJob>
            
        </div>
    );
};

export default Home;