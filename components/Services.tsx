
import React from 'react';

const servicesData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-indigo-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
    title: 'Personalized Styling',
    description:
      'Receive expert advice and curated outfit suggestions tailored to your unique taste and body shape.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-indigo-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.443-1.443L13.5 18.75l1.183-.394a2.25 2.25 0 001.443-1.443L16.5 15.75l.394 1.183a2.25 2.25 0 001.443 1.443L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.443 1.443z"
        />
      </svg>
    ),
    title: 'Custom Alterations',
    description:
      'Ensure the perfect fit with our professional alteration services, making every garment feel custom-made.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-indigo-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5V6A1.5 1.5 0 014.5 4.5h11.25zM12.375 11.25l4.5-4.5H16.5a1.5 1.5 0 011.5 1.5v2.25M12.375 11.25L4.5 3.75m7.875 7.5l-2.25 2.25m3.75-3.75V15m-3.75-3.75H15M6.75 18.75h.008v.008H6.75v-.008zM6.75 15h.008v.008H6.75V15zM6.75 11.25h.008v.008H6.75V11.25zM11.25 18.75h.008v.008H11.25v-.008zM11.25 15h.008v.008H11.25V15zM11.25 11.25h.008v.008H11.25V11.25zM15.75 18.75h.008v.008H15.75v-.008zM15.75 15h.008v.008H15.75V15z"
        />
      </svg>
    ),
    title: 'Wardrobe Refresh',
    description:
      'Revitalize your closet with a professional wardrobe consultation, decluttering, and new essential pieces.',
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Our Offerings
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Chic Threads Boutique Services
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Experience the difference with our dedicated services designed to elevate your style and confidence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition-colors duration-300 mx-auto">
                {service.icon}
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-4 text-base text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
