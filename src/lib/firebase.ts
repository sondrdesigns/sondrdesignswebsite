import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// These values should be in your .env file
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Validate that all required environment variables are present
const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
];

const missingVars = requiredEnvVars.filter(
  (varName) => {
    const value = import.meta.env[varName];
    return !value || 
           value.includes('your-') || 
           value.includes('your-project-id') ||
           value.includes('your-api-key') ||
           value.includes('your-messaging-sender-id') ||
           value.includes('your-app-id');
  }
);

if (missingVars.length > 0) {
  console.error('❌ Firebase Configuration Error: Missing or placeholder environment variables:');
  missingVars.forEach((varName) => {
    console.error(`   - ${varName}`);
  });
  console.error('\n📝 Please update your .env file with your Firebase configuration values.');
  console.error('   See FIREBASE_SETUP.md for instructions.\n');
}

// Check if any values are still placeholders
const hasPlaceholders = Object.values(firebaseConfig).some(
  (value) => typeof value === 'string' && value.includes('your-')
);

if (hasPlaceholders) {
  console.warn('⚠️  Warning: Firebase configuration contains placeholder values.');
  console.warn('   The contact form will not work until you add your Firebase credentials to .env\n');
}

// Initialize Firebase
let app;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.error('❌ Firebase initialization failed:', error);
  throw error;
}

export { db };
export default app;

