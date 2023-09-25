import Navbar from '../components/Navbar'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

const HomePage = ({blogs}) => {

    return (<>
        <Navbar />
        <Blogs blogs={blogs?blogs:""}/>
        <Footer />
    </>);
}

export default HomePage;