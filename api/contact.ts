import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  );

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: firebasePrivateKey,
    }),
  });
}

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "POST") {
    // Example: Save data to Firestore
    const { name, email, message } = req.body;
    try {
      const docRef = await admin.firestore().collection("contacts").add({
        name,
        email,
        message,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      res.status(200).send({ id: docRef.id });
    } catch (error) {
      console.error("Error saving contact message: ", error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    // Handle any non-POST requests
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
};
