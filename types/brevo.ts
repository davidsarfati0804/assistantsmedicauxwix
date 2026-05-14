export interface BrevoAccount {
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
  plan: Array<{
    type: string;
    creditsType: string;
    credits: number;
    startDate?: string;
    endDate?: string;
    userLimit?: number;
  }>;
  relay?: {
    enabled: boolean;
    data: {
      userName: string;
      relay: string;
      port: number;
    };
  };
  marketingAutomation?: {
    key: string;
    enabled: boolean;
  };
}

export interface BrevoEmailCampaignStats {
  globalStats?: {
    uniqueClicks: number;
    clickers: number;
    complaints: number;
    delivered: number;
    sent: number;
    softBounces: number;
    hardBounces: number;
    uniqueViews: number;
    unsubscribed: number;
    viewed: number;
    deferred: number;
  };
  campaignStats?: Array<{
    listId: number;
    uniqueClicks: number;
    clickers: number;
    complaints: number;
    delivered: number;
    sent: number;
    softBounces: number;
    hardBounces: number;
    uniqueViews: number;
    unsubscribed: number;
    viewed: number;
  }>;
}

export interface BrevoEmailCampaign {
  id: number;
  name: string;
  subject: string;
  type: string;
  status: 'draft' | 'queued' | 'sent' | 'archive' | 'scheduled' | 'test' | 'in_process' | 'suspended';
  scheduledAt?: string;
  sentDate?: string;
  createdAt: string;
  modifiedAt: string;
  htmlContent?: string;
  testSent?: boolean;
  header?: string;
  footer?: string;
  sender?: {
    email: string;
    name: string;
    id?: number;
  };
  recipients?: {
    lists?: number[];
    exclusionLists?: number[];
  };
  statistics?: BrevoEmailCampaignStats;
  openRate?: number;
  clickRate?: number;
  shareLink?: string;
}

export interface BrevoList {
  id: number;
  name: string;
  totalBlacklisted: number;
  totalSubscribers: number;
  folderId?: number;
  createdAt: string;
  campaignStats?: Array<{
    campaignId: number;
    stats: {
      uniqueClicks: number;
      clickers: number;
      complaints: number;
      delivered: number;
      sent: number;
      softBounces: number;
      hardBounces: number;
      uniqueViews: number;
      viewed: number;
    };
  }>;
}

export interface BrevoSender {
  id: number;
  name: string;
  email: string;
  active: boolean;
  ips?: Array<{
    ip: string;
    domain: string;
    weight: number;
  }>;
}

export interface BrevoContact {
  id: number;
  email: string;
  emailBlacklisted: boolean;
  smsBlacklisted: boolean;
  createdAt: string;
  modifiedAt: string;
  listIds: number[];
  attributes?: Record<string, string | number | boolean>;
}
