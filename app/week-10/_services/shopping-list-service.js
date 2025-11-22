import { database } from "../_utils/firebase.js";
import{
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  query
} 
from "firebase/firestore";

// Grabs all shopping list items from a spcific user (ID) from Firestore
export async function getItems(userId){
  const items = [];

  const referItem = collection(database, "users", userId, "items");
  const queryItem = query(referItem);

    // Reads all documents that match the query
  const snapshot = await getDocs(queryItem);
  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

// Adds a new Item from the shopping list to Firestore (based on user ID)
export async function addItem(userId, item){
  const referItem = collection(database, "users", userId, "items");
  
  // Writes the data to firestore
  const docRef = await addDoc(referItem, item);
  return docRef.id;
}

// TO DO: Add deleteItem function
export async function deleteItem(userId, itemId){
  const docRef =  collection(database, "users", userId, "items", itemId);
  await deleteDoc(docRef);
}