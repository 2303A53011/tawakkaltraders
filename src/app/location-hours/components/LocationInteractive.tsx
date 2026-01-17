'use client';

import React from 'react';
import LocationHero from './LocationHero';
import MapSection from './MapSection';
import HoursSchedule from './HoursSchedule';
import ContactCTA from './ContactCTA';

interface DaySchedule {
  day: string;
  hours: string;
  isToday: boolean;
  isOpen: boolean;
}

interface Landmark {
  name: string;
  distance: string;
  direction: string;
  image: string;
  alt: string;
  type: string;
}

interface TransportOption {
  type: string;
  icon: string;
  routes: string[];
  details: string;
}

interface TimeSlot {
  time: string;
  level: 'low' | 'moderate' | 'high';
  label: string;
}

interface DeliveryArea {
  area: string;
  distance: string;
  estimatedTime: string;
  available: boolean;
}

interface ContactMethod {
  type: string;
  icon: string;
  label: string;
  value: string;
  action: string;
  href: string;
}

const LocationInteractive = () => {
  const schedule: DaySchedule[] = [
  { day: "Monday", hours: "06:00 AM - 10:00 PM", isToday: false, isOpen: true },
  { day: "Tuesday", hours: "06:00 AM - 10:00 PM", isToday: false, isOpen: true },
  { day: "Wednesday", hours: "06:00 AM - 10:00 PM", isToday: true, isOpen: true },
  { day: "Thursday", hours: "06:00 AM - 10:00 PM", isToday: false, isOpen: true },
  { day: "Friday", hours: "06:00 AM - 10:30 PM", isToday: false, isOpen: true },
  { day: "Saturday", hours: "06:00 AM - 10:30 PM", isToday: false, isOpen: true },
  { day: "Sunday", hours: "06:00 AM - 10:00 PM", isToday: false, isOpen: true }];


  

  const contactMethods: ContactMethod[] = [
  {
    type: "whatsapp",
    icon: "ChatBubbleLeftRightIcon",
    label: "WhatsApp",
    value: "",
    action: "Message Us",
    href: "https://wa.me/919502819518?text=Hello%2C%20I%20have%20a%20question%20about%20your%20location"
  },
  {
    type: "directions",
    icon: "MapPinIcon",
    label: "Get Directions",
    value: "Navigate to Shop",
    action: "Open Maps",
    href: "https://www.google.com/maps/dir/?api=1&destination=17.93575,80.819917"
  }];


  return (
    <>
      <LocationHero isOpen={true} nextOpenTime="06:00 AM tomorrow" />
      <MapSection
        latitude="17.93575"
        longitude="80.819917"
        placeName="Tawwakal Traders - Heritage Paan Shop" />

      <HoursSchedule schedule={schedule} />

      <ContactCTA contactMethods={contactMethods} />
    </>);

};

export default LocationInteractive;