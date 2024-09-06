"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button if user scrolls down
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    // Add event listener for scroll
    window.addEventListener("scroll", toggleVisibility)

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  // Scroll to top with smooth behavior
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",  // Changed from "auto" to "smooth"
      })
  }

  return (
    <button
      className={`fixed bottom-4 bg-[#4ae2fa] text-black rounded-sm right-4 p-2 outline-none transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp size={24} />  {/* You can adjust the size here */}
    </button>
  )
}

export default ScrollToTopButton
