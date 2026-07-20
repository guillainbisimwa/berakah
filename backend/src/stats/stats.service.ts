import { Injectable } from '@nestjs/common';

@Injectable()
export class StatsService {
  getDashboardStats() {
    return {
      stats: [
        { title: 'Total Revenue', value: '$54,230', change: '+12.5%', isPositive: true },
        { title: 'Active Users', value: '2,405', change: '+5.2%', isPositive: true },
        { title: 'Total Sales', value: '1,234', change: '-2.1%', isPositive: false },
        { title: 'Conversion', value: '4.3%', change: '+1.2%', isPositive: true },
      ],
      revenueOverview: [30, 45, 25, 60, 40, 70, 50, 80, 55, 90, 65, 85],
      trafficSources: {
        organic: 45,
        direct: 30,
        social: 25,
      },
      recentActivity: {
        storageUsage: 65,
        monthlyTarget: 82,
        serverLoad: 45,
      }
    };
  }
}
