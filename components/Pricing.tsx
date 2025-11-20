import React from 'react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      frequency: '/month',
      features: [
        '5 Products',
        'Basic Analytics',
        'Email Support',
        'Customizable Storefront',
        'SEO Tools',
      ],
      buttonText: 'Get Started',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$79',
      frequency: '/month',
      features: [
        'Unlimited Products',
        'Advanced Analytics',
        'Priority Support',
        'Customizable Storefront',
        'SEO Tools',
        'Discount Codes',
        'Inventory Management',
      ],
      buttonText: 'Choose Pro',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      frequency: '/month',
      features: [
        'All Pro Features',
        'Dedicated Account Manager',
        '24/7 Phone Support',
        'Custom Integrations',
        'Advanced Security',
        'API Access',
        'White-Glove Onboarding',
      ],
      buttonText: 'Contact Sales',
      highlight: false,
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Affordable Plans</span>
          <h2 className="mt-2 text-4xl font-bold font-heading text-gray-900 dark:text-white">
            Simple, transparent pricing for everyone.
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Find the perfect plan for your boutique, from startups to large enterprises.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-xl shadow-lg dark:shadow-xl border-2 ${
                plan.highlight
                  ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-indigo-500'
                  : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 -mt-4 -mr-4 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full uppercase tracking-wider">
                  Popular
                </div>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className={`mt-4 ${plan.highlight ? 'text-indigo-100' : 'text-gray-500 dark:text-gray-400'}`}>
                Perfect for {plan.name === 'Starter' && 'new boutiques'}
                {plan.name === 'Pro' && 'growing businesses'}
                {plan.name === 'Enterprise' && 'large-scale operations'}
                .
              </p>
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                <span className={`ml-1 text-xl font-semibold ${plan.highlight ? 'text-indigo-100' : 'text-gray-500 dark:text-gray-400'}`}>
                  {plan.frequency}
                </span>
              </div>
              <ul className={`mt-8 space-y-4 flex-grow ${plan.highlight ? 'text-indigo-100' : 'text-gray-600 dark:text-gray-300'}`}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className={`h-5 w-5 ${plan.highlight ? 'text-white' : 'text-indigo-500'}`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-10 block w-full py-3 px-6 rounded-md text-center text-lg font-medium transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-white text-indigo-600 hover:bg-gray-100'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;