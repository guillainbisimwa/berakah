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
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '', excerpt: '', content: '', image: '', date: '', readTime: '', author: '', authorRole: '', language: 'fr'
  });
  const [shopFormData, setShopFormData] = useState({
    image: '', price: '', rating: 5.0, category: 'Tisanes', weight: '70g',
    content: {
      fr: { name: '', desc: '', specs: [''] },
      en: { name: '', desc: '', specs: [''] }
    }
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleOpenModal = (post: any = null) => {
    setSelectedFile(null);
    setImagePreview(null);
    if (post) {
      setEditingPost(post);
      setFormData(post);
      setImagePreview(post.image || null);
    } else {
      setEditingPost(null);
      setFormData({
        title: '', excerpt: '', content: '', image: '', date: new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { day: '2-digit', month: 'long', year: 'numeric' }), readTime: '5 min', author: 'Admin', authorRole: 'Content Creator', language: language
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPost(null);
    setSelectedFile(null);
    setImagePreview(null);
  };

  const handleCloseShopModal = () => {
    setIsShopModalOpen(false);
    setEditingProduct(null);
    setSelectedFile(null);
    setImagePreview(null);
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let finalImageUrl = shopFormData.image;
      
      if (selectedFile) {
        const uploadData = new FormData();
        uploadData.append('file', selectedFile);
        
        const uploadRes = await fetch('http://localhost:3001/products/upload', {
          method: 'POST',
          body: uploadData,
        });
        
        if (uploadRes.ok) {
          const uploadResult = await uploadRes.json();
          finalImageUrl = 'http://localhost:3001' + uploadResult.url;
        }
      }

      const productData = { ...shopFormData, image: finalImageUrl };

      const url = editingProduct ? `http://localhost:3001/products/${editingProduct.id}` : 'http://localhost:3001/products';
      const method = editingProduct ? 'PUT' : 'POST';
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      });
      fetchProducts();
      handleCloseShopModal();
    } catch (err) {
      console.error('Failed to save product', err);
    }
  };

  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let finalImageUrl = formData.image;
      
      if (selectedFile) {
        const uploadData = new FormData();
        uploadData.append('file', selectedFile);
        
        const uploadRes = await fetch('http://localhost:3001/blog/upload', {
          method: 'POST',
          body: uploadData,
        });
        
        if (uploadRes.ok) {
          const uploadResult = await uploadRes.json();
          finalImageUrl = 'http://localhost:3001' + uploadResult.url;
        }
      }

      const postData = { ...formData, image: finalImageUrl };

      const url = editingPost ? `http://localhost:3001/blog/${editingPost.id}` : 'http://localhost:3001/blog';
      const method = editingPost ? 'PUT' : 'POST';
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      });
      fetchPosts();
      handleCloseModal();
    } catch (err) {
      console.error('Failed to save post', err);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://localhost:3001/blog?language=${language}`);
      const data = await response.json();
      setBlogPosts(data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3001/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

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
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [language]);

  const handleDeletePost = async (id: string) => {
    if (window.confirm(language === 'fr' ? 'Êtes-vous sûr de vouloir supprimer cet article ?' : 'Are you sure you want to delete this post?')) {
      try {
        await fetch(`http://localhost:3001/blog/${id}`, { method: 'DELETE' });
        fetchPosts(); // Refresh list
      } catch (err) {
        console.error('Failed to delete post:', err);
      }
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (window.confirm(language === 'fr' ? 'Êtes-vous sûr de vouloir supprimer ce produit ?' : 'Are you sure you want to delete this product?')) {
      try {
        await fetch(`http://localhost:3001/products/${id}`, { method: 'DELETE' });
        fetchProducts(); // Refresh list
      } catch (err) {
        console.error('Failed to delete product:', err);
      }
    }
  };

  const handleSeedProducts = async () => {
    // Add logic later
  };

  const getIconForStat = (title: string) => {
    if (title.includes('Revenue')) return <DollarSign className="w-6 h-6" />;
    if (title.includes('Users')) return <Users className="w-6 h-6" />;
    if (title.includes('Sales')) return <ShoppingBag className="w-6 h-6" />;
    return <Activity className="w-6 h-6" />;
  };

  const stats = dashboardData?.stats?.map((stat: any) => ({
    ...stat,
    title: language === 'fr' 
      ? (stat.title === 'Total Revenue' ? 'Revenu Total' : stat.title === 'Active Users' ? 'Utilisateurs Actifs' : stat.title === 'Total Sales' ? 'Ventes Totales' : 'Taux de Conversion')
      : stat.title,
    icon: getIconForStat(stat.title)
  })) || [];

  const recentOrders = dashboardData?.recentOrders?.map((order: any) => ({
    ...order,
    status: language === 'fr' ? (order.status === 'Completed' ? 'Terminé' : order.status === 'Processing' ? 'En cours' : order.status === 'Shipped' ? 'Expédié' : 'En attente') : order.status
  })) || [];

  const revenueOverview = dashboardData?.revenueOverview || [0,0,0,0,0,0,0,0,0,0,0,0];
  const trafficSources = dashboardData?.trafficSources || { organic: 0, direct: 0, social: 0 };
  const recentActivity = dashboardData?.recentActivity || { storageUsage: 0, monthlyTarget: 0, serverLoad: 0 };

  const navItems = [
    { id: 'overview', label: language === 'fr' ? 'Vue d\'ensemble' : 'Overview', icon: <Home className="w-5 h-5" /> },
    { id: 'analytics', label: language === 'fr' ? 'Analytique' : 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'users', label: language === 'fr' ? 'Clients' : 'Customers', icon: <Users className="w-5 h-5" /> },
    { id: 'shop', label: language === 'fr' ? 'Boutique' : 'Shop', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'products', label: language === 'fr' ? 'Produits' : 'Products', icon: <Package className="w-5 h-5" /> },
    { id: 'orders', label: language === 'fr' ? 'Commandes' : 'Orders', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'posts', label: language === 'fr' ? 'Articles de Blog' : 'Blog Posts', icon: <FileText className="w-5 h-5" /> },
    { id: 'settings', label: language === 'fr' ? 'Paramètres' : 'Settings', icon: <Settings className="w-5 h-5" /> },
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
            <span>{language === 'fr' ? 'Déconnexion' : 'Logout'}</span>
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
              {language === 'fr' ? 'Tableau de bord ' + activeTab : activeTab + ' Dashboard'}
            </h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder={language === 'fr' ? "Rechercher..." : "Search..."} 
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
                  <p className="text-xs text-slate-500 mt-1">{language === 'fr' ? 'Administrateur' : 'Administrator'}</p>
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
                  <h2 className="text-2xl font-bold text-slate-800">{language === 'fr' ? 'Bon retour, Admin 👋' : 'Welcome back, Admin 👋'}</h2>
                  <p className="text-slate-500 text-sm mt-1">{language === 'fr' ? "Voici ce qui se passe sur votre projet aujourd'hui." : "Here is what's happening with your project today."}</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">
                    {new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </>
            ) : activeTab === 'posts' ? (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">{language === 'fr' ? 'Articles de Blog' : 'Blog Posts'}</h2>
                  <p className="text-slate-500 text-sm mt-1">{language === 'fr' ? "Gérez le contenu du blog de votre site Web." : "Manage your website's blog content."}</p>
                </div>
                <button onClick={() => handleOpenModal()} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === 'fr' ? 'Nouvel Article' : 'New Post'}</span>
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
                  <h3 className="text-lg font-bold text-slate-800">{language === 'fr' ? 'Aperçu des Revenus' : 'Revenue Overview'}</h3>
                  <p className="text-sm text-slate-500">{language === 'fr' ? 'Performance mensuelle des revenus et des ventes' : 'Monthly revenue and sales performance'}</p>
                </div>
                <select className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2">
                  <option>{language === 'fr' ? 'Les 7 derniers jours' : 'Last 7 days'}</option>
                  <option>{language === 'fr' ? 'Les 30 derniers jours' : 'Last 30 days'}</option>
                  <option>{language === 'fr' ? 'Cette année' : 'This Year'}</option>
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
                      {language === 'fr' ? ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'][i] : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity / Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
              <h3 className="text-lg font-bold text-slate-800 mb-6">{language === 'fr' ? 'Statistiques Rapides' : 'Quick Stats'}</h3>
              
              <div className="space-y-6 flex-1">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">{language === 'fr' ? 'Utilisation du Stockage' : 'Storage Usage'}</span>
                    <span className="text-slate-500">{recentActivity.storageUsage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${recentActivity.storageUsage}%` }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">{language === 'fr' ? 'Objectif Mensuel' : 'Monthly Target'}</span>
                    <span className="text-slate-500">{recentActivity.monthlyTarget}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${recentActivity.monthlyTarget}%` }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">{language === 'fr' ? 'Charge du Serveur' : 'Server Load'}</span>
                    <span className="text-slate-500">{recentActivity.serverLoad}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${recentActivity.serverLoad}%` }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="text-sm font-semibold text-slate-800 mb-4">{language === 'fr' ? 'Sources de Trafic' : 'Traffic Sources'}</h4>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-slate-600">{language === 'fr' ? 'Recherche Organique' : 'Organic Search'}</span>
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
                    <span className="text-sm text-slate-600">{language === 'fr' ? 'Réseaux Sociaux' : 'Social Media'}</span>
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
                <h3 className="text-lg font-bold text-slate-800">{language === 'fr' ? 'Commandes Récentes' : 'Recent Orders'}</h3>
                <p className="text-sm text-slate-500">{language === 'fr' ? 'Dernières transactions de votre boutique' : 'Latest transactions from your store'}</p>
              </div>
              <button className="text-sm font-medium text-green-600 hover:text-green-700 flex items-center gap-1">
                {language === 'fr' ? 'Tout voir' : 'View all'} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                    <th className="px-6 py-4 font-medium">{language === 'fr' ? 'ID Commande' : 'Order ID'}</th>
                    <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Client' : 'Customer'}</th>
                    <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Produit' : 'Product'}</th>
                    <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Date' : 'Date'}</th>
                    <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Montant' : 'Amount'}</th>
                    <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Statut' : 'Status'}</th>
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
                <h3 className="text-lg font-bold text-slate-800">{language === 'fr' ? 'Tous les articles' : 'All Posts'}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                      <th className="px-6 py-4 font-medium w-16">{language === 'fr' ? 'Image' : 'Image'}</th>
                      <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Titre' : 'Title'}</th>
                      <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Auteur' : 'Author'}</th>
                      <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Date' : 'Date'}</th>
                      <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Statut' : 'Status'}</th>
                      <th className="px-6 py-4 font-medium text-right">{language === 'fr' ? 'Actions' : 'Actions'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {blogPosts.map((post) => (
                      <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          {post.image ? (
                            <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200">
                              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                              <span className="text-slate-400 text-xs">{language === 'fr' ? 'Pas d\'img' : 'No img'}</span>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-800 line-clamp-2 max-w-xs" title={post.title}>{post.title}</td>
                        <td className="px-6 py-4 text-slate-600">{post.author}</td>
                        <td className="px-6 py-4 text-slate-500">{post.date}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${post.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'}`}>
                            {post.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button onClick={() => handleOpenModal(post)} className="text-slate-400 hover:text-blue-600 mx-2 transition-colors"><Edit3 className="w-4 h-4" /></button>
                          <button onClick={() => handleDeletePost(post.id)} className="text-slate-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === 'shop' && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-800">{language === 'fr' ? 'Produits Boutique' : 'Shop Products'}</h3>
                <button onClick={() => {
                  setEditingProduct(null);
                  setShopFormData({
                    image: '', price: '', rating: 5.0, category: 'Tisanes', weight: '70g',
                    content: { fr: { name: '', desc: '', specs: [''] }, en: { name: '', desc: '', specs: [''] } }
                  });
                  setIsShopModalOpen(true);
                }} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === 'fr' ? 'Nouveau Produit' : 'New Product'}</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                      <th className="px-6 py-4 font-medium w-16">{language === 'fr' ? 'Image' : 'Image'}</th>
                      <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Nom' : 'Name'}</th>
                      <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Catégorie' : 'Category'}</th>
                      <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Prix' : 'Price'}</th>
                      <th className="px-6 py-4 font-medium text-right">{language === 'fr' ? 'Actions' : 'Actions'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {products.filter(p => !['tools', 'seeds', 'fertilizers', 'dryers'].includes(p.category?.toLowerCase())).map((product) => (
                      <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          {product.image ? (
                            <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200">
                              <img src={product.image} alt={product.content?.en?.name} className="w-full h-full object-cover" />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                              <span className="text-slate-400 text-xs">{language === 'fr' ? 'Pas d\'img' : 'No img'}</span>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-800">
                          {product.content?.[language]?.name || product.content?.fr?.name || 'Unnamed'}
                        </td>
                        <td className="px-6 py-4 text-slate-600">{product.category}</td>
                        <td className="px-6 py-4 text-slate-600">{product.price}</td>
                        <td className="px-6 py-4 text-right">
                          <button onClick={() => {
                            setEditingProduct(product);
                            setShopFormData({
                              image: product.image,
                              price: product.price,
                              rating: product.rating,
                              category: product.category,
                              weight: product.weight,
                              content: product.content || {
                                fr: { name: '', desc: '', specs: [''] },
                                en: { name: '', desc: '', specs: [''] }
                              }
                            });
                            setImagePreview(product.image);
                            setIsShopModalOpen(true);
                          }} className="text-slate-400 hover:text-blue-600 mx-2 transition-colors"><Edit3 className="w-4 h-4" /></button>
                          <button onClick={() => handleDeleteProduct(product.id)} className="text-slate-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === 'products' && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-800">{language === 'fr' ? 'Équipements & Produits' : 'Equipment Products'}</h3>
                <button onClick={() => {
                  setEditingProduct(null);
                  setShopFormData({
                    image: '', price: '', rating: 5.0, category: 'tools', weight: '',
                    content: { fr: { name: '', desc: '', specs: [''] }, en: { name: '', desc: '', specs: [''] } }
                  });
                  setIsShopModalOpen(true);
                }} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === 'fr' ? 'Nouvel Équipement' : 'New Equipment'}</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                      <th className="px-6 py-4 font-medium w-16">{language === 'fr' ? 'Image' : 'Image'}</th>
                      <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Nom' : 'Name'}</th>
                      <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Catégorie' : 'Category'}</th>
                      <th className="px-6 py-4 font-medium">{language === 'fr' ? 'Prix' : 'Price'}</th>
                      <th className="px-6 py-4 font-medium text-right">{language === 'fr' ? 'Actions' : 'Actions'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {products.filter(p => ['tools', 'seeds', 'fertilizers', 'dryers'].includes(p.category?.toLowerCase())).map((product) => (
                      <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          {product.image ? (
                            <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200">
                              <img src={product.image} alt={product.content?.en?.name} className="w-full h-full object-cover" />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                              <span className="text-slate-400 text-xs">{language === 'fr' ? 'Pas d\'img' : 'No img'}</span>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-800">
                          {product.content?.[language]?.name || product.content?.fr?.name || 'Unnamed'}
                        </td>
                        <td className="px-6 py-4 text-slate-600">{product.category}</td>
                        <td className="px-6 py-4 text-slate-600">{product.price}</td>
                        <td className="px-6 py-4 text-right">
                          <button onClick={() => {
                            setEditingProduct(product);
                            setShopFormData({
                              image: product.image,
                              price: product.price,
                              rating: product.rating || 5.0,
                              category: product.category,
                              weight: product.weight || '',
                              content: product.content || {
                                fr: { name: '', desc: '', specs: [''] },
                                en: { name: '', desc: '', specs: [''] }
                              }
                            });
                            setImagePreview(product.image);
                            setIsShopModalOpen(true);
                          }} className="text-slate-400 hover:text-blue-600 mx-2 transition-colors"><Edit3 className="w-4 h-4" /></button>
                          <button onClick={() => handleDeleteProduct(product.id)} className="text-slate-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
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

      {/* Modal for adding/editing post */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-slate-800">
                {editingPost ? (language === 'fr' ? 'Modifier l\'article' : 'Edit Post') : (language === 'fr' ? 'Nouvel Article' : 'New Post')}
              </h2>
              <button onClick={handleCloseModal} className="text-slate-400 hover:text-slate-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSavePost} className="p-6 space-y-4 text-left">
              <div className="flex gap-6">
                <div className="w-2/3 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'Titre' : 'Title'}</label>
                    <input required type="text" className="w-full border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none transition-shadow" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'Extrait' : 'Excerpt'}</label>
                    <textarea required className="w-full border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none transition-shadow" value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'Contenu' : 'Content'}</label>
                    <textarea required rows={5} className="w-full border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none transition-shadow" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} />
                  </div>
                </div>
                <div className="w-1/3 flex flex-col">
                  <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'Image à la Une' : 'Featured Image'}</label>
                  
                  <div className="w-full aspect-video rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center overflow-hidden relative group hover:border-green-500 transition-colors mb-3">
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                      onChange={e => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setSelectedFile(file);
                          setImagePreview(URL.createObjectURL(file));
                        }
                      }} 
                    />
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center text-slate-400 p-4">
                        <Plus className="w-8 h-8 mx-auto mb-2 opacity-50 group-hover:text-green-500 transition-colors" />
                        <span className="text-sm font-medium">{language === 'fr' ? 'Cliquez pour uploader une image' : 'Click to upload image'}</span>
                      </div>
                    )}
                    {imagePreview && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-white text-sm font-medium bg-black/30 px-3 py-1.5 rounded-full">{language === 'fr' ? 'Changer l\'image' : 'Change Image'}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'URL de l\'image (optionnelle)' : 'Image URL (Optional fallback)'}</label>
                    <input type="text" className="w-full border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none transition-shadow text-sm" value={formData.image} onChange={e => { setFormData({...formData, image: e.target.value}); if(!selectedFile) setImagePreview(e.target.value); }} placeholder="https://..." />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'Date' : 'Date'}</label>
                  <input type="text" className="w-full border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none transition-shadow" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'Temps de lecture' : 'Read Time'}</label>
                  <input type="text" className="w-full border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none transition-shadow" value={formData.readTime} onChange={e => setFormData({...formData, readTime: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'Langue' : 'Language'}</label>
                  <select className="w-full border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none transition-shadow" value={formData.language} onChange={e => setFormData({...formData, language: e.target.value})}>
                    <option value="fr">{language === 'fr' ? 'Français' : 'French'}</option>
                    <option value="en">{language === 'fr' ? 'Anglais' : 'English'}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'Auteur' : 'Author'}</label>
                  <input type="text" className="w-full border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none transition-shadow" value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'Rôle de l\'auteur' : 'Author Role'}</label>
                  <input type="text" className="w-full border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none transition-shadow" value={formData.authorRole} onChange={e => setFormData({...formData, authorRole: e.target.value})} />
                </div>
              </div>
              <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
                <button type="button" onClick={handleCloseModal} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">{language === 'fr' ? 'Annuler' : 'Cancel'}</button>
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">{language === 'fr' ? 'Enregistrer' : 'Save'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal for adding/editing product */}
      {isShopModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-slate-800">
                {editingProduct ? (language === 'fr' ? 'Modifier Produit' : 'Edit Product') : (language === 'fr' ? 'Nouveau Produit' : 'New Product')}
              </h2>
              <button onClick={handleCloseShopModal} className="text-slate-400 hover:text-slate-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSaveProduct} className="p-6 space-y-6 text-left">
              <div className="flex gap-6">
                <div className="w-1/3 flex flex-col">
                  <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'Image du Produit' : 'Product Image'}</label>
                  <div className="w-full aspect-square rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center overflow-hidden relative group hover:border-green-500 transition-colors mb-3">
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                      onChange={e => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setSelectedFile(file);
                          setImagePreview(URL.createObjectURL(file));
                        }
                      }} 
                    />
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center text-slate-400 p-4">
                        <Plus className="w-8 h-8 mx-auto mb-2 opacity-50 group-hover:text-green-500 transition-colors" />
                        <span className="text-sm font-medium">{language === 'fr' ? 'Uploader Image' : 'Upload Image'}</span>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'Prix' : 'Price'}</label>
                      <input required type="text" className="w-full border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none" value={shopFormData.price} onChange={e => setShopFormData({...shopFormData, price: e.target.value})} placeholder="e.g. 5.00$" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'Poids' : 'Weight'}</label>
                      <input type="text" className="w-full border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none" value={shopFormData.weight} onChange={e => setShopFormData({...shopFormData, weight: e.target.value})} placeholder="e.g. 70g" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'Catégorie' : 'Category'}</label>
                      <select required className="w-full border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none" value={shopFormData.category} onChange={e => setShopFormData({...shopFormData, category: e.target.value})}>
                        {activeTab === 'products' ? (
                          <>
                            <option value="tools">Tools / Outils</option>
                            <option value="seeds">Seeds / Semences</option>
                            <option value="fertilizers">Fertilizers / Engrais</option>
                            <option value="dryers">Dryers / Séchoirs</option>
                          </>
                        ) : (
                          <>
                            <option value="Tisanes">Tisanes</option>
                            <option value="Farines">Farines</option>
                            <option value="Miels">Miels</option>
                            <option value="Huiles">Huiles</option>
                            <option value="Poudres">Poudres</option>
                            <option value="Savons">Savons</option>
                          </>
                        )}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{language === 'fr' ? 'Note' : 'Rating'}</label>
                      <input type="number" step="0.1" min="0" max="5" className="w-full border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none" value={shopFormData.rating} onChange={e => setShopFormData({...shopFormData, rating: parseFloat(e.target.value)})} />
                    </div>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="w-2/3 flex flex-col gap-6">
                  {/* French Content */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">🇫🇷 {language === 'fr' ? 'Contenu Français' : 'French Content'}</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">{language === 'fr' ? 'Nom' : 'Name'}</label>
                        <input required type="text" className="w-full border border-slate-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-500 outline-none" value={shopFormData.content.fr.name} onChange={e => setShopFormData({...shopFormData, content: {...shopFormData.content, fr: {...shopFormData.content.fr, name: e.target.value}}})} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">{language === 'fr' ? 'Description' : 'Description'}</label>
                        <textarea required rows={3} className="w-full border border-slate-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-500 outline-none" value={shopFormData.content.fr.desc} onChange={e => setShopFormData({...shopFormData, content: {...shopFormData.content, fr: {...shopFormData.content.fr, desc: e.target.value}}})} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">{language === 'fr' ? 'Caractéristiques (séparées par virgule)' : 'Specs (comma separated)'}</label>
                        <input type="text" className="w-full border border-slate-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-500 outline-none" value={shopFormData.content.fr.specs.join(', ')} onChange={e => setShopFormData({...shopFormData, content: {...shopFormData.content, fr: {...shopFormData.content.fr, specs: e.target.value.split(',').map(s => s.trim())}}})} />
                      </div>
                    </div>
                  </div>

                  {/* English Content */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">🇬🇧 {language === 'fr' ? 'Contenu Anglais' : 'English Content'}</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">{language === 'fr' ? 'Nom' : 'Name'}</label>
                        <input required type="text" className="w-full border border-slate-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-500 outline-none" value={shopFormData.content.en.name} onChange={e => setShopFormData({...shopFormData, content: {...shopFormData.content, en: {...shopFormData.content.en, name: e.target.value}}})} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">{language === 'fr' ? 'Description' : 'Description'}</label>
                        <textarea required rows={3} className="w-full border border-slate-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-500 outline-none" value={shopFormData.content.en.desc} onChange={e => setShopFormData({...shopFormData, content: {...shopFormData.content, en: {...shopFormData.content.en, desc: e.target.value}}})} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">{language === 'fr' ? 'Caractéristiques (séparées par virgule)' : 'Specs (comma separated)'}</label>
                        <input type="text" className="w-full border border-slate-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-500 outline-none" value={shopFormData.content.en.specs.join(', ')} onChange={e => setShopFormData({...shopFormData, content: {...shopFormData.content, en: {...shopFormData.content.en, specs: e.target.value.split(',').map(s => s.trim())}}})} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
                <button type="button" onClick={handleCloseShopModal} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">{language === 'fr' ? 'Annuler' : 'Cancel'}</button>
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">{language === 'fr' ? 'Enregistrer' : 'Save'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
