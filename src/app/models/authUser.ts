export interface AuthUser {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: [
    {
      providerId: string;
      uid: string;
      displayName: null;
      email: string;
      phoneNumber: null;
      photoURL: null;
    }
  ];
  stsTokenManager: {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  };
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
}
