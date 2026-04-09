'use client';

import {useEffect, useState} from 'react';
import { fetchAbout } from '@/lib/fetchapi';

interface AboutData{
  about_id: number;
  store_name: string;
  contact_number: string;
  store_location: string;
  store_email: string;
}

export function AboutSection() {
const [aboutData, setAboutData] = useState<AboutData | null>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null> (null);

useEffect(() => {

  const getAboutData = async () => {
    try{
      setLoading(true);
      const data = await fetchAbout();
      if(data){
        setAboutData(data[0])
      }
      else{
        setError('No Data found');
      }
    }
    catch(error){
      console.error('Error fetching about section', error);
      setError(error instanceof Error ? error.message: 'Unkown error occured');
    }
    finally{
      setLoading(false);
    }
  };
getAboutData();
}, []);


if (loading){
return (
      <section id="about" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-text-secondary">Loading about information...</p>
        </div>
      </section>
    );
}

if(error || !aboutData){
  return (
      <section id="about" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-red-600">Unable to load about information</p>
        </div>
      </section>
    );
}

return (
    <section id="about" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-text-primary mb-12 text-center">
          About
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* About Us - Dynamic from database */}
          <div className="rounded-2xl bg-beige-light border border-beige p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-text-primary mb-3">About us</h2>
            <p className="text-text-secondary leading-relaxed">
              {aboutData.store_name} brings you curated furnishings and decor for every room—bed, bath, kitchen, and beyond. We focus on quality, comfort, and style to help you create a home you love.
            </p>
          </div>

          {/* Contact - Dynamic from database */}
          <div className="rounded-2xl bg-beige-light border border-beige p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-text-primary mb-3">Contact</h2>
            <p className="text-text-secondary leading-relaxed">
              Get in touch for orders and enquiries.
            </p>
            <ul className="mt-3 space-y-1 text-text-secondary">
              <li>Email: {aboutData.store_email}</li>
              <li>Phone: {aboutData.contact_number}</li>
            </ul>
          </div>

          {/* Store Location - Dynamic from database */}
          <div className="rounded-2xl bg-beige-light border border-beige p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-text-primary mb-3">Store location</h2>
            <p className="text-text-secondary leading-relaxed">
              Visit our store to explore our full range in person.
            </p>
            <address className="mt-3 not-italic text-text-secondary">
              {aboutData.store_location}
            </address>
          </div>

          {/* Static Section */}
          <div className="rounded-2xl bg-beige-light border border-beige p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-text-primary mb-3">Upcoming events / exhibitions</h2>
            <p className="text-text-secondary leading-relaxed">
              Stay tuned for pop-ups and exhibitions. Follow us for dates and venues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );


}
