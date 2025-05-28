import { MultilangText } from '../types/general.types';

export interface IDashboarResponse {
  analytics: IAnalytics;
  recentPosts: IRecentPost[];
  recentLogs: any[];
}

export interface IRecentPost {
  id: number;
  featuredImage: string;
  title: { [key: string]: string };
  excerpt: { [key: string]: string };
  status: string;
  category: string;
}

export interface IAnalytics {
  totalPageviews: ITotalPageviews;
  totalAffiliateClicks: ITotalPageviews;
  totalConversions: ITotalPageviews;
  totalPostsPublished: number;
  activeUsers: number;
  totalPostsApproved: number;
  totalPostsPending: number;
  totalPostsRejected: number;
  dailyPageviews: IDailyPageview[];
  dailyAffiliateClicks: IDailyPageview[];
  trafficSources: ITrafficSource[];
}

export interface ITrafficSource {
  source: string;
  percentage: number;
}

export interface IDailyPageview {
  date: string;
  value: number;
}

export interface ITotalPageviews {
  currentValue: number;
  percentageChange: number;
}

export interface IDashboardCard {
  title: string;
  value: number | string;
  icon: string;
  iconBgColor: string;
  iconColor: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export interface IDashboardLog {
  id: string;
  timestamp: string;
  level: string;
  message: string;
  className?: string;
  methodName?: string;
  threadName?: string;
  exceptionDetails?: string;
}

export interface ILogDisplayItem {
  id: string;
  timestamp: string;
  action: string;
  user: string;
  details: {
    postId?: number;
    postTitle?: string;
    change?: string;
  };
  originalLevel: string;
}
