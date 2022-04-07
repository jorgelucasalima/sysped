import { createContext, useState, useEffect } from "react";
import firebase from "../services/firebaseConnection"

export const ObrasContext = createContext([])


function ObraProvider({ children }) {
  const [obras, setObras] = useState([])

  useEffect(() => {
    async function loadObras() {
      await firebase.firestore().collection('obras')
      .onSnapshot((doc) => {
        let arrayObras = []

        doc.forEach((item)=>{
          arrayObras.push({
            id: item.id,
            obras: item.data().obras,
            responsavelObras: item.data().responsavelObras,
          })
        })

        setObras(arrayObras)
      })
    }

    loadObras()
  }, [])

  return (
    <ObrasContext.Provider value={obras}>
      {children}
    </ObrasContext.Provider>
  )

}

export default ObraProvider
