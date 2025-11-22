"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock, Users } from "lucide-react"

interface ClassSlot {
  id: string
  name: string
  instructor: string
  time: string
  capacity: number
  enrolled: number
  zoomLink?: string
}

const classesData: Record<string, ClassSlot[]> = {
  "2025-12-22": [
    {
      id: "1",
      name: "Morning Flow",
      instructor: "Sarah",
      time: "8:00 AM",
      capacity: 20,
      enrolled: 18,
      zoomLink: "https://zoom.us/j/123456789",
    },
    {
      id: "2",
      name: "Vinyasa Power",
      instructor: "James",
      time: "10:00 AM",
      capacity: 20,
      enrolled: 20,
      zoomLink: "https://zoom.us/j/234567890",
    },
    {
      id: "3",
      name: "Restorative Yoga",
      instructor: "Emma",
      time: "6:00 PM",
      capacity: 15,
      enrolled: 10,
      zoomLink: "https://zoom.us/j/345678901",
    },
  ],
  "2025-12-23": [
    {
      id: "4",
      name: "Hatha Basics",
      instructor: "Michael",
      time: "9:00 AM",
      capacity: 20,
      enrolled: 15,
      zoomLink: "https://zoom.us/j/456789012",
    },
    {
      id: "5",
      name: "Meditation",
      instructor: "Sarah",
      time: "5:00 PM",
      capacity: 25,
      enrolled: 8,
      zoomLink: "https://zoom.us/j/567890123",
    },
  ],
  "2025-12-24": [
    {
      id: "6",
      name: "Yin Yoga",
      instructor: "Emma",
      time: "7:00 PM",
      capacity: 18,
      enrolled: 14,
      zoomLink: "https://zoom.us/j/678901234",
    },
  ],
}

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState("2025-12-22")
  const [bookedClasses, setBookedClasses] = useState<string[]>([])

  const selectedClasses = classesData[selectedDate] || []

  const handleBookClass = (classId: string) => {
    if (bookedClasses.includes(classId)) {
      setBookedClasses(bookedClasses.filter((id) => id !== classId))
    } else {
      setBookedClasses([...bookedClasses, classId])
    }
  }

  const getDates = () => {
    const dates = []
    const baseDate = new Date("2025-12-22")
    for (let i = 0; i < 7; i++) {
      const date = new Date(baseDate)
      date.setDate(date.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0]
  }

  const formatDisplayDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
  }

  const dates = getDates()

  return (
    <section id="booking" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Book Your Class</h2>
          <p className="text-lg text-muted-foreground">Select a date and join live or recorded sessions</p>
        </div>

        {/* Calendar Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button className="p-2 hover:bg-primary/10 rounded-lg transition">
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {dates.map((date) => {
              const dateStr = formatDate(date)
              const isSelected = dateStr === selectedDate
              return (
                <button
                  key={dateStr}
                  onClick={() => setSelectedDate(dateStr)}
                  className={`px-4 py-3 rounded-lg whitespace-nowrap font-semibold transition ${
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground hover:bg-primary/10"
                  }`}
                >
                  {formatDisplayDate(date)}
                </button>
              )
            })}
          </div>
          <button className="p-2 hover:bg-primary/10 rounded-lg transition">
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Class List */}
        <div className="space-y-4">
          {selectedClasses.length > 0 ? (
            selectedClasses.map((classItem) => {
              const isBooked = bookedClasses.includes(classItem.id)
              const isFull = classItem.enrolled >= classItem.capacity
              return (
                <div
                  key={classItem.id}
                  className={`p-6 rounded-xl border-2 transition ${
                    isBooked ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex-1 min-w-48">
                      <h3 className="text-xl font-bold text-foreground mb-2">{classItem.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">with {classItem.instructor}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {classItem.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {classItem.enrolled}/{classItem.capacity}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {classItem.zoomLink && (
                        <a
                          href={classItem.zoomLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm"
                        >
                          Join Zoom
                        </a>
                      )}
                      <button
                        onClick={() => handleBookClass(classItem.id)}
                        disabled={isFull && !isBooked}
                        className={`px-6 py-2 rounded-lg font-semibold transition ${
                          isBooked
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : isFull
                              ? "bg-muted text-muted-foreground cursor-not-allowed"
                              : "border-2 border-primary text-primary hover:bg-primary/10"
                        }`}
                      >
                        {isBooked ? "Booked" : isFull ? "Full" : "Book Now"}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No classes available for this date</p>
            </div>
          )}
        </div>

        {/* Zoom Info */}
        <div className="mt-12 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
          <h3 className="font-bold text-foreground mb-2">Zoom Class Information</h3>
          <p className="text-muted-foreground">
            All classes are available on Zoom. Click "Join Zoom" to connect. You can also attend in-person at our studio
            in downtown. Make sure to test your audio and video 5 minutes before class starts.
          </p>
        </div>
      </div>
    </section>
  )
}
