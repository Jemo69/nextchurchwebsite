"use client";

import { useState, useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { LogoutButton } from "../dashboard/LogoutButton";

interface EmailContact {
  id: number;
  name: string;
  email: string;
  is_subscriber: boolean;
}

export default function EmailContactPage() {
  const [contacts, setContacts] = useState<EmailContact[]>([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/emailcontact");
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this contact?")) {
      try {
        const response = await fetch(`/api/emailcontact`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          fetchContacts();
        }
      } catch (error) {
        console.error("Error deleting contact:", error);
      }
    }
  };

  return (
    <div className="flex h-screen bg-background-100">
      <AdminSidebar />
      <div className="flex-1 md:ml-72">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-text-100">Email Contacts</h1>
            <LogoutButton />
          </div>

          <div className="bg-background-200 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-text-100 mb-6">
              All Email Contacts
            </h2>

            {contacts.length === 0 ? (
              <p className="text-text-300 text-center py-8">
                No email contacts found.
              </p>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="border border-gray-300 p-4 rounded-lg bg-background-100"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-text-100">
                          {contact.name}
                        </h3>
                        <p className="text-text-300 text-sm">{contact.email}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            contact.is_subscriber
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {contact.is_subscriber
                            ? "Subscriber"
                            : "Not Subscribed"}
                        </span>
                        <button
                          onClick={() => handleDelete(contact.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
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
