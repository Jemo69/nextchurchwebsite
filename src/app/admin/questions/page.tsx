"use client";

import { useState, useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import CustomInput from "../../components/input";
import SimpleButton from "../../components/button";
import { LogoutButton } from "../dashboard/LogoutButton";

interface Question {
  id: number;
  question: string;
  createdAt: string;
}

export default function QuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [formData, setFormData] = useState({
    question: "",
  });

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("/api/questions");
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = isEditing ? `/api/questions` : `/api/questions`;
      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ question: "" });
        setIsEditing(false);
        setEditingQuestion(null);
        fetchQuestions();
      }
    } catch (error) {
      console.error("Error saving question:", error);
    }
  };

  const handleEdit = (question: Question) => {
    setEditingQuestion(question);
    setFormData({
      question: question.question,
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this question?")) {
      try {
        const response = await fetch(`/api/questions`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          fetchQuestions();
        }
      } catch (error) {
        console.error("Error deleting question:", error);
      }
    }
  };

  return (
    <div className="flex h-screen bg-background-100">
      <AdminSidebar />
      <div className="flex-1 md:ml-72">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-text-100">
              Questions Management
            </h1>
            <LogoutButton />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-background-200 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-text-100 mb-4">
                {isEditing ? "Edit Question" : "Add New Question"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <CustomInput
                  name="question"
                  type="text"
                  placeholder="Enter your question"
                  value={formData.question}
                  onChange={(e) =>
                    setFormData({ ...formData, question: e.target.value })
                  }
                />

                <div className="flex gap-4">
                  <SimpleButton
                    inform={isEditing ? "Update Question" : "Add Question"}
                  />
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        setEditingQuestion(null);
                        setFormData({ question: "" });
                      }}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Questions List */}
            <div className="bg-background-200 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-text-100 mb-4">
                All Questions
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {questions.length === 0 ? (
                  <p className="text-text-300 text-center py-8">
                    No questions found.
                  </p>
                ) : (
                  questions.map((question) => (
                    <div
                      key={question.id}
                      className="border border-gray-300 p-4 rounded-lg bg-background-100"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-text-200 text-sm leading-relaxed">
                          {question.question}
                        </p>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => handleEdit(question)}
                            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(question.id)}
                            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <p className="text-text-400 text-xs">
                        Created:{" "}
                        {new Date(question.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
