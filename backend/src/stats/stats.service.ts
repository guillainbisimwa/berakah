import { Injectable } from '@nestjs/common';

@Injectable()
export class StatsService {
  getDashboardStats() {
    return {
      stats: [
        { title: 'Total Revenue', value: '$124,500', change: '+18.5%', isPositive: true },
        { title: 'Active Users', value: '8,240', change: '+12.2%', isPositive: true },
        { title: 'Total Sales', value: '3,450', change: '+5.4%', isPositive: true },
        { title: 'Conversion Rate', value: '6.8%', change: '-0.5%', isPositive: false },
      ],
      revenueOverview: [45, 60, 35, 80, 50, 95, 70, 110, 85, 125, 90, 140],
      trafficSources: {
        organic: 55,
        direct: 25,
        social: 20,
      },
      recentActivity: {
        storageUsage: 45,
        monthlyTarget: 92,
        serverLoad: 38,
      },
      recentOrders: [
        { id: '#ORD-7021', customer: 'Alice Freeman', product: 'Smart Irrigation Pro', amount: '$1,450.00', status: 'Completed', date: '2026-07-20' },
        { id: '#ORD-7022', customer: 'David Chen', product: 'Organic Fertilizer 50lb', amount: '$85.00', status: 'Processing', date: '2026-07-20' },
        { id: '#ORD-7023', customer: 'Green Acres Farm', product: 'Soil Sensor Kit', amount: '$320.00', status: 'Shipped', date: '2026-07-19' },
        { id: '#ORD-7024', customer: 'Emma Thompson', product: 'Eco-Pesticide Bundle', amount: '$110.00', status: 'Completed', date: '2026-07-18' },
        { id: '#ORD-7025', customer: 'Valley View Co.', product: 'Tractor GPS System', amount: '$2,100.00', status: 'Pending', date: '2026-07-18' },
        { id: '#ORD-7026', customer: 'Lucas Martinez', product: 'Heirloom Seed Vault', amount: '$150.00', status: 'Completed', date: '2026-07-17' },
      ],
      blogPosts: [
        { id: 1, title: '10 Sustainable Farming Practices for 2026', author: 'Dr. Sarah Jenkins', date: '2026-07-18', status: 'Published' },
        { id: 2, title: 'How AI is Transforming Modern Agriculture', author: 'Mark Robertson', date: '2026-07-15', status: 'Published' },
        { id: 3, title: 'A Guide to Organic Pest Control', author: 'Elena Gomez', date: '2026-07-10', status: 'Draft' },
        { id: 4, title: 'Maximizing Crop Yields with Smart Sensors', author: 'Dr. Sarah Jenkins', date: '2026-07-05', status: 'Published' },
        { id: 5, title: 'Water Conservation Techniques for Arid Climates', author: 'James Wilson', date: '2026-07-01', status: 'Draft' },
      ]
    };
  }
}
