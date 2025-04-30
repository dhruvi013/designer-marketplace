// EventsPage.jsx

import React, { useState } from "react";

const events = [
  {
    id: 1,
    title: "Ethnic Fashion Fiesta",
    date: "May 10, 2025",
    location: "Mumbai, India",
    description: "Celebrate tradition with a modern twist in our Ethnic Wear Runway. Open to all designers and models.",
    image: "https://www.5thavenueeventmanagement.com/wp-content/uploads/2023/06/5th-Avenue-Event-Management-Fashion-Shows-scaled.jpg",
  },
  {
    id: 2,
    title: "Bold & Beautiful: Body Positivity Show",
    date: "June 5, 2025",
    location: "Delhi, India",
    description: "An inclusive fashion event featuring all body types. Redefine beauty with your unique style!",
    image: "https://www.hamstech.com/wp-content/uploads/2023/01/Title-Image-11.jpg",
  },
  {
    id: 3,
    title: "Fusion Vibes – Style Meets Culture",
    date: "June 25, 2025",
    location: "Bangalore, India",
    description: "Where global culture meets fashion innovation. Join us with your creative designer collections.",
    image: "https://www.rathoreuniversity.com/wp-content/uploads/2024/12/brds-annual-fashion-show-2024-slide-3.jpg",
  },
  {
    id: 1,
    title: "Ethnic Fashion Fiesta",
    date: "May 10, 2025",
    location: "Mumbai, India",
    description: "Celebrate tradition with a modern twist in our Ethnic Wear Runway. Open to all designers and models.",
    image: "https://www.5thavenueeventmanagement.com/wp-content/uploads/2023/06/5th-Avenue-Event-Management-Fashion-Shows-scaled.jpg",
  },
  {
    id: 2,
    title: "Bold & Beautiful: Body Positivity Show",
    date: "June 5, 2025",
    location: "Delhi, India",
    description: "An inclusive fashion event featuring all body types. Redefine beauty with your unique style!",
    image: "https://www.hamstech.com/wp-content/uploads/2023/01/Title-Image-11.jpg",
  },
  {
    id: 3,
    title: "Fusion Vibes – Style Meets Culture",
    date: "June 25, 2025",
    location: "Bangalore, India",
    description: "Where global culture meets fashion innovation. Join us with your creative designer collections.",
    image: "https://www.rathoreuniversity.com/wp-content/uploads/2024/12/brds-annual-fashion-show-2024-slide-3.jpg",
  },

];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleApply = (event) => {
    setSelectedEvent(event);
    alert(`You clicked apply for "${event.title}". You can redirect to an application form here.`);
  };

  return (
    <div className="bg-white py-12 px-6 min-h-screen mt-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Upcoming Fashion Events
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {events.map((event) => (
          <div key={event.id} className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-1 text-gray-800">{event.title}</h2>
              <p className="text-sm text-gray-500">{event.date} | {event.location}</p>
              <p className="text-gray-700 mt-3 mb-5">{event.description}</p>
              <button
                onClick={() => handleApply(event)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full transition"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
