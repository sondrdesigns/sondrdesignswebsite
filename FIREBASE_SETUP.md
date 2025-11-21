# Firebase Setup Guide

This guide will help you set up Firebase to collect emails from your contact form.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard (you can skip Google Analytics for now if you want)

## Step 2: Create a Web App

1. In your Firebase project, click the web icon (`</>`) or "Add app" > Web
2. Register your app with a nickname (e.g., "Sondr Website")
3. Copy the Firebase configuration object that appears

## Step 3: Enable Firestore Database

1. In the Firebase Console, go to "Build" > "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development) or "Start in production mode" (for production)
4. Select a location for your database
5. Click "Enable"

## Step 4: Set Up Security Rules (Important!)

1. Go to "Firestore Database" > "Rules"
2. Update the rules to allow writes to the contacts collection:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to write to contacts collection
    match /contacts/{document=**} {
      allow create: if true;
      allow read: if false; // Only allow writes, not reads from client
    }
  }
}
```

**Note:** For production, you should implement proper authentication and validation. The above rules allow anyone to submit contacts, which is fine for a contact form.

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project (copy from `.env.example` if it exists)
2. Add your Firebase configuration values:

```env
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

3. Replace the placeholder values with your actual Firebase config values from Step 2

## Step 6: Restart Your Development Server

After creating the `.env` file, restart your dev server:

```bash
npm run dev
```

## Step 7: Test the Contact Form

1. Navigate to the contact page on your website
2. Fill out and submit the form
3. Check your Firestore database in the Firebase Console to see the submitted contact

## Viewing Submitted Contacts

1. Go to Firebase Console > Firestore Database
2. You should see a `contacts` collection
3. Each document contains:
   - `name`: The submitter's name
   - `email`: The submitter's email
   - `message`: The message content
   - `timestamp`: Server timestamp of submission
   - `createdAt`: ISO timestamp

## Troubleshooting

- **"Firebase: Error (auth/configuration-not-found)"**: Make sure your `.env` file exists and contains all required variables
- **"Permission denied"**: Check your Firestore security rules
- **Environment variables not loading**: Make sure variable names start with `VITE_` and restart your dev server

## Next Steps

- Set up proper Firestore security rules for production
- Consider adding email notifications when contacts are submitted
- Add form validation and spam protection
- Export contacts to CSV or integrate with a CRM

