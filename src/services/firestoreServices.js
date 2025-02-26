import { db, doc, getDoc, collection, 
        addDoc,updateDoc, } from "../configs/configs";

// get documentations user details
const getDocDetails = async(id)=>{
    const docRef = doc(db, "userDetails", id);
    try {
        const docSnap = await getDoc(docRef);
        let data;
        if (docSnap.exists()) {
           data = docSnap.data()
        } else {
          console.log("No such document!");
        }
        
        return data
    } catch (error) {
        throw new Error(error);
    }
}

// get details for loggeg in admin
const getAdminDetails = async(id)=>{
    const docRef = doc(db, "admin details", id);
    try {
        const docSnap = await getDoc(docRef);
        let data;
        if (docSnap.exists()) {
           data = docSnap.data()
        } else {
          console.log("No such document!");
        }
        
        return data
    } catch (error) {
        throw new Error(error);
    }
}


// Add a new content document
const addNewContent = async(content)=>{
    try {
        await addDoc(collection(db, "content"), content);
    } catch (error) {
        throw new Error(error);
    }
}

// Update content of a document
const updateContent = async(content,id)=>{
    try {
        const ref = doc(db, "content",id);

        await updateDoc(ref, content);

    } catch (error) {
        throw new Error(error);
    }
}

// Update payment details
const makePayment = async(id)=>{
    try {
        const ref = doc(db, "payments",id);

        await updateDoc(ref, {status:'Paid'});
    } catch (error) {
        throw new Error(error);
    }
}

// Verify the identification sent
const verifyDocumentation = async(id, userId)=>{
    try {
        await updateDoc(doc(db, "user details", userId), {status:'Verified'});
        await updateDoc(doc(db, "documentations",id), {status:'Verified'});
    } catch (error) {
        throw new Error(error);
    }
}

// export all methods in an object
export { getDocDetails, getAdminDetails, addNewContent,
        updateContent, makePayment, verifyDocumentation}