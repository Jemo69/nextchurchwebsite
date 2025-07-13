import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LogoutButton } from "./LogoutButton";
import AdminSidebar from "../../components/AdminSidebar";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth");

  if (!auth) {
    redirect("/admin/login");
  }

  return (
    <div className="flex h-screen bg-background-100">
      <AdminSidebar />
      <div className="flex-1 md:ml-72">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-text-100 mb-2">
                Admin Dashboard
              </h1>
              <p className="text-text-300">
                Manage your church website content
              </p>
            </div>
            <LogoutButton />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Posts Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.586-1.414l-3.5-3.5A2 2 0 0012.586 4H7a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">Blog</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Blog Posts</h3>
              <p className="text-white/80 text-sm mb-4">
                Create and manage your blog content
              </p>
              <a
                href="/admin/blog"
                className="inline-flex items-center text-white hover:text-white/80 transition-colors"
              >
                Manage Posts
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Prayer Requests Card */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">Prayer</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Prayer Requests
              </h3>
              <p className="text-white/80 text-sm mb-4">
                View and manage prayer requests
              </p>
              <a
                href="/admin/prayer-requests"
                className="inline-flex items-center text-white hover:text-white/80 transition-colors"
              >
                View Requests
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Newsletter Card */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">Newsletter</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Newsletter</h3>
              <p className="text-white/80 text-sm mb-4">
                Manage newsletter posts
              </p>
              <a
                href="/admin/newsletter"
                className="inline-flex items-center text-white hover:text-white/80 transition-colors"
              >
                Manage Newsletter
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Questions Card */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">Questions</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Questions</h3>
              <p className="text-white/80 text-sm mb-4">
                Manage questions and FAQs
              </p>
              <a
                href="/admin/questions"
                className="inline-flex items-center text-white hover:text-white/80 transition-colors"
              >
                Manage Questions
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Email Contacts Card */}
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">Contacts</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Email Contacts
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Manage email subscribers
              </p>
              <a
                href="/admin/emailcontact"
                className="inline-flex items-center text-white hover:text-white/80 transition-colors"
              >
                View Contacts
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* About Me Card */}
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">About</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">About Me</h3>
              <p className="text-white/80 text-sm mb-4">
                Manage about me content
              </p>
              <a
                href="/admin/aboutme"
                className="inline-flex items-center text-white hover:text-white/80 transition-colors"
              >
                Manage About
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
