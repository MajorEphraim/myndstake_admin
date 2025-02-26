import { db, doc, getDoc, collection, 
        addDoc,updateDoc, deleteDoc } from "../configs/configs";

// get documentations user details
const getDocDetails = async(id)=>{
    
    const docRef = doc(db, "user details", id);
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

// Removes content based on the id of the doc
const removeContent = async(id)=>{
    try {
        await deleteDoc(doc(db, "content", id));
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

// Verify the identification/documentation sent
const verifyDocumentation = async(id, userId)=>{
    try {
        await updateDoc(doc(db, "user details", userId), {status:'Verified'});
        await updateDoc(doc(db, "documentations",id), {status:'Verified'});
    } catch (error) {
        throw new Error(error);
    }
}

// Removes identification/documentation based on the id of the doc
const rejectDocumentation = async(id, userId)=>{
    try {
        await deleteDoc(doc(db, "documentations", id));
        await updateDoc(doc(db, "user details", userId), {status:'Not verified'});
    } catch (error) {
        throw new Error(error);
        
    }
}

// export all methods in an object
export { getDocDetails, getAdminDetails, addNewContent,
        updateContent, makePayment, verifyDocumentation, 
        removeContent, rejectDocumentation}