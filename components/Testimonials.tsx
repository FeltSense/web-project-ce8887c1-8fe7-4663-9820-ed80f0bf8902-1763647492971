
import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Chic Threads has completely transformed my wardrobe! The quality is amazing, and their customer service is top-notch. I always find something unique.",
      name: "Sarah L.",
      title: "Fashion Enthusiast",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
    },
    {
      id: 2,
      quote: "I'm always looking for sustainable fashion, and Chic Threads delivers. Stylish, ethical, and comfortable pieces that last. Highly recommend!",
      name: "Jessica P.",
      title: "Eco-conscious Shopper",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
    },
    {
      id: 3,
      quote: "Their curated collection makes it easy to find stunning outfits for any occasion. Every purchase feels special, and I always get compliments.",
      name: "Emily R.",
      title: "Boutique Lover",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 4,
    },
    {
      id: 4,
      quote: "Finally, a boutique that understands modern elegance. The fabrics are luxurious, and the designs are timeless. My go-to for statement pieces.",
      name: "Olivia M.",
      title: "Style Icon",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 5,
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.927 5.922a1 1 0 00.95.691h6.223c.969 0 1.371 1.24.588 1.81l-5.028 3.654a1 1 0 00-.364 1.118l1.927 5.922c.3.921-.755 1.688-1.539 1.118l-5.028-3.654a1 1 0 00-1.176 0l-5.028 3.654c-.784.57-1.838-.197-1.539-1.118l1.927-5.922a1 1 0 00-.364-1.118L1.139 11.35c-.783-.57-.381-1.81.588-1.81h6.223a1 1 0 00.95-.691l1.927-5.922z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">What our customers say</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Hear from our Chic Threads Family</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Real stories from real people who love the unique style and quality of Chic Threads Boutique.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between rounded-3xl bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <div>
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-6 text-lg leading-8 text-gray-900">
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                </blockquote>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
