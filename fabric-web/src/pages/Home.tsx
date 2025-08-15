
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import ProductShowcase from '../components/ProductShowcase';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <ProductShowcase />
      <Newsletter />
    </div>
  );
};

export default Home;