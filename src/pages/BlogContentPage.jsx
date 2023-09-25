import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BlogContent from "../components/BlogContent"

const BlogContentPage = ({blogs}) => {
    return ( <>
        <Navbar />
        <BlogContent blogs={blogs?blogs:""}/>
        <Footer />
    </> );
}
 
export default BlogContentPage;