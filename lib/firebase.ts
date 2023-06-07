import { initializeApp } from "firebase/app";
import {
  CollectionReference,
  DocumentData,
  collection,
  getFirestore,
} from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

import { Category, Post, User } from "./firebasetypes";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

// Helper function to add types to Firestore collection
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

// Export collections
export const usersCollection = createCollection<User>("users");
export const postsCollection = createCollection<Post>("posts");
export const categoryCollection = createCollection<Category>("category");

// Initialize Storage
const storage = getStorage(app);

// Export storage reference
export const contentStorageRef = ref(storage, "content");
export const bannerStorageRef = ref(storage, "banner");
