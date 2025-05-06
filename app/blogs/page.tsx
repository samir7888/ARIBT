import BlogFilter from "./components/BlogFilter"
import BlogHeroSection from "./components/BlogHeroSection"


const page = () => {
  return (
    <div className="min-h-screen mx-auto">
            <BlogHeroSection/>
            <BlogFilter />
    </div>
  )
}

export default page