import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  ShoppingBag, 
  DollarSign, 
  TrendingUp, 
  Activity,
  Calendar,
  Bell,
  Search,
  Menu,
  X,
  ChevronRight,
  Package,
  Settings,
  LogOut,
  Home,
  FileText,
  Edit3,
  Trash2,
  Plus
} from 'lucide-react';

interface DashboardPageProps {
  language: 'fr' | 'en';
}

const DashboardPage: React.FC<DashboardPageProps> = ({ language }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('http://localhost:3001/stats/dashboard');
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const getIconForStat = (title: string) => {
    if (title.includes('Revenue')) return <DollarSign className="w-6 h-6" />;
    if (title.includes('Users')) return <Users className="w-6 h-6" />;
    if (title.includes('Sales')) return <ShoppingBag className="w-6 h-6" />;
    return <Activity className="w-6 h-6" />;
  };

  const stats = dashboardData?.stats?.map((stat: any) => ({
    ...stat,
    icon: getIconForStat(stat.title)
  })) || [];

  const recentOrders = dashboardData?.recentOrders || [];
  const blogPosts = dashboardData?.blogPosts || [];
  const revenueOverview = dashboardData?.revenueOverview || [0,0,0,0,0,0,0,0,0,0,0,0];
  const trafficSources = dashboardData?.trafficSources || { organic: 0, direct: 0, social: 0 };
  const recentActivity = dashboardData?.recentActivity || { storageUsage: 0, monthlyTarget: 0, serverLoad: 0 };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Home className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'users', label: 'Customers', icon: <Users className="w-5 h-5" /> },
    { id: 'products', label: 'Products', icon: <Package className="w-5 h-5" /> },
    { id: 'orders', label: 'Orders', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'posts', label: 'Blog Posts', icon: <FileText className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-800">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 flex flex-col`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
              Berakah
            </span>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3">
          <div className="mb-4 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Menu
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-green-50 text-green-700 font-medium' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className={activeTab === item.id ? 'text-green-600' : 'text-slate-400'}>
                  {item.icon}
                </div>
                <span>{item.label}</span>
                {activeTab === item.id && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-500"></div>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-100">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors">
            <LogOut className="w-5 h-5 text-slate-400" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar} 
              className="lg:hidden p-2 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold text-slate-800 capitalize hidden sm:block">
              {activeTab} Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-9 pr-4 py-2 w-64 rounded-full bg-slate-100 border-transparent focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm transition-all"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
              
              <div className="h-8 w-px bg-slate-200 mx-1"></div>
              
              <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img 
                  src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" 
                  alt="Admin User" 
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                />
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-slate-700 leading-none">Admin User</p>
                  <p className="text-xs text-slate-500 mt-1">Administrator</p>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-4 sm:p-6 lg:p-8">
          {loading ? (
            <div className="flex h-full items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
          ) : (
            <>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            {activeTab === 'overview' ? (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Welcome back, Admin 👋</h2>
                  <p className="text-slate-500 text-sm mt-1">Here is what's happening with your project today.</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </>
            ) : activeTab === 'posts' ? (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Blog Posts</h2>
                  <p className="text-slate-500 text-sm mt-1">Manage your website's blog content.</p>
                </div>
                <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">New Post</span>
                </button>
              </>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 capitalize">{activeTab}</h2>
              </div>
            )}
          </div>

          {activeTab === 'overview' && (
            <>
              {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-50 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${stat.isPositive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {stat.icon}
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium px-2.5 py-1 rounded-full ${
                    stat.isPositive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {stat.isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingUp className="w-3 h-3 transform rotate-180" />}
                    {stat.change}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-slate-500 text-sm font-medium mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Chart Area (Mockup) */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Revenue Overview</h3>
                  <p className="text-sm text-slate-500">Monthly revenue and sales performance</p>
                </div>
                <select className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>This Year</option>
                </select>
              </div>
              
              <div className="h-72 w-full flex items-end gap-2 pb-6 pt-4 px-2 relative border-b border-l border-slate-100">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full w-8 flex flex-col justify-between text-xs text-slate-400 pb-6 -ml-8 text-right pr-2">
                  <span>$10k</span>
                  <span>$7.5k</span>
                  <span>$5k</span>
                  <span>$2.5k</span>
                  <span>$0</span>
                </div>
                
                {/* Horizontal grid lines */}
                <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-between pb-6 pointer-events-none">
                  <div className="w-full h-px bg-slate-100"></div>
                  <div className="w-full h-px bg-slate-100"></div>
                  <div className="w-full h-px bg-slate-100"></div>
                  <div className="w-full h-px bg-slate-100"></div>
                  <div className="w-full h-px bg-slate-400"></div>
                </div>

                {/* Bars */}
                {revenueOverview.map((height: number, i: number) => (
                  <div key={i} className="relative flex-1 group flex justify-center h-full items-end z-10">
                    <div 
                      className="w-full max-w-[2rem] bg-green-500 hover:bg-green-400 rounded-t-sm transition-all duration-300 relative cursor-pointer"
                      style={{ height: `${height}%` }}
                    >
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        ${(height * 100).toFixed(0)}
                      </div>
                    </div>
                    {/* X-axis label */}
                    <div className="absolute -bottom-6 text-xs text-slate-400 w-full text-center">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity / Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Quick Stats</h3>
              
              <div className="space-y-6 flex-1">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">Storage Usage</span>
                    <span className="text-slate-500">{recentActivity.storageUsage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${recentActivity.storageUsage}%` }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">Monthly Target</span>
                    <span className="text-slate-500">{recentActivity.monthlyTarget}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${recentActivity.monthlyTarget}%` }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">Server Load</span>
                    <span className="text-slate-500">{recentActivity.serverLoad}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${recentActivity.serverLoad}%` }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="text-sm font-semibold text-slate-800 mb-4">Traffic Sources</h4>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-slate-600">Organic Search</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">{trafficSources.organic}%</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-slate-600">Direct</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">{trafficSources.direct}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-slate-600">Social Media</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">{trafficSources.social}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="mt-8 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-800">Recent Orders</h3>
                <p className="text-sm text-slate-500">Latest transactions from your store</p>
              </div>
              <button className="text-sm font-medium text-green-600 hover:text-green-700 flex items-center gap-1">
                View all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                    <th className="px-6 py-4 font-medium">Order ID</th>
                    <th className="px-6 py-4 font-medium">Customer</th>
                    <th className="px-6 py-4 font-medium">Product</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Amount</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {recentOrders.map((order, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-800">{order.id}</td>
                      <td className="px-6 py-4 text-slate-600">{order.customer}</td>
                      <td className="px-6 py-4 text-slate-600">{order.product}</td>
                      <td className="px-6 py-4 text-slate-500">{order.date}</td>
                      <td className="px-6 py-4 font-medium text-slate-800">{order.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                          order.status === 'Shipped' ? 'bg-purple-100 text-purple-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </>)}

          {activeTab === 'posts' && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-800">All Posts</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                      <th className="px-6 py-4 font-medium">Title</th>
                      <th className="px-6 py-4 font-medium">Author</th>
                      <th className="px-6 py-4 font-medium">Date</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {blogPosts.map((post) => (
                      <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-800">{post.title}</td>
                        <td className="px-6 py-4 text-slate-600">{post.author}</td>
                        <td className="px-6 py-4 text-slate-500">{post.date}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${post.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'}`}>
                            {post.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-blue-600 mx-2 transition-colors"><Edit3 className="w-4 h-4" /></button>
                          <button className="text-slate-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
            </>
          )}
        </main>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default DashboardPage;
