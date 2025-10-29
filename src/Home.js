import HeaderTop from'./header/headerTop';
import HeaderMid from './header/headerMid';
import HeaderBottom from './header/headerBottom';
import Organic from './body/oragnic';
import Banner from './body/banner';
import Trending  from './body/trending';
import ThreeButtons from './body/threebuttons';
import MostView from './body/mostview';
import BestSeller from './body/bestseller';
import BlogPosts from './body/blogposts';
import FeaturedProducts from './body/featuredProducts';
import TrendingProductsImages from './body/trendingimg';
import MostProductsImages from './body/mostviewproducts';
import Banner2 from './body/banner2';
import BestSellerImages from './body/bestsellerimgs';
import BlogImag from './body/blog';
import BannerBig from './body/bannerBig';
import FeaturedProductsImages from './body/featuredImages';
import Brandlogos from './body/brandlogos';
import FooterTop from './footer/footertop';
import MainFooter from './footer/mainfooter';
import UpwardButton from './footer/buttonupward';

// import { Route, Routes } from 'react-router-dom';
// import Register from './newpages/register';
// import Home from './Home';
function Home()
{
    return(
        <>

    <HeaderTop></HeaderTop>
      <HeaderMid></HeaderMid>
      <HeaderBottom></HeaderBottom>
      <Organic></Organic>
      <Banner></Banner>
      <Trending></Trending>
      <ThreeButtons></ThreeButtons>
       <TrendingProductsImages></TrendingProductsImages>
      <MostView></MostView>
      <MostProductsImages></MostProductsImages>
      <Banner2></Banner2>
      <BestSeller></BestSeller>
      <BestSellerImages></BestSellerImages>
      <BlogPosts></BlogPosts>
      <BlogImag></BlogImag>
      <BannerBig></BannerBig>
      <FeaturedProducts></FeaturedProducts>
      <FeaturedProductsImages></FeaturedProductsImages>
      <Brandlogos></Brandlogos>
      <FooterTop></FooterTop>
      <UpwardButton></UpwardButton>
      <MainFooter></MainFooter>

        </>
    )
}
export default Home;