import FooterSection from "../../components/Footer/FooterSection"
import BlogFilter from "./components/BlogFilter"
import BlogHeroSection from "./components/BlogHeroSection"


const page = () => {
  return (
    <div className="min-h-screen mx-auto">
            <BlogHeroSection/>
            <BlogFilter />
            <FooterSection />
    </div>
  )
}

export default page