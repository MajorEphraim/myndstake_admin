import { auth, signInWithEmailAndPassword, signOut } from '../configs/configs'
import { getAdminDetails } from '../services/firestoreServices'

const signIn = async(email, password)=>{
    try {
        const userCred = await signInWithEmailAndPassword(auth, email, password)
        const user = userCred.user
        const userId = user.uid
        const data = await getAdminDetails(userId)
        return {userId, data}
    } catch (error) {
        throw new Error(error);
    }
}

const signOutUser = async()=>{
    try {
        await signOut(auth)
    } catch (error) {
        throw new Error(error);
    }
}
export { signIn, signOutUser }