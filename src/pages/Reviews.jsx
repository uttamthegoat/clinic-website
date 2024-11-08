import { useState } from 'react'
import { Star } from 'lucide-react'
import { orgData } from '../assets/data' // Import the dataset

export default function ReviewsPage() {
  const [visibleReviews, setVisibleReviews] = useState(6)

  const loadMore = () => {
    setVisibleReviews(prevVisible => prevVisible + 6)
  }

  return (
    <div className="bg-blue-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Our Patient Reviews
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orgData.review.slice(0, visibleReviews).map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">{review.name}</h2>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{review.description}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleReviews < orgData.review.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
