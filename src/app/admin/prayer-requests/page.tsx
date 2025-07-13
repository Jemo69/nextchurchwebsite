"use client";

import { useState, useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { LogoutButton } from "../dashboard/LogoutButton";

interface PrayerRequest {
  id: number;
  name: string;
  email: string;
  message: string;
}

export default function PrayerRequestsPage() {
  const [prayerRequests, setPrayerRequests] = useState<PrayerRequest[]>([]);

  useEffect(() => {
    fetchPrayerRequests();
  }, []);

  const fetchPrayerRequests = async () => {
    try {
      const response = await fetch("/api/prayer-requests");
      const data = await response.json();
      setPrayerRequests(data);
    } catch (error) {
      console.error("Error fetching prayer requests:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this prayer request?")) {
      try {
        const response = await fetch(`/api/prayer-requests`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          fetchPrayerRequests();
        }
      } catch (error) {
        console.error("Error deleting prayer request:", error);
      }
    }
  };

  return (
    <div className="flex h-screen bg-background-100">
      <AdminSidebar />
      <div className="flex-1 md:ml-72">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-text-100">Prayer Requests</h1>
            <LogoutButton />
          </div>

          <div className="bg-background-200 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-text-100 mb-6">All Prayer Requests</h2>
            
            {prayerRequests.length === 0 ? (
              <p className="text-text-300 text-center py-8">No prayer requests found.</p>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {prayerRequests.map((request) => (
                  <div key={request.id} className="border border-gray-300 p-4 rounded-lg bg-background-100">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-text-100">{request.name}</h3>
                        <p className="text-text-300 text-sm">{request.email}</p>
                      </div>
                      <button
                        onClick={() => handleDelete(request.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                    <p className="text-text-200 text-sm leading-relaxed">{request.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 