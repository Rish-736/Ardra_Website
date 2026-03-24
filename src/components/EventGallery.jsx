"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const EventGallery = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      name: "Outreach @ Takshilah School",
      cover: "/takshilah.png",
      images: ["/takshilah-1.png", "/takshilah-2.png", "/takshilah-3.png"],
      description:
        "Team Ardra had the opportunity to engage with the students of the Takshilah Global School...",
    },
    {
      id: 2,
      name: "GRAVITAS 2025",
      cover: "/gravitas.png",
      images: ["/gravitas-1.png", "/gravitas-2.png", "/gravitas-3.png"],
      description:
        "During Gravitas at VIT, Team Ardra showcased its autonomous drone systems...",
    },
    {
      id: 3,
      name: "STAR PARTY",
      cover: "/Starparty.png",
      images: ["/Starparty-1.png", "/Starparty-2.png", "/Starparty-3..png"],
      description:
        "At the SEDS VIT Star Party, Team Ardra showcased a live drone flight...",
    },
    {
      id: 4,
      name: "ASTSF 2025",
      cover: "/ASTSF.png",
      images: ["/ASTSF-1.png", "/ASTSF-2.png"],
      description:
        "Team Ardra had the privilege of showcasing our innovations at ASTSF...",
    },
  ];

  useEffect(() => {
    if (!selectedEvent) return;

    const event = events.find((e) => e.id === selectedEvent);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % event.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedEvent]);

  const selectedEventData = events.find((e) => e.id === selectedEvent);

  return (
    <div className="min-h-screen w-full bg-black p-4 md:p-8 text-[#f8f8e2] overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* ALWAYS consistent layout */}
        <div className="flex flex-col md:flex-row w-full gap-6 md:gap-8">

          {/* ================= MAIN VIEW ================= */}
          {selectedEvent && (
            <div className="w-full flex-1">
              <div className="bg-[#231f1f] rounded-3xl overflow-hidden shadow-2xl w-full">
                
                <div className="relative aspect-video">
                  <img
                    src={selectedEventData.images[currentSlide]}
                    alt={selectedEventData.name}
                    className="w-full h-full object-cover"
                  />

                  <button
                    onClick={() =>
                      setCurrentSlide(
                        (currentSlide - 1 + selectedEventData.images.length) %
                          selectedEventData.images.length
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    onClick={() =>
                      setCurrentSlide(
                        (currentSlide + 1) %
                          selectedEventData.images.length
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full"
                  >
                    <ChevronRight />
                  </button>
                </div>

                <div className="p-4 md:p-6">
                  <h2
                    className={`${audiowide.className} text-2xl md:text-3xl mb-4`}
                  >
                    {selectedEventData.name}
                  </h2>
                  <p className="font-nico text-base md:text-lg leading-relaxed">
                    {selectedEventData.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ================= EVENT LIST ================= */}
          <div
            className={`
              w-full
              ${selectedEvent ? "md:w-96 md:flex-shrink-0" : ""}
              flex flex-col
              gap-4 md:gap-6
              md:h-[calc(100vh-6rem)]
              overflow-y-auto
            `}
          >
            {!selectedEvent && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {events.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    setSelectedEvent={setSelectedEvent}
                    setCurrentSlide={setCurrentSlide}
                    selectedEvent={selectedEvent}
                    audiowide={audiowide}
                  />
                ))}
              </div>
            )}

            {selectedEvent &&
              events.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  setSelectedEvent={setSelectedEvent}
                  setCurrentSlide={setCurrentSlide}
                  selectedEvent={selectedEvent}
                  audiowide={audiowide}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({
  event,
  setSelectedEvent,
  setCurrentSlide,
  selectedEvent,
  audiowide,
}) => {
  return (
    <div
      onClick={() => {
        setSelectedEvent(event.id);
        setCurrentSlide(0);
      }}
      className={`
        w-full cursor-pointer rounded-xl overflow-hidden shadow-lg
        transition-all hover:scale-105
        ${selectedEvent === event.id ? "ring-4 ring-blue-500" : ""}
      `}
    >
      <div className="aspect-video relative">
        <img
          src={event.cover}
          alt={event.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <h3
          className={`${audiowide.className} absolute bottom-3 left-3 right-3 text-sm md:text-lg`}
        >
          {event.name}
        </h3>
      </div>
    </div>
  );
};

export default EventGallery;